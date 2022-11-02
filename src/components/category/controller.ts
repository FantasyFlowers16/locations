// import { computed } from 'vue'
import { useStore } from 'src/store'
import { useRoute } from 'vue-router'

const useController = () => {
  const store = useStore()
  const route = useRoute()
  const loadCategory = async (payload: number) => { await store.dispatch('categories/loadCategory', payload) }
  const onMountedCallback = async () => {
    await loadCategory(route.params.slug as unknown as number)
  }

  return {
    onMountedCallback
  }
}

export default useController
