<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <img :src="icon" alt="Software Development icon" class="development-icon" width="20" height="20">
      </div>
      <h3 class="h3">{{ t('resume.experience.title') }}</h3>
    </div>

    <ol class="timeline-list">
      <TimelineItem
          :title="t('resume.experience.internship.company')"
          :period="t('resume.experience.internship.date')"
          :text="t('resume.experience.internship.description')"
      />
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import TimelineItem from '@/components/resume/TimelineItem.vue';
import jobIcon from '@/assets/images/job-outline.svg';

export default defineComponent({
  name: 'ExperienceTimelineSection',
  components: {
    TimelineItem
  },
  setup() {
    const { t } = useI18n();



    return {
      t,
      icon: jobIcon
    };
  }
});
</script>

<style scoped>
.development-icon {
  filter: invert(100%) brightness(100%);
}
</style>