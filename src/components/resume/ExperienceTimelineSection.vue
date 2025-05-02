<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon :icon="codeWorkingOutline" class="ion-icon"></ion-icon>
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
import { IonIcon } from '@ionic/vue';
import { codeWorkingOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'ExperienceTimelineSection',
  components: {
    TimelineItem,
    IonIcon
  },
  setup() {
    const { t } = useI18n();



    return {
      t,
      codeWorkingOutline
    };
  }
});
</script>

<style scoped>
.ion-icon {
  width: 25px;
  height: 25px;
  color: var(--orange-yellow-crayola);
}
</style>