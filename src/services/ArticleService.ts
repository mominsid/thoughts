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
    return articles.filter((m) => m.url === url)[0];
  }

  public getArticleLink(article: Article) {
    return this.getLinkUrl(article.url);
  }

  public async fetchArticle(article: Article): Promise<string> {
    const response = await axios.get(this.getContentUrl(article.file));
    const data = response.data;
    const md = new MarkdownToHtmlService();
    return md.convertMarkdown(data, this.getContentUrlBase(article));
  }

  private getContentUrlBase(article: Article): string {
    return `/${article.file.replace(/\/[^\/]*$/, '')}`;
  }

  private getContentUrl(filePath: string): string {
    return `/${filePath}`;
  }
  private getLinkUrl(url: string): string {
    return `${this.linkUrlBase}${url}`;
  }
}
