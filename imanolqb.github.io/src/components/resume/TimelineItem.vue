<template>
  <li class="timeline-item">
    <h4 class="h4 timeline-item-title">{{ title }}</h4>
    <span>{{ period }}</span>
    <p class="timeline-text" >{{ text }}</p>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimelineItem',
  props: {
    title: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: var(--jet);
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: var(--text-gradient-yellow);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-item-title {
  font-size: var(--fs-6);
  line-height: 1.3;
  margin-bottom: 7px;
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

@media (min-width: 580px) {
  .timeline-item:not(:last-child)::before {
    left: -40px;
  }

  .timeline-item::after {
    height: 8px;
    width: 8px;
    left: -43px;
  }
}
</style>