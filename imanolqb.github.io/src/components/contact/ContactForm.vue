<template>
  <section class="contact-form">
    <h3 class="h3 form-title">{{ $t('contact.contact-form.title') }}</h3>

    <form @submit.prevent="submitForm" class="form" data-form>
      <div class="input-wrapper">
        <input
            type="text"
            name="fullname"
            class="form-input"
            :placeholder="$t('contact.contact-form.name')"
            required
            v-model="formData.fullname"
        >

        <input
            type="email"
            name="email"
            class="form-input"
            :placeholder="$t('contact.contact-form.email')"
            required
            v-model="formData.email"
        >
      </div>

      <textarea
          name="message"
          class="form-input"
          :placeholder="$t('contact.contact-form.message')"
          required
          v-model="formData.message"
      ></textarea>

      <button class="form-btn" type="submit" :disabled="isSubmitting || !isFormValid">
        <img :src="airplaneOutline" alt="Enviar" class="svg-icon" />
        <span>{{ $t('contact.contact-form.send') }}</span>
      </button>
    </form>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import airplaneOutline from '@/assets/images/airplane-outline1.svg';

export default defineComponent({
  name: 'ContactForm',
  components: {

  },
  setup() {
    const { t } = useI18n();
    const formData = ref({
      fullname: '',
      email: '',
      message: ''
    });
    const isSubmitting = ref(false);
    const isFormValid = computed(() => {
      return formData.value.fullname && formData.value.email && formData.value.message;
    });

    const submitForm = () => {
      if (isFormValid.value) {
        isSubmitting.value = true;
        // Simulate a form submission
        setTimeout(() => {
          alert(t('contact.contact-form.success'));
          isSubmitting.value = false;
          formData.value = { fullname: '', email: '', message: '' };
        }, 2000);
      }
    };

    return {
      t,
      formData,
      isSubmitting,
      isFormValid,
      submitForm,
      airplaneOutline
    };
  }
});
</script>

<style scoped>
.contact-form {
  margin-top: 30px;
}

.form-title {
  margin-bottom: 20px;
  text-align: center;
  color: var(--white-2);
}

.form {
  display: grid;
  gap: 15px;
}

.input-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

@media (min-width: 580px) {
  .input-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

.form-input {
  padding: 13px 20px;
  border: 1px solid var(--jet); /* Borde azul */
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  color: var(--light-gray); /* Texto gris al escribir */
  background: transparent; /* Fondo transparente */
  outline: none;
  transition: var(--transition-1);
}

.form-input::placeholder {
  color: var(--light-gray-70); /* Placeholder gris claro */
}

.form-input:focus {
  border-color: var(--orange-yellow-crayola); /* Borde azul más intenso al enfocar */
  color: var(--white-2); /* Texto blanco/azul al escribir */
}

textarea.form-input {
  min-height: 120px;
  height: 120px;
  max-height: 200px;
  resize: vertical;
}

.form-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 20px;
  color: var(--orange-yellow-crayola); /* Color para texto e ícono */
  border: 1px solid var(--orange-yellow-crayola);
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  background: transparent;
  transition: var(--transition-1);
  margin-inline: auto;
  cursor: pointer;
}

.form-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  border-color: var(--light-gray-70);
  color: var(--light-gray-70); /* Color para texto e ícono cuando está deshabilitado */
}

.form-btn:not(:disabled):hover {
  background-color: var(--orange-yellow-crayola);
  color: var(--eerie-black-1); /* Color para texto e ícono en hover */
}

.svg-icon {
  width: 20px;
  height: 20px;
  fill: currentColor; /* Hereda el color del texto del botón */
}

/* Asegurar que el span también herede el color correctamente */
.form-btn span {
  color: inherit;
}
</style>