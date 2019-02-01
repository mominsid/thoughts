<template>
  <div class="article">
    <div v-if="articles">
      <div v-for="article in articles" :key="article.url">
        <ArticleListingSummary :article="article"/>
      </div>
    </div>
    <div v-if="hasMore()">
      <span v-on:click="loadMore()">Load More</span>
    </div>
    <div>
      <p>Articles are hosted on Github at
        <a
          target="_blank"
          href="https://github.com/mominsid/articles"
        >https://github.com/mominsid/articles</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ArticleService from '@/services/ArticleService';
import Article from '@/models/Article';
import ArticleListingSummary from '@/components/ArticleListingSummary.vue';

@Component({
  components: {
    ArticleListingSummary,
  },
})
export default class Articles extends Vue {
  private articles: Article[] = [];
  private numberOfArticles = 0;
  private perPage = 10;
  private articleService = ArticleService.getInstance();

  public async mounted(): Promise<void> {
    this.numberOfArticles = this.perPage;
  }

  private async loadMore(): Promise<void> {
    this.numberOfArticles += this.perPage;
  }

  private hasMore(): boolean {
    return (
      this.numberOfArticles < this.articleService.getArticleDefinitions().length
    );
  }

  @Watch('numberOfArticles')
  private async loadArticles(): Promise<void> {
    this.articles = this.articleService
      .getArticleDefinitions()
      .slice(0, this.numberOfArticles);
  }
}
</script>
