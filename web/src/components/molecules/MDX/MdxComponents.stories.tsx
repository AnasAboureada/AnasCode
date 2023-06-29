import React from 'react';

import { CustomMDX } from './MdxComponents';

export default {
  title: 'Components/Molecules/MdxComponents',
  component: CustomMDX,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <main className='w-screen max-w-screen-xl px-4 py-2 md:px-16 md:py-8'><CustomMDX {...args} /></main>;

const args = {
  source: `
  # H1 This is a dummy title for the blog list card component to test the component.
  ## H2 This is a dummy title for the blog list card component to test the component.
  ### h3 This is a dummy title for the blog list card component to test the component.
  #### H4 This is a dummy title for the blog list card component to test the component.
  ##### H5 This is a dummy title for the blog list card component to test the component.
  ###### H6 This is a dummy title for the blog list card component to test the component.

  \`This is a dummy code block\`

  \`\`\`js
  const a = 10;
  const b = 20;
  const c = a + b;
  console.log(c);
  \`\`\`

  \`\`\`css
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  \`\`\`

  [This is a dummy link](https://google.com)

  ![This is a dummy image](https://picsum.photos/640/640)
  Text here. [^1]

Text here. [^2]

- List item 1
- List item 2
- List item 3

1. List item 1
2. List item 2
3. List item 3


The Rabin-Karp algorithm is a substring matching algorithm that can efficiently find the occurrence of a pattern in a larger text. The algorithm achieves this by comparing hash values of the pattern and substrings of the text.

  ## H2 This is a dummy title for the blog list card component to test the component.
  The algorithm works by first calculating a hash value of the pattern that needs to be searched. Then, it calculates the hash value of each substring of the text that is the same length as the pattern. If the hash value of the substring matches the hash value of the pattern, the algorithm compares the pattern and the substring character by character to confirm if it's a match. If it is a match, the algorithm reports the index of the start of the substring as a match.

The algorithm is designed to make use of the fact that the hash value of a substring can be calculated in constant time O(1), and the hash value of the next substring can be calculated in O(1) time as well by taking the hash of the previous substring and subtracting the hash of the first character and adding the hash of the next character.

### h3 This is a dummy title for the blog list card component to test the component.
To avoid false positives, the hash function should be carefully chosen to minimize collisions, and a second check should be performed on the character level to confirm any potential matches.

#### H4 This is a dummy title for the blog list card component to test the component.
The Rabin-Karp algorithm has an average case time complexity of O(n + m) where n is the length of the text and m is the length of the pattern. The worst case is O(n * m) if the hash function chosen generates too many collisions. However, in practice, the algorithm is quite fast and can be a good choice for small to medium-sized text and patterns.

a | b | c
---|---|---
d |  adfasdf | f
g | h | i


[^1]: note 1
[^2]: note 2
  `,
};

export const Desktop = Template.bind({});
Desktop.args = args;
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = args;
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
