<template>
  <aside class="sidebar">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img :src="avatar" alt="Imanol Bermúdez" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name">Imanol Benito</h1>
        <h1 class="name">Quintero Bermúdez</h1>
        <p class="title">{{ t('sidebar.job-title') }}</p>
      </div>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <ContactItem
            :icon="mailOutline"
            :title="t('sidebar.contact-email-title')"
            :content="t('sidebar.contact-email')"
            type="email"
        />

        <ContactItem
            :icon="calendarOutline"
            :title="t('sidebar.contact-birthday-title')"
            :content="t(t('sidebar.contact-birthday'))"
            type="text"
        />

        <ContactItem
            :icon="locationOutline"
            :title="t('sidebar.contact-location-title')"
            :content="t('sidebar.contact-location')"
            type="text"
        />
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <SocialLink
            platform="linkedin"
            url="https://www.linkedin.com/in/imanolqb"
        />
        <SocialLink
            platform="twitter"
            url="https://x.com/imanolqb"
        />
        <SocialLink
            platform="instagram"
            url="https://www.instagram.com/imanolqb26"
        />
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { useI18n } from 'vue-i18n';
import ContactItem from '@/components/sections/ContactItem.vue';
import SocialLink from '@/components/common/SocialLink.vue';
import avatar from '@/assets/images/imanol-image.png.jpg';

import { IonIcon } from '@ionic/vue';
import { mailOutline } from 'ionicons/icons';
import { calendarOutline } from 'ionicons/icons';
import { locationOutline } from 'ionicons/icons';

// Importa los íconos correctamente
import mailIcon from '@/assets/images/mail-outline.svg';
import calendarIcon from '@/assets/images/calendar-outline.svg';
import locationIcon from '@/assets/images/location-outline.svg';

export default defineComponent({
  name: 'AppSidebar',
  components: {
    ContactItem,
    SocialLink,
    IonIcon
  },
  setup() {
    const { t } = useI18n();
    const isExpanded = ref(false);

    return {
      avatar,
      t,
      mailIcon,
      calendarIcon,
      locationIcon,
      mailOutline,
      calendarOutline,
      locationOutline,
      isExpanded
    };
  }
});
</script>

<style scoped>
/* Estilos del sidebar (mantén los que ya tienes) */
.sidebar {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.sidebar-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar-box {
  border-radius: 20px;
  overflow: hidden;
}

.avatar-box img {
  display: block;
  width: 100%;
  height: auto;
}

.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  margin-bottom: 5px;
}

.info-content .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
  font-weight: var(--fw-300);
  padding: 3px 12px;
  border-radius: 8px;
  display: inline-block;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.contacts-list {
  display: grid;
  gap: 16px;
}

.social-list {
  display: flex;
  gap: 15px;
  padding-left: 7px;
}

@media (min-width: 580px) {
  .sidebar {
    padding: 30px;
  }

  .avatar-box img {
    width: 120px;
  }
}

@media (min-width: 1250px) {
  .sidebar {
    position: sticky;
    top: 60px;
    flex: 0 0 350px;
  }

  .sidebar-info {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 580px) {
  .sidebar {
    padding: 10px;
  }

  .avatar-box img {
    width: 80px;
  }

  .info-content .name {
    font-size: var(--fs-5);
  }

  .info-content .title {
    padding: 2px 8px;
  }

  .contacts-list {
    gap: 10px;
  }

  .social-list {
    gap: 10px;
  }
}
</style>