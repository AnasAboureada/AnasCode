'use client';

import 'katex/dist/katex.min.css';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { Typography } from '@mui/material';

const components = {
  ul: ({ node, ...props }) => <ul {...props} className={'list-disc list-inside ml-2 my-4 font-sans text-brand-color '} />,
  ol: ({ node, ...props }) => <ol {...props} className={'list-decimal list-inside ml-2 my-4 font-sans text-brand-color'} />,
  li: ({ node, ...props }) => <li {...props} className={'ml-2 font-sans text-brand-color'} />,
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <div className='my-4'>
        <SyntaxHighlighter
          {...props}
          style={atomDark}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter >
      </div>
    ) : (
      <code {...props} className={`${className} my-4`}>
        {children}
      </code>
    );
  },
  pre: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <div className='my-4'>
        <SyntaxHighlighter
          {...props}
          style={atomDark}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code {...props} className={`${className} my-4`}>
        {children}
      </code>
    );
  },
  img: ({ node, src, width = 800, height = 800, alt = '', ...props }) => {
    const isInternal = src.startsWith('/') || !src.startsWith('http');

    if (isInternal) {

      src = src.substring(src.lastIndexOf('/assets'));

      return (
        <div className="flex justify-center items-center my-4">
          <Image height={height} width={width} src={src} alt={alt} {...props} />
        </div>
      );

    }
    return (
      <div className="flex justify-center items-center my-4">
        <img alt={alt} src={src} {...props} />
      </div>
    );
  },
  h1: ({ node, ...props }) => (
    <Typography variant="h1" className={'font-5xl font-sans m-4 text-center text-brand-color hidden'} {...props}>
      {props.children}
    </Typography>
  ),
  h2: ({ node, ...props }) => (
    <Typography variant="h3" component="h2" className={'font-sans my-4 text-brand-color font-bold'} {...props}>
      {props.children}
    </Typography>
  ),
  h3: ({ node, ...props }) => (
    <Typography variant="h4" component="h3" className={'font-sans my-4 text-brand-color'} {...props}>
      {props.children}
    </Typography>
  ),
  h4: ({ node, ...props }) => (
    <Typography variant="h5" component="h4" className={'font-sans my-4 text-brand-color'} {...props}>
      {props.children}
    </Typography>
  ),
  h5: ({ node, ...props }) => (
    <Typography variant="h6" component="h5" className={'font-sans my-4 text-brand-color'} {...props}>
      {props.children}
    </Typography>
  ),
  h6: ({ node, ...props }) => (
    <Typography variant="subtitle1" component="h6" className={'font-sans my-4 text-brand-color'} {...props}>
      {props.children}
    </Typography>
  ),
  p: ({ node, ...props }) => (
    <Typography variant="body1" className={'font-sans my-1 text-brand-color'} {...props}>
      {props.children}
    </Typography>
  ),
  a: ({ node, href, ...props }) => {
    const isInternal = href.startsWith('/') || !href.startsWith('http');

    if (isInternal) {
      href = href.substring(href.lastIndexOf('/assets'));
    } else {
      // Add "rel" attribute for external links
      props.rel = 'noopener noreferrer';
      props.target = '_blank';
      props['aria-label'] = props['aria-label'] || props.children[0];
    }

    return (
      <a href={href} {...props} className="underline">
        {props.children}
      </a>
    );
  },
  blockquote: ({ node, ...props }) => (
    <blockquote className={'border-l-4 border-brand-color pl-4 my-4'} {...props}>
      {props.children}
    </blockquote>
  ),
  hr: ({ node, ...props }) => (
    <hr className={'my-4'} {...props} />
  ),
  table: ({ node, ...props }) => (
    <div className={'overflow-x-auto flex justify-center my-4'}>
      <table className={'table-auto border-collapse border border-brand-color'} {...props}>
        {props.children}
      </table>
    </div>
  ),
  thead: ({ node, ...props }) => (
    <thead className={'border-collapse border border-brand-color p-2'} {...props}>
      {props.children}
    </thead>
  ),
  tbody: ({ node, ...props }) => (
    <tbody className={'border-collapse border border-brand-color p-2'} {...props}>
      {props.children}
    </tbody>
  ),
  tr: ({ node, ...props }) => (
    <tr className={'border-collapse border border-brand-color p-2'} {...props}>
      {props.children}
    </tr>
  ),
  th: ({ node, ...props }) => (
    <th className={'border-collapse border border-brand-color p-2'} {...props}>
      {props.children}
    </th>
  ),
  td: ({ node, ...props }) => (
    <td className={'border-collapse border border-brand-color p-2'} {...props}>
      {props.children}
    </td>
  ),
  strong: ({ node, ...props }) => (
    <strong className={'font-bold'} {...props}>
      {props.children}
    </strong>
  ),
  em: ({ node, ...props }) => (
    <em className={'italic'} {...props}>
      {props.children}
    </em>
  ),
  del: ({ node, ...props }) => (
    <del className={'line-through'} {...props}>
      {props.children}
    </del>
  ),
  sup: ({ node, ...props }) => (
    <sup className={'text-xs'} {...props}>
      {props.children}
    </sup>
  ),
  footnote: ({ node, ...props }) => (
    <sup className={'text-xs'} {...props}>
      {props.children}
    </sup>
  ),
};


export function CustomMDX(props: { source: string, components?: any }) {
  return (
    <article className='max-w-full'>
      <ReactMarkdown
        components={{ ...components, ...props.components }}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {props.source}
      </ReactMarkdown>
    </article >
  );
}