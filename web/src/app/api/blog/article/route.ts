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

export const PUT = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;
  const slug = searchParams.get('slug');
  const action = searchParams.get('action');

  try {
    await dbConnect();
    let response;

    switch (action) {
      case 'like':
        response = await Article.findOneAndUpdate({ slug }, { $inc: { claps: 1 } });
        break;
      case 'unlike':
        response = await Article.findOneAndUpdate({ slug }, { $inc: { claps: -1 } });
        break;
      case 'view':
        response = await Article.findOneAndUpdate({ slug }, { $inc: { views: 1 } });
        break;
      default:
        return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('DB Operation Error:', error);
    return NextResponse.json({ message: 'DB Operation Error' }, { status: 500 });
  }
};
