// import { computed } from 'vue'
import { useStore } from 'src/store'
import { City } from 'src/components/models'

const useController = () => {
  const store = useStore()
  const loadCategoties = async (payload: string) => { await store.dispatch('categories/loadCategoties', payload) }
  const changeCity = (payload: City) => { store.commit('categories/changeCity', payload) }
  const onMountedCallback = async () => {
    if (localStorage.getItem('city')) {
      const cityUser: City = JSON.parse(localStorage.getItem('city') || '{}')//eslint-disable-line
      changeCity(cityUser)
      console.log(cityUser)
      await loadCategoties(cityUser.id)
    }
    // await selectCity()
    // resizeHandler()
    // await generalLoading()
    // window.addEventListener('resize', () => {
    //   resizeHandler()
    // })
  }

  return {
    onMountedCallback, changeCity
  }
}

export default useController
