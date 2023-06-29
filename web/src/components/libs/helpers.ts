import axios from 'axios';

export const convertToTitleCase = (str: string) => {
  const excludedWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'with', 'in', 'out', 'of', 'is'];

  // Split the string into an array of words
  const words = str.toLowerCase().split(' ');

  // Capitalize the first letter of each word, except for excluded words
  const capitalizedWords = words.map((word) =>
    excludedWords.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1),
  );

  // Join the words back into a string
  const titleCaseStr = capitalizedWords.join(' ');

  return titleCaseStr;
};

export const callArticleEditApi = (slug: string, action: string) => {
  axios.put(`/api/blog/article?slug=${slug}&action=${action}`)
    .then((res) => {
      console.log(res);
      return res.data;
    }).catch((err) => {
      console.log(err);
    });
};

