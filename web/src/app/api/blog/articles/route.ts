import path from 'path';

import { SortOrder } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/app/api/util/DbConnect';
import { getMarkdownFiles, readMarkdown } from '@/app/api/util/helpers';
import Article from '@/app/models/Article';

export const PUT = async () => {

  try {
    await dbConnect();

    const allArticlesPaths = getMarkdownFiles(path.join(process.cwd(), 'src/app/api/blog/articles/_articles'));

    let count = 1;

    for (const articlePath of allArticlesPaths) {
      console.log(`writing ... ${count++} / ${allArticlesPaths.length} `, articlePath.markdownPath);

      const articleData = {
        ...readMarkdown(articlePath.markdownPath),
        mediaPath: articlePath.folderPath,
      };

      await Article.findOneAndUpdate({ articleId: articleData.articleId }, articleData, { upsert: true });
      console.log('done writing ... ', articlePath.markdownPath, '\n');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DB Operation Error:', error);
    return NextResponse.json({ message: 'DB Operation Error' }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'updatedDate';
  const category = searchParams.get('category') || 'all';
  const primaryType = searchParams.get('primaryType');
  const secondaryType = searchParams.get('secondaryType');

  const limit = 10; // number of records per page
  const skip = (parseInt(page, 10) - 1) * limit; // skip for pagination

  // Default sort order
  let sortOrder: SortOrder | string = 'desc'; // Descending
  let sortField = sort;
  if (sort[0] === '-') {
    sortField = sort.substring(1);
    sortOrder = 'asc'; // Ascending
  }

  const query: {
    category?: string;
    highlighted?: 'PRIMARY' | 'SECONDARY';
  } = {};

  if (category !== 'all') {
    query.category = category;
  }

  // Add filters for primary and secondary types if they are provided
  if (primaryType) {
    query.highlighted = 'PRIMARY';
  }
  if (secondaryType) {
    query.highlighted = 'SECONDARY';
  }

  const sortQuery: { [key: string]: SortOrder } = { [sortField]: sortOrder as SortOrder };

  try {
    await dbConnect();

    const [articles, articlesCount] = await Promise.all([
      Article.find({ ...query, published: true })
        .sort(sortQuery)
        .skip(skip)
        .limit(limit)
        .select('-content'),
      Article.countDocuments(query),
    ]);

    return NextResponse.json({ articles, articlesCount });
  } catch (error) {
    console.error('DB Operation Error:', error);
    return NextResponse.json({ message: 'DB Operation Error' }, { status: 500 });
  }
};


