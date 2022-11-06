// import { computed } from 'vue'
import { useStore } from 'src/store'
import { City } from 'src/components/models'
import { computed } from 'vue'

const useController = () => {
  const store = useStore()
  const city = computed(() => store.getters['categories/getCity'] as City)//eslint-disable-line
  const isLoading = computed(() => store.getters['categories/getLoad'])//eslint-disable-line
  const loadCategoties = async (payload: string) => { await store.dispatch('categories/loadCategoties', payload) }
  const changeCity = (payload: City) => { store.commit('categories/changeCity', payload) }
  const changeCityInit = () => { store.commit('categories/changeCityInit') }

  const changeLoading = (payload: boolean) => { store.commit('categories/changeLoading', payload) }
  const onMountedCallback = async () => {
    changeLoading(true)
    changeCityInit()
    await loadCategoties(city.value.id)
    changeLoading(false)
  }

  return {
    onMountedCallback, changeCity, isLoading
  }
}

export default useController
