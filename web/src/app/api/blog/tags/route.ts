import { NextResponse } from 'next/server';

import Article from '@/app/models/Article';

export const GET = async () => {

  const tags = await Article.aggregate([
    {
      $unwind: '$tags',
    },
    {
      $group: {
        _id: '$tags',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        tag: '$_id',
        count: 1,
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]);

  return NextResponse.json(tags);
};
