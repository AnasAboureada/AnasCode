import { NextResponse } from 'next/server';

import { BlogPost } from '@/components/molecules/BlogCard/BlogCard';

export const GET = async () => {

  const secondaryArticles: BlogPost[] = [
    {
      title: 'Demystifying Database Impedance Mismatch: A Simple, Straightforward Guide',
      description: 'Impedance mismatch is the difference between the relational model and the in-memory data structures',
      category: 'Database',
      url: 'https://medium.com/@anas-aboreeda/demystifying-database-impedance-mismatch-a-simple-straightforward-guide-bc2bf9bb7493',
    },
    {
      title: 'Cache Eviction Policies: Like Fridge Police for Your Snacks',
      description: "They're like the fridge police for your data, making sure that only the freshest and most important data gets to stay in the cache.",
      category: 'System Design',
      url: 'https://medium.com/@anas-aboreeda/cache-eviction-policies-like-fridge-police-for-your-snacks-cae89070c62d',
    },
  ];

  return NextResponse.json(secondaryArticles);
};
