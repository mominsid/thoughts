import MarkdownIt from 'markdown-it';

export default class MarkdownToHtmlService {
  public convertMarkdown(content: string, baseUrl: string): string {
    let html = this.processMarkdown(content);
    html = this.convertRelativeUrls(html, baseUrl);
    return html;
  }

  private processMarkdown(markdown: string): string {
    const renderer = new MarkdownIt();
    const html = renderer.render(markdown);
    return html;
  }

  private convertRelativeUrls(html: string, baseUrl: string): string {
    const processedHtml = html.replace(/\.\//, `${baseUrl}/`);
    return processedHtml;
  }
}
