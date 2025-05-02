<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon :icon="bookOutline" class="ion-icon"></ion-icon>
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
import { IonIcon } from '@ionic/vue';
import { bookOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'EducationSection',
  components: {
    TimelineItem,
    IonIcon
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
      bookOutline
    };
  }
});
</script>

<style scoped>
.timeline {
  margin-bottom: 30px;
}

.ion-icon {
  width: 25px;
  height: 25px;
  color: var(--orange-yellow-crayola);
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