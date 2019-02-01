import { articles } from '../articles';
import Article from '@/models/Article';
import axios from 'axios';
import MarkdownToHtmlService from './MarkdownToHtmlService';

export default class ArticleService {
  public static getInstance(): ArticleService {
    if (!ArticleService.instance) {
      ArticleService.instance = new ArticleService();
    }
    return ArticleService.instance;
  }
  private static instance: ArticleService;
  private linkUrlBase = '/article/';

  private constructor() {}
  public getArticleDefinitions() {
    return articles;
  }

  public findArticleDefinitionByUrl(url: string): Article {
    return articles.filter((m) => m.slug === url)[0];
  }

  public getArticleLink(article: Article) {
    return this.getLinkUrl(article.slug);
  }

  public async fetchArticle(article: Article): Promise<string> {
    const response = await axios.get(`${article.location}${article.file}`);
    const data = response.data;
    const md = new MarkdownToHtmlService();
    return md.convertMarkdown(data, article.location);
  }

  private getLinkUrl(url: string): string {
    return `${this.linkUrlBase}${url}`;
  }
}
