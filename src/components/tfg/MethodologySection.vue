<template>
  <section>
    <h2><i class="fas fa-code-branch"></i> Methodology</h2>
    <p>
      The project follows the <strong>CRISP-DM (Cross-Industry Standard Process for Data Mining)</strong> methodology, progressing through six key phases:
    </p>

    <div class="timeline">
      <div class="timeline-item">
        <span class="timeline-date">Phase 1</span>
        <h3>Problem Understanding</h3>
        <p>Definition of model requirements, success criteria, and key performance indicators</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Phase 2</span>
        <h3>Data Collection</h3>
        <p>Acquisition of oceanographic data from multiple reliable sources including NASA and Copernicus</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Phase 3</span>
        <h3>Data Preprocessing</h3>
        <p>Cleaning, normalization, and feature engineering of collected datasets</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Phase 4</span>
        <h3>Model Development</h3>
        <p>Design and training of neural network architectures with TensorFlow/PyTorch</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Phase 5</span>
        <h3>Evaluation</h3>
        <p>Rigorous testing against validation datasets and performance optimization</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">Phase 6</span>
        <h3>Deployment</h3>
        <p>Development of interactive visualization tools and documentation</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MethodologySection'
}
</script>