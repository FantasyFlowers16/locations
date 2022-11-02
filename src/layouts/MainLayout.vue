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
import useController from './controller'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header
  },

  setup () {
    const {
      onMountedCallback
    } = useController()

    onMounted(onMountedCallback)
    return {}
  }
})
</script>

<style scoped>
.content {
  max-width: 1150px;
  margin:  0 auto;
}
</style>
