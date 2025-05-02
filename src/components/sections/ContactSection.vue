<template>
  <li class="contact">
    <div class="icon-box">
      <ion-icon :icon="icon" class="ion-icon"></ion-icon>
    </div>
    <div class="contact-info">
      <p class="contact-title">{{ title }}</p>
      <a v-if="type === 'email'" :href="`mailto:${content}`" class="contact-link">{{ content }}</a>
      <time v-else-if="type === 'time'">{{ content }}</time>
      <address v-else-if="type === 'address'">{{ content }}</address>
      <span v-else>{{ content }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';

export default defineComponent({
  name: 'ContactItem',
  components: {
    IonIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: (value: string) => ['email', 'text', 'time', 'address'].includes(value)
    }
  }
});
</script>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-box .ion-icon {
  width: 20px;
  height: 20px;
  color: var(--orange-yellow-crayola);
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.contact-info {
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
}

.contact-title {
  color: var(--light-gray-70);
  font-size: var(--fs-8);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-link,
time,
address {
  color: var(--white-2);
  font-size: var(--fs-7);
}

address {
  font-style: normal;
}

@media (min-width: 580px) {
  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    font-size: 18px;
  }

  .contact-info {
    max-width: calc(100% - 64px);
    width: calc(100% - 64px);
  }
}
</style>