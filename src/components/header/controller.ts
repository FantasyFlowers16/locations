import { computed } from 'vue'
import { useStore } from 'src/store'

const useController = () => {
  const store = useStore()
  const selectCity = () => {
    changeIsOpenPopup(true)
  }
  const city = computed(() => store.getters['categories/getCity'])//eslint-disable-line
  const isOpenPopup = computed(() => store.getters['categories/getIsOpenPopup'])//eslint-disable-line
  const changeIsOpenPopup = (payload: boolean) => { store.commit('categories/changeIsOpenPopup', payload) }

  return {
    city,
    changeIsOpenPopup,
    selectCity,
    isOpenPopup
  }
}

export default useController
