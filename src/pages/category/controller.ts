import { Category } from 'src/components/models'
import { useStore } from 'src/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useController = () => {
  const store = useStore()
  const route = useRoute()
  const city = computed(() => store.getters['categories/getCity'])//eslint-disable-line
  const isLoading = computed(() => store.getters['categories/getLoad'])//eslint-disable-line
  const categoryItems = computed(() => store.getters['categories/getCategoryItems'])//eslint-disable-line
  const categories = computed(() => store.getters['categories/getCategories'] as Category[])//eslint-disable-line
  const loadCategory = async (payload: string) => { await store.dispatch('categories/loadCategory', payload) }
  const loadCategoties = async (payload: string) => { await store.dispatch('categories/loadCategoties', payload) }
  const changeCityInit = () => { store.commit('categories/changeCityInit') }
  const changeLoading = (payload: boolean) => { store.commit('categories/changeLoading', payload) }
  const onMountedCallback = async () => {
    changeCityInit()
    changeLoading(true)
    await loadCategoties(city.value.id)//eslint-disable-line
    await loadCategory(route.params.slug as string)
    changeLoading(false)
  }
  const activeCategory = computed(() => {
    if (categories.value) {
      return categories.value.filter((el:Category) => el.slug === route.params.slug)[0]
    } else return null
  })

  return {
    onMountedCallback, categoryItems, activeCategory, isLoading
  }
}

export default useController
