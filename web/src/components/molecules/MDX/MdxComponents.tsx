'use client';

import 'katex/dist/katex.min.css';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { Box, List, ListItem, Typography, TypographyProps } from '@mui/material';
import { BoxProps } from '@mui/system';

const Wrapper = ({ children }: BoxProps) => {
  return <Box my={8}>{children}</Box>;
};

const components = {
  ul: List,
  ol: List,
  li: (props: BoxProps) => <ListItem {...props} />,
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={dark}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
  pre: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={dark}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
  img: (props: any) => (
    <Wrapper>
      <Image {...props} />
    </Wrapper>
  ),
  h1: (props: TypographyProps) => (
    <Typography variant="h1" className="large-text font-sans" {...props}>
      {props.children}
    </Typography>
  ),
};

export function CustomMDX(props: { source: string, components?: any }) {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {props.source}
    </ReactMarkdown>
  );
}