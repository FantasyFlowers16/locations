<template>
    <Categories />
</template>

<script lang="ts">
import { onMounted } from 'vue'
import Categories from '../../components/categories/Categories.vue'
import useController from './controller'

export default {

  name: 'PageIndex',
  components: { Categories },
  setup () {
    const {
      onMountedCallback
    } = useController()

    onMounted(onMountedCallback)
    return { onMountedCallback }
  }
}
</script>
