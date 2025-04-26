<template>
  <li class="service-item">
    <div class="service-icon-box">
      <img :src="icon" :alt="title + ' icon'" width="40">
    </div>
    <div class="service-content-box">
      <h4 class="h4 service-item-title">{{ title }}</h4>
      <p class="service-item-text">{{ text }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {useI18n} from "vue-i18n";

const images = import.meta.glob('@/assets/images/*');

export default defineComponent({
  name: 'ServiceItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const imagePath = ref('');

    const { t } = useI18n();

    onMounted(async () => {
      const loadImage = images[`@/assets/images/${props.icon}`];
      if (loadImage) {
        const module = (await loadImage()) as { default: string };
        imagePath.value = module.default;
      }
    });

    return {
      t,
      imagePath
    };
  }
});
</script>

<style scoped>
.service-item {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 20px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.service-item::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

.service-icon-box {
  margin-bottom: 10px;
  text-align: center;
}

.service-content-box {
  text-align: center;
}

.service-item-title {
  color: var(--white-2);
  font-size: var(--fs-4);
  margin-bottom: 7px;
}

.service-item-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

@media (min-width: 580px) {
  .service-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
    padding: 30px;
  }

  .service-icon-box {
    margin-bottom: 0;
    margin-top: 5px;
  }

  .service-content-box {
    text-align: left;
  }
}
</style>