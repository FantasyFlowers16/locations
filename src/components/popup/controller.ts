import { computed } from 'vue'
import { useStore } from 'src/store'
import { City } from '../models'
import { useRoute } from 'vue-router'

const useController = () => {
  const route = useRoute()
  const store = useStore()
  const isOpenPopup = computed(() => store.getters['categories/getIsOpenPopup'])//eslint-disable-line
  const cityList = computed(() => store.getters['categories/getCityList'])//eslint-disable-line
  const isLoading = computed(() => store.getters['categories/getLoad'] as boolean)//eslint-disable-line
  const cityError = computed(() => store.getters['categories/getCityError'])//eslint-disable-line
  const selectCity = false
  const changeCityError = (payload: string | null) => { store.commit('categories/changeCityError', payload) }
  const changeIsOpenPopup = (payload: boolean) => { store.commit('categories/changeIsOpenPopup', payload) }
  const loadCategoties = async (payload: string) => { await store.dispatch('categories/loadCategoties', payload) }
  const loadCategory = async (payload: string) => { await store.dispatch('categories/loadCategory', payload) }
  const changeCity = (payload: City) => { store.commit('categories/changeCity', payload) }
  const changeCityList = (payload: City[] | null) => { store.commit('categories/changeCityList', payload) }
  const changeLoading = (payload: boolean) => { store.commit('categories/changeLoading', payload) }
  const loadCity = async (payload: string) => { await store.dispatch('categories/loadRegions', payload) }
  const closePopup = () => {
    changeIsOpenPopup(false)
  }
  const selectedCity = async (item:City) => {
    changeLoading(true)
    localStorage.setItem('city', JSON.stringify(item))
    changeCity({ city: item.city, id: item.id, label: item.label })
    await loadCategoties(item.id)
    if (route.params.slug) {
      await loadCategory(route.params.slug as string)
    }
    changeLoading(false)
  }
  const updateInfo = async (id: string) => {
    await loadCity(id)
  }
  return {
    isOpenPopup,
    cityList,
    selectCity,
    isLoading,
    cityError,
    closePopup,
    loadCity,
    selectedCity,
    changeCity,
    changeCityList,
    changeCityError,
    changeLoading,
    updateInfo,
    loadCategoties
  }
}

export default useController
