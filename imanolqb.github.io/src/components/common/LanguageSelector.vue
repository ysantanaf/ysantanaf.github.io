<template>
  <div class="language-selector">
    <button
        v-for="lang in languages"
        :key="lang.code"
        class="lang-btn"
        :class="{ 'active': isActive(lang.code) }"
        @click="changeLanguage(lang.code)"
    >
      <img :src="lang.flag" :alt="lang.name" class="flag-icon"> {{ lang.name }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ukFlag from '@/assets/images/768unitedkingdom_100572.svg';
import spainFlag from '@/assets/images/766spain_100554.svg';
import franceFlag from '@/assets/images/767france_100417.svg';

type AppLocale = 'en-US' | 'es-ES' | 'fr-FR';

interface Language {
  code: AppLocale;
  name: string;
  flag: string;
}

export default defineComponent({
  name: 'LanguageSelector',
  setup() {
    const { locale } = useI18n();

    const languages: Language[] = [
      { code: 'en-US', name: 'English', flag: ukFlag },
      { code: 'es-ES', name: 'Español', flag: spainFlag },
      { code: 'fr-FR', name: 'Français', flag: franceFlag }
    ];

    const isActive = (langCode: AppLocale) => locale.value === langCode;

    const changeLanguage = (newLang: AppLocale) => {
      locale.value = newLang;
      localStorage.setItem('user-lang', newLang); // Opcional: persistir preferencia
    };

    return {
      languages,
      isActive,
      changeLanguage
    };
  }
});
</script>

<style scoped>
.language-selector {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
}

.lang-btn {
  display: flex;
  align-items: center;
  background: var(--bg-gradient-onyx);
  color: var(--white-2);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition-1);
  font-size: var(--fs-7);
}

.lang-btn:hover {
  background: var(--bg-gradient-yellow-1);
  color: var(--white-1);
}

.lang-btn.active {
  background: var(--bg-gradient-yellow-2);
  color: var(--white-1);
  font-weight: var(--fw-500);
}

.flag-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 4px;
}
</style>