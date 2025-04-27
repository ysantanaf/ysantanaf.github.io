<template>
  <section class="mapbox" data-mapbox>
    <figure>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14091.70872877108!2d-15.431244786170565!3d27.99612416306908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4097efa65f67f5%3A0xccca05a89836c80a!2sTelde%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1736981413692!5m2!1ses!2ses"
          loading="lazy"></iframe>
    </figure>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ContactMap',
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
});

</script>

<style scoped>
.mapbox {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.mapbox figure {
  margin: 0;
  width: 100%;
}

.mapbox iframe {
  display: block;
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 16px;
  box-shadow: var(--shadow-1);
}
</style>
