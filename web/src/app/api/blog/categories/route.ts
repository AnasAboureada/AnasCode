import { NextResponse } from 'next/server';

import Article from '@/app/models/Article';

export const GET = async () => {

  const categories = await Article.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        category: '$_id',
        count: 1,
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]);

  console.log('categories', categories);

  return NextResponse.json(categories);
};