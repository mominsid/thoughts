import Article from '@/models/Article';

const host = 'https://raw.githubusercontent.com/mominsid/articles/master/';
export const repositoryUrl = 'https://github.com/mominsid/articles';

export const articles: Article[] = [
  {
    title: 'Hello, world!',
    slug: '2019-01-30/Hello-World',
    location: `${host}2019-01-30/`,
    file: `Hello-World.markdown`,
    tags: ['Excellent', 'Great work'],
  },
];
