<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">{{ t('about.title') }}</h2>
    </header>

    <AboutTextSection />
    <ServicesSection />
    <ExperienceSection />

    <div class="modal-container">
      <div class="overlay"></div>
      <section class="testimonials-modal">
        <button class="modal-close-btn">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </section>
    </div>

  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import AboutTextSection from '@/components/about/AboutTextSection.vue';
import ServicesSection from '@/components/about/ServicesSection.vue';
import ExperienceSection from "@/components/about/ExperienceSection.vue";

export default defineComponent({
  name: 'AboutView',
  components: {
    AboutTextSection,
    ServicesSection,
    ExperienceSection
  },
  setup() {
    const { t } = useI18n();
    return { t };
  }
});
</script>

<style scoped>
.about {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
  display: none;
}

.about.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.article-title {
  position: relative;
  padding-bottom: 7px;
  color: var(--white-2);
  font-size: var(--fs-1);
  text-transform: capitalize;
  margin-bottom: 15px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 20;
  pointer-events: none;
  visibility: hidden;
}

.modal-container.active {
  pointer-events: all;
  visibility: visible;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 5%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 0.8;
  visibility: visible;
  pointer-events: all;
}

.testimonials-modal {
  background: var(--eerie-black-2);
  position: relative;
  padding: 15px;
  margin: 15px 12px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  box-shadow: var(--shadow-5);
  transform: scale(1.2);
  opacity: 0;
  transition: var(--transition-1);
  z-index: 2;
}

.modal-container.active .testimonials-modal {
  transform: scale(1);
  opacity: 1;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--onyx);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-2);
  font-size: 18px;
  opacity: 0.7;
  border: none;
  cursor: pointer;
}

.modal-close-btn:hover {
  opacity: 1;
}

@media (min-width: 580px) {
  .about {
    padding: 30px;
    width: 520px;
    margin-inline: auto;
  }

  .article-title {
    padding-bottom: 15px;
    font-weight: var(--fw-600);
  }

  .article-title::after {
    width: 40px;
    height: 5px;
  }
}

@media (min-width: 768px) {
  .about {
    width: 700px;
  }
}

@media (min-width: 1024px) {
  .about {
    width: 950px;
    box-shadow: var(--shadow-5);
  }
}

@media (min-width: 1250px) {
  .about {
    width: auto;
    min-height: 100%;
  }
}
</style>