<template>
  <section class="project-section" ref="projectSectionRef">
    <ul class="project-list">

      <ProjectItem
          v-for="(project, index) in filteredProjects"
          :key="index"
          :icon="project.icon"
          :alt="project.title"
          :url="project.url"
          :title="project.title"
          :kind="project.kind"
          :period="project.period"
          :description="project.description" />

    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectItem from '@/components/portfolio/ProjectItem.vue';
import project1Image from '@/assets/images/blog-4.jpg';
import project2Image from '@/assets/images/blog-5.jpg';
import TFGimage from '@/assets/images/tfgImage.png';
import testImage from '@/assets/images/blog-5.jpg';

export default defineComponent({
  name: 'ProjectSection',
  components: {
    ProjectItem
  },
  props: {
    activeFilter: {
      type: String,
      required: true,
      default: 'all'
    }
  },
  setup(props) {
    const { t } = useI18n();

    const projects = [
      {
        icon: project1Image,
        url: 'https://github.com/imanolqb/Practica1_FSI_ImanolQB_CarlosAR',
        title: 'Project 1 FSI',
        kind: 'Projects',
        period: '2023-2024',
        description: 'Uninformed search algorithms for traversing or searching for weighted elements in a graph.'
      },
      {
        icon: project2Image,
        url: 'https://github.com/imanolqb/Practica2_FSI_ImanolQB_CarlosAR',
        title: 'Project 2 FSI',
        kind: 'Projects',
        period: '2023-2024',
        description: 'Development of an effective neural network for classifying image sets.'
      },
      {
        icon: TFGimage,
        url: 'https://github.com/imanolqb/TFG-Oceanographic-data-for-NPP-estimation',
        title: 'TFG Oceanographic Data',
        kind: 'Projects',
        period: '2024-2025',
        description: 'Development of a neural network for estimating the Net Primary Production (NPP) of the ocean using oceanographic data.'
      }
    ];

    const filteredProjects = computed(() => {
      if (props.activeFilter === 'all') {
        return projects;
      }
      return projects.filter(project => project.kind.split(' ')[0].toLowerCase() === props.activeFilter);
    });

    return {
      t,
      filteredProjects
    };
  }
});
</script>

<style scoped>
.project-section {
  margin-bottom: 30px;
}

.project-section-title {
  color: var(--white-2);
  font-size: var(--fs-2);
  margin-bottom: 20px;
}

.project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 580px) {
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .project-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .project-section-title {
    margin-bottom: 25px;
  }
}
</style>