<template>
  <section class="about-text">
    <p v-html="t('about.text.p1')"></p>
    <p v-html="t('about.text.p2')"></p>
    <p v-html="t('about.text.p3')"></p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AboutTextSection',
  setup() {
    const { t } = useI18n();
    return { t };
  }
});
</script>

<style scoped>
.about-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
  margin-bottom: 30px;
}

.about-text p {
  margin-bottom: 15px;
  text-indent: 20px;
}
</style>