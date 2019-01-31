<template>
  <div class="article">
    <div v-html="html"></div>
    <div v-if="error">Unable to find content</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArticleService from '@/services/ArticleService';

@Component({
  components: {},
})
export default class Article extends Vue {
  private html = '';
  private error = false;

  public async created(): Promise<void> {
    const url = this.$route.params.path;
    try {
      const service = ArticleService.getInstance();
      this.html = await service.fetchArticle(service.findArticleDefinitionByUrl(url));
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(e: Error): void {
    this.error = true;
  }
}
</script>
