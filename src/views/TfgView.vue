<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">{{ t('tfg.title') }}</h2>
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

</style>