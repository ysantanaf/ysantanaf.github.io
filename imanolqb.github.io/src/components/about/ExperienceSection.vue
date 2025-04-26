<template>
  <section class="experience">
    <h3 class="h3 experience-title">{{ t('about.experience.title') }}</h3>
    <ul class="experience-list has-scrollbar">
      <ExperienceItem
          :icon="ulpgcLogo"
          alt="ULPGC logo"
          url="https://www.eii.ulpgc.es/es/formacion/Grado-en-Ingenieria-Informatica"
      />
      <ExperienceItem
          :icon="aidaLogo"
          alt="AIDA logo"
          url="https://www.aidacanarias.com/"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import aidaLogo from '@/assets/images/logo-aida-color.png';
import ulpgcLogo from '@/assets/images/logo-ulpgc-color.png';
import ExperienceItem from '@/components/about/ExperienceItem.vue';

export default defineComponent({
  name: 'ExperienceSection',
  components: {
    ExperienceItem
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      ulpgcLogo,
      aidaLogo
    };
  }
});
</script>

<style scoped>
.experience {
  margin-bottom: 15px;
}

.experience-title {
  color: var(--white-2);
  font-size: var(--fs-2);
  margin-bottom: 20px;
}

.experience-list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  margin: 0 -15px;
  padding: 25px;
  padding-bottom: 25px;
  overflow-x: auto;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 25px;
}

@media (min-width: 450px) {
  .experience-item {
    min-width: calc(33.33% - 10px);
  }
}

@media (min-width: 580px) {
  .experience-list {
    gap: 50px;
    margin: 0 -30px;
    padding: 45px;
    scroll-padding-inline: 45px;
  }

  .experience-title {
    margin-bottom: 25px;
  }
}

@media (min-width: 1024px) {
  .experience-item {
    min-width: calc(25% - 38px);
  }
}
</style>