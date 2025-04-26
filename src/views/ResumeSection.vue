<template>
  <article :class="articleClass" data-page="resume">
    <header>
      <h2 class="h2 article-title">{{ t('resume.title') }}</h2>
    </header>

    <EducationSection />
    <ExperienceTimelineSection />

  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import EducationSection from '@/components/resume/EducationSection.vue';
import ExperienceTimelineSection from '@/components/resume/ExperienceTimelineSection.vue';

export default defineComponent({
  name: 'ResumeView',
  components: {
    EducationSection,
    ExperienceTimelineSection
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    const articleClass = computed(() => {
      return route.name === 'resume' ? 'resume active' : 'resume';
    });

    return {
      t,
      articleClass
    };
  }
});
</script>

<style scoped>
.resume {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
  display: none;
}

.resume.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

.article-title {
  position: relative;
  padding-bottom: 7px;
  margin-bottom: 30px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

@media (min-width: 580px) {
  .resume {
    padding: 30px;
  }

  .article-title {
    padding-bottom: 15px;
  }

  .article-title::after {
    width: 40px;
    height: 5px;
  }
}
</style>