<template>
  <div class="content-sections">
    <router-view name="content"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>

<style scoped>
.content-sections {
  flex-grow: 1;
}
</style>