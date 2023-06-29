import { NextResponse } from 'next/server';

import Article from '@/app/models/Article';

import dbConnect from '../../util/DbConnect';

export const GET = async () => {
  await dbConnect();

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

  return NextResponse.json(categories);
};
