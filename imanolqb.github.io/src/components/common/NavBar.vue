<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li
          v-for="item in navItems"
          :key="item.id"
          class="navbar-item"
      >
        <router-link
            :to="{ name: item.route }"
            class="navbar-link"
            active-class="active"
            exact-active-class="active"
        >
          {{ t(`navbar.${item.id}`) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface NavItem {
  id: string;
  translationKey: string;
  route?: string;
}

export default defineComponent({
  name: 'NavBar',
  setup() {
    const { t } = useI18n();

    const navItems: NavItem[] = [
      { id: 'about', translationKey: 'about-navbar', route: 'about' },
      { id: 'resume', translationKey: 'resume-navbar', route: 'resume' },
      { id: 'portfolio', translationKey: 'portfolio-navbar', route: 'portfolio' },
      { id: 'contact', translationKey: 'contact-navbar', route: 'contact' },
      { id: 'tfg', translationKey: 'TFG-navbar', route: 'tfg' }
    ];

    return {
      t,
      navItems
    };
  }
});
</script>

<style scoped>
:root {
  --navbar-height: 60px; /* Ajusta según la altura de tu NavBar */
}

.navbar {
  height: var(--navbar-height);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2962FF;
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  box-shadow: var(--shadow-2);
  z-index: 5;
}

.navbar-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.navbar-link {
  color: var(--light-gray);
  font-size: var(--fs-8);
  padding: 20px 7px;
  transition: color var(--transition-1);
  border: none;
  background: none;
  cursor: pointer;
}

.navbar-link.active {
  color: var(--orange-yellow-crayola) !important;
  font-weight: var(--fw-600);
  position: relative;
}

.navbar-link.active::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  background-color: var(--orange-yellow-crayola);
  border-radius: 50%;
}

.navbar-link:hover,
.navbar-link:focus {
  color: var(--light-gray-70);
}

@media (min-width: 580px) {
  .navbar {
    border-radius: 20px 20px 0 0;
  }

  .navbar-list {
    gap: 20px;
  }

  .navbar-link {
    --fs-8: 14px;
  }
}

@media (min-width: 1024px) {
  .navbar {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
    box-shadow: none;
  }

  .navbar-list {
    gap: 30px;
    padding: 0 20px;
  }

  .navbar-link {
    font-weight: var(--fw-500);
  }
}
</style>