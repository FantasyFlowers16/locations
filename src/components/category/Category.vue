<template>
  <div>454545</div>
</template>

<script>
import { onMounted } from 'vue'
import useController from './controller'
export default {
  setup () {
    const {
      onMountedCallback
    } = useController()

    onMounted(onMountedCallback)
    return { onMountedCallback }
  }
}
</script>

<style>

</style>
