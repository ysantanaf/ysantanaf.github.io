<template>
  <div class="viz-selector">
    <div
        v-for="option in vizOptions"
        :key="option.id"
        class="viz-option"
        :class="{ active: activeViz === option.id }"
        @click="$emit('select-viz', option.id)"
    >
      <i :class="option.icon"></i>
      <span>{{ option.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VizSelector',
  props: {
    activeViz: {
      type: String,
      default: 'correlation'
    }
  },
  data() {
    return {
      vizOptions: [
        { id: 'correlation', icon: 'fas fa-fire', label: 'Correlation Heatmap' },
        { id: 'phytoplankton', icon: 'fas fa-seedling', label: 'Phytoplankton Composition' },
        { id: 'timeseries', icon: 'fas fa-chart-line', label: 'Time Series Analysis' },
        { id: 'spatial', icon: 'fas fa-map-marked-alt', label: 'Spatial Distribution' },
        { id: 'scenarios', icon: 'fas fa-project-diagram', label: 'Scenario Comparison' }
      ]
    }
  }
}
</script>