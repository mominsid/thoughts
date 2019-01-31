<template>
  <div>
    <router-link :to="link">{{ article.title }}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Article from '@/models/Article';
import ArticleService from '@/services/ArticleService';

@Component
export default class ArticleListingSummary extends Vue {
  @Prop() private article!: Article;
  private link = '';
  public async mounted() {
    this.link = ArticleService.getInstance().getArticleLink(this.article);
  }
}
</script>
