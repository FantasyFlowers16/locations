import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'src/store'

const useController = () => {
  const route = useRoute()
  const store = useStore()
  // const activeRoute = route
  const categoryItems = computed(() => store.getters['categories/getCategoryItems'])//eslint-disable-line
  return {
    categoryItems, route
  }
}

export default useController
