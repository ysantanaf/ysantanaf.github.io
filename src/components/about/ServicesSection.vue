<template>
  <section class="service">
    <h3 class="h3 service-title">{{ t('about.services.title') }}</h3>
    <ul class="service-list">
      <ServiceItem
          :icon="studyingIcon"
          :title="t('about.services.studying.title')"
          :text="t('about.services.studying.text')"
      />
      <ServiceItem
          :icon="bestPracticesIcon"
          :title="t('about.services.best-practices.title')"
          :text="t('about.services.best-practices.text')"
      />
      <ServiceItem
          :icon="softwareDevelopmentIcon"
          :title="t('about.services.software-development.title')"
          :text="t('about.services.software-development.text')"
      />
      <ServiceItem
          :icon="keepInvestigatingIcon"
          :title="t('about.services.keep-investigating.title')"
          :text="t('about.services.keep-investigating.text')"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ServiceItem from '@/components/about/ServiceItem.vue';

import studyingIcon from '@/assets/images/icon-design.svg';
import bestPracticesIcon from '@/assets/images/icon-dev.svg';
import softwareDevelopmentIcon from '@/assets/images/icon-development.svg';
import keepInvestigatingIcon from '@/assets/images/icon-search.svg';

export default defineComponent({
  name: 'ServicesSection',
  components: {
    ServiceItem
  },
  setup() {
    const { t } = useI18n();

    const services = [
      {
        icon: studyingIcon,
        title: t('about.services.studying.title'),
        text: t('about.services.studying.text')
      },
      {
        icon: bestPracticesIcon,
        title: t('about.services.best-practices.title'),
        text: t('about.services.best-practices.text')
      },
      {
        icon: softwareDevelopmentIcon,
        title: t('about.services.software-development.title'),
        text: t('about.services.software-development.text')
      },
      {
        icon: keepInvestigatingIcon,
        title: t('about.services.keep-investigating.title'),
        text: t('about.services.keep-investigating.text')
      }
    ];

    return {
      t,
      studyingIcon,
      bestPracticesIcon,
      softwareDevelopmentIcon,
      keepInvestigatingIcon,
    };
  }
});
</script>

<style scoped>
.service {
  margin-bottom: 35px;
}

.service-title {
  color: var(--white-2);
  font-size: var(--fs-2);
  margin-bottom: 20px;
}

.service-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 580px) {
  .service-title {
    margin-bottom: 25px;
  }

  .service-list {
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }
}
</style>