import { computed } from 'vue'
import { useStore } from 'src/store'

const useController = () => {
  const store = useStore()
  const getCategories = computed(() => store.getters['categories/getCategories'])//eslint-disable-line

  return {
    getCategories
  }
}

export default useController
