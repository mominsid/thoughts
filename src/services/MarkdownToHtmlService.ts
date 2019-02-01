import marked from 'marked';

export default class MarkdownToHtmlService {
  public convertMarkdown(content: string, baseUrl: string): string {
    return this.processMarkdown(content, baseUrl);
  }

  private processMarkdown(markdown: string, baseUrl: string): string {
    const html = marked(markdown, { baseUrl });
    return html;
  }
}
