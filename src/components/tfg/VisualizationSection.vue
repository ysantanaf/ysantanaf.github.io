<template>
  <section class="data-visualization">
    <h2><i class="fas fa-chart-pie"></i> Interactive Visualizations</h2>

    <div class="visualization-panel">
      <VizSelector :activeViz="activeViz" @select-viz="setActiveViz" />

      <div class="viz-display">
        <!-- Correlation Heatmap -->
        <div class="viz-content" :class="{ active: activeViz === 'correlation' }" id="correlation-viz">
          <iframe src="data-visualization/correlation_map.html" class="plotly-viz"></iframe>
        </div>

        <!-- Phytoplankton Composition -->
        <div class="viz-content" :class="{ active: activeViz === 'phytoplankton' }" id="phytoplankton-viz">
          <iframe src="data-visualization/phytoplankton_composition.html" class="plotly-viz"></iframe>
        </div>

        <!-- Time Series Analysis -->
        <div class="viz-content" :class="{ active: activeViz === 'timeseries' }" id="timeseries-viz">
          <div class="viz-placeholder">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Time Series Analysis visualization coming soon</p>
            <p>This will show temporal patterns in primary production</p>
          </div>
        </div>

        <!-- Spatial Distribution -->
        <div class="viz-content" :class="{ active: activeViz === 'spatial' }" id="spatial-viz">
          <div class="viz-placeholder">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Spatial Distribution visualization coming soon</p>
            <p>Geographic representation of variables across the study area</p>
          </div>
        </div>

        <!-- Scenario Comparison -->
        <div class="viz-content" :class="{ active: activeViz === 'scenarios' }" id="scenarios-viz">
          <div class="viz-placeholder">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Scenario Comparison visualization coming soon</p>
            <p>Comparative analysis under different environmental conditions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VizSelector from '@/components/tfg/VizSelector.vue'

export default {
  name: 'VisualizationSection',
  components: {
    VizSelector
  },
  data() {
    return {
      activeViz: 'correlation'
    }
  },
  methods: {
    setActiveViz(viz) {
      this.activeViz = viz
      this.$nextTick(() => {
        this.resizePlotlyViz()
      })
    },
    resizePlotlyViz() {
      const activeVizElement = document.querySelector('.viz-content.active')
      if (activeVizElement) {
        const iframe = activeVizElement.querySelector('.plotly-viz')
        if (iframe) {
          const containerWidth = activeVizElement.clientWidth
          iframe.style.height = containerWidth + 'px'
        }
      }
    }
  },
  mounted() {
    this.resizePlotlyViz()
    window.addEventListener('resize', this.resizePlotlyViz)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizePlotlyViz)
  }
}
</script>