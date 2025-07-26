<template>
  <article :class="articleClass" data-page="resume">
    <header>
      <h2 class="h2 article-title">{{ t('resume.title') }}</h2>
    </header>

    <EducationSection />
    <ExperienceTimelineSection />

    <a
        :href="cvHref"
        download
        class="download-cv-btn"
    >
      {{ t('resume.download_cv') }}
    </a>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
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
    const { t, locale } = useI18n();
    const route = useRoute();

    const cvHref = ref(getCvHref(locale.value));

    function getCvHref(lang: string) {
      const shortLang = lang.split('-')[0];
      switch (shortLang) {
        case 'es':
          return '/cvs/ibqb_cv_es.pdf';
        case 'fr':
          return '/cvs/ibqb_cv_fr.pdf';
        case 'en':
        default:
          return '/cvs/ibqb_cv_en.pdf';
      }
    }

    watch(locale, (nuevo) => {
      cvHref.value = getCvHref(nuevo);
    });

    const articleClass = computed(() => {
      return route.name === 'resume' ? 'resume active' : 'resume';
    });

    return {
      t,
      articleClass,
      cvHref
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

.download-cv-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background: var(--text-gradient-yellow);
  color: #222;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.download-cv-btn:hover {
  background: var(--jet);
  color: #fff;
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