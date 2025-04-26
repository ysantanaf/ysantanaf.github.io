<template>
  <section class="filters-section">
    <div class="filter-controls">
      <ul class="filter-list">
        <li
            v-for="(filter, index) in filters"
            :key="'filter-' + index"
            class="filter-item"
        >
          <button
              :class="{ active: activeFilter === filter.value }"
              @click="setActiveFilter(filter.value)"
          >
            {{ t(`portfolio.types.${filter.value}`) }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button
            class="filter-select"
            @click="toggleSelectList"
            aria-haspopup="listbox"
            :aria-expanded="showSelectList"
        >
          <div class="select-value">
            {{ t(`portfolio.filters.${activeFilter}`) }}
          </div>
          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul
            class="select-list"
            v-show="showSelectList"
            role="listbox"
        >
          <li
              v-for="(filter, index) in filters"
              :key="'select-' + index"
              role="option"
          >
            <button
                @click="selectFilter(filter.value)"
                :aria-selected="activeFilter === filter.value"
            >
              {{ t(`portfolio.filters.${filter.value}`) }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ProjectFiltersSection',
  emits: ['filter-change'],
  setup(props, { emit }) {
    const { t } = useI18n();

    const activeFilter = ref('all');
    const showSelectList = ref(false);

    const filters = [
      { value: 'all', label: 'All' },
      { value: 'web', label: 'Web Design' },
      { value: 'applications', label: 'Applications' },
      { value: 'projects', label: 'Projects' }
    ];

    const setActiveFilter = (filter: string) => {
      activeFilter.value = filter;
      emit('filter-change', filter);
    };

    const toggleSelectList = () => {
      showSelectList.value = !showSelectList.value;
    };

    const selectFilter = (filter: string) => {
      setActiveFilter(filter);
      showSelectList.value = false;
    };

    return {
      t,
      filters,
      activeFilter,
      showSelectList,
      setActiveFilter,
      toggleSelectList,
      selectFilter
    };
  }
});
</script>

<style scoped>
.filters-section {
  margin-bottom: 30px;
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 5px;
}

.filter-item button {
  color: var(--light-gray);
  font-size: var(--fs-5);
  transition: var(--transition-1);
  padding: 8px 16px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--jet);
  cursor: pointer;
}

.filter-item button:hover {
  color: var(--light-gray-70);
}

.filter-item button.active {
  color: var(--orange-yellow-crayola);
  border-color: var(--orange-yellow-crayola);
}

.filter-select-box {
  position: relative;
  display: none;
}

.filter-select {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  cursor: pointer;
}

.select-list {
  background: var(--eerie-black-2);
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  padding: 6px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  z-index: 2;
}

.select-item button {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
}

.select-item button:hover {
  background: hsl(240, 2%, 20%);
}

@media (min-width: 580px) {
  .filter-select-box {
    display: block;
  }

  .filter-select-box {
    display: none;
  }
}

@media (min-width: 768px) {
  .filter-list {
    display: flex;
  }

  .filter-select-box {
    display: none;
  }
}
</style>