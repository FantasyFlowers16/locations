<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-page-container class="content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Header from 'src/components/header/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header
  }
})
</script>

<style scoped>
.content {
  max-width: 1150px;
  min-width: 360px;
  overflow: auto;
  margin:  0 auto;
  padding: 20px;
}
</style>
