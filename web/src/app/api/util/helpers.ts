import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import moment from 'moment';
import { nanoid } from 'nanoid';
import readingTime from 'reading-time';

import { IArticle } from '@/app/models/Article';

interface MarkdownFile {
  markdownPath: string;
  folderPath: string;
}

export const getMarkdownFiles = (directory: string): MarkdownFile[] => {
  let results: MarkdownFile[] = [];

  const items = fs.readdirSync(directory, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(directory, item.name);

    if (item.isDirectory()) {
      results = results.concat(getMarkdownFiles(fullPath));
    } else if (item.isFile() && (item.name.endsWith('.md') || item.name.endsWith('.mdx'))) {
      results.push({
        markdownPath: fullPath,
        folderPath: directory,
      });
    }
  }

  return results;
};

export const readMarkdown = (filePath: string): Partial<IArticle> => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  const formats = [
    'YYYY-MM-DD',
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'dddd, MMMM Do YYYY, h:mm:ss a',
    // add any other formats you want to support
  ];

  const parseDate = (dateStr: string | undefined) => {
    if (!dateStr) return moment().toDate();
    const m = moment(dateStr, formats, true); // set strict parsing to true
    return m.isValid() ? m.toDate() : moment().toDate();
  };

  const slug = data.slug || data.title.toLowerCase().replace(/ /g, '-');
  const createdDate = parseDate(data.createdDate);
  const createdWeek = moment(createdDate).week();

  const defaultValues = {
    articleId: `${slug}---${nanoid()}`,
    description: '',
    author: 'Anas Aboreeda',
    authorImage: '/assets/anascode/anas-photos/anasPhoto.jpg',
    tags: [],
    readTime: readingTime(content).text,
    bannerImage: `https://picsum.photos/300/200?random=${Math.ceil(Math.random() * 100) + 10}`,
    highlighted: 'NONE',
    published: false,
  };

  const dataValues = {
    articleId: data.articleId,
    title: data.title,
    slug,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    description: data.description,
    createdDate,
    updatedDate: parseDate(data.updatedDate),
    weekNumber: data.weekNumber || createdWeek,
    category: data.category,
    excerpt: data.excerpt,
    author: data.author,
    authorImage: data.authorImage,
    tags: data.tags,
    bannerImage: data.bannerImage,
    highlighted: data.highlighted,
    published: data.published,
    content,
  };

  const article: Partial<IArticle> = {
    ...defaultValues,
    ...dataValues,
  };


  return article;
};



