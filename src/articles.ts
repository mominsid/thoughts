import Article from '@/models/Article';

const host = 'https://raw.githubusercontent.com/mominsid/articles/master/';
export const repositoryUrl = 'https://github.com/mominsid/articles';

export const articles: Article[] = [
  {
    title: 'Hello, world!',
    url: '2019-01-30/Hello-World',
    file: `${host}2019-01-30/Hello-World.markdown`,
    tags: ['Excellent', 'Great work'],
  },
];
