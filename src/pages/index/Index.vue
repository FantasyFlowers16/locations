<template>
  <div class="categories-container">
    <Loader v-if="isLoading" />
    <Categories v-else />
  </div>

</template>

<script lang="ts">
import { onMounted } from 'vue'
import Categories from '../../components/categories/Categories.vue'
import useController from './controller'
import Loader from '../../components/loader/Loader.vue'

export default {

  name: 'PageIndex',
  components: { Categories, Loader },
  setup () {
    const {
      onMountedCallback, isLoading
    } = useController()

    onMounted(onMountedCallback)
    return { onMountedCallback, isLoading }
  }
}
</script>
