import { computed } from 'vue'
import { useStore } from 'src/store'
import { City } from '../models'

const useController = () => {
  const store = useStore()
  const isOpenPopup = computed(() => store.getters['categories/getIsOpenPopup'])//eslint-disable-line
  const cityList = computed(() => store.getters['categories/getCityList'])//eslint-disable-line
  const selectCity = false
  const changeIsOpenPopup = (payload: boolean) => { store.commit('categories/changeIsOpenPopup', payload) }
  const loadCategoties = async (payload: string) => { await store.dispatch('categories/loadCategoties', payload) }
  const changeCity = (payload: City) => { store.commit('categories/changeCity', payload) }
  const changeCityList = (payload: City[] | null) => { store.commit('categories/changeCityList', payload) }
  const loadCity = async (payload: string) => { await store.dispatch('categories/loadRegions', payload) }
  const closePopup = () => {
    changeIsOpenPopup(false)
  }
  const selectedCity = async (item:City) => {
    localStorage.setItem('city', JSON.stringify(item))
    changeCity({ city: item.city, id: item.id, label: item.label })
    await loadCategoties(item.id)
  }
  const updateInfo = async (id: string) => {
    await loadCity(id)
  }
  return {
    isOpenPopup,
    cityList,
    selectCity,
    closePopup,
    loadCity,
    selectedCity,
    changeCity,
    changeCityList,
    updateInfo,
    loadCategoties
  }
}

export default useController
