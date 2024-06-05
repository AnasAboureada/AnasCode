import { NextResponse } from 'next/server';

import { BlogPost } from '@/components/molecules/BlogCard/BlogCard';

export const GET = async () => {

  const mainArticles: BlogPost[] = [
    {
      title: 'All You Need to Know About “Algorithms Complexity Analysis” and Big O',
      description: `learn how to design better algorithms by comparing their run time and space.
      How do we know if algorithm A is better than algorithm B?`,
      category: 'Algorithms',
      url: 'https://medium.com/@anas-aboreeda/all-you-need-to-know-about-algorithms-complexity-analysis-and-big-o-notation-o-n-6cf161429817',
      image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*LGiqhSzLln5lww26.jpeg',
    },
    {
      title: 'How to solve the “Large Fibonacci Number modulo M” Problem in Java',
      description: 'In this article, we will learn how to solve the “Large Fibonacci Number modulo M” Problem in Java.',
      category: 'Problem Solving',
      image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*5K99UCTWypVMOh3qXXQ0ww.jpeg',
      url: 'https://medium.com/@anas-aboreeda/solution-of-fibonacci-number-modulo-m-problem-in-java-fac11fbce187',
    },
  ];

  return NextResponse.json(mainArticles);
};
