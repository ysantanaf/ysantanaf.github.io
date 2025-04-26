<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <img :src="icon" alt="Book icon" class="book-icon" width="20" height="20">
      </div>
      <h3 class="h3">{{ t('resume.education.title') }}</h3>
    </div>

    <ol class="timeline-list">
      <TimelineItem
          :title="t('resume.education.university.title')"
          :period="t('resume.education.university.date')"
          :text="t('resume.education.university.description')"
      />
      <TimelineItem
          :title="t('resume.education.highschool.title')"
          :period="t('resume.education.highschool.date')"
          :text="t('resume.education.highschool.description')"
      />
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import TimelineItem from '@/components/resume/TimelineItem.vue';
import bookIcon from '@/assets/images/book-outline.svg';

export default defineComponent({
  name: 'EducationSection',
  components: {
    TimelineItem
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      icon: bookIcon
    };
  }
});
</script>

<style scoped>
.timeline {
  margin-bottom: 30px;
}

.book-icon {
  filter: invert(100%) brightness(100%);
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.timeline-list {
  font-size: var(--fs-6);
  margin-left: 45px;
}

@media (min-width: 580px) {
  .timeline-list {
    margin-left: 65px;
  }
}
</style>