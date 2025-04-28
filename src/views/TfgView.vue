<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title desktop-only" v-html="t('tfg.title-2')"></h2>
      <h2 class="h2 article-title mobile-only" v-html="t('tfg.title')"></h2>
    </header>

  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TFGView',
  components: {

  },
  setup() {
    const { t } = useI18n();
    return { t };
  }
});
</script>

<style scoped>
.desktop-only {
  display: inline;
}

.mobile-only {
  display: none;
}

@media (max-width: 1023px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: inline;
  }
}
</style>