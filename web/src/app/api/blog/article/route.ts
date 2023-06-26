import { NextRequest, NextResponse } from 'next/server';

import dbConnect from '@/app/api/util/DbConnect';
import Article from '@/app/models/Article';

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;
  const slug = searchParams.get('slug');

  try {
    await dbConnect();

    const article = await Article.findOne({ slug });

    if (!article) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('DB Operation Error:', error);
    return NextResponse.json({ message: 'DB Operation Error' }, { status: 500 });
  }
};
