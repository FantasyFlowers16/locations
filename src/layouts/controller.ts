// import { computed } from 'vue'
import { useStore } from 'src/store'
import { City } from 'src/components/models'

const useController = () => {
  const store = useStore()
  const changeCity = (payload: City) => { store.commit('categories/changeCity', payload) }
  const onMountedCallback = () => {
    console.log('onMountedCallback')
    if (localStorage.getItem('city')) {
      console.log('onMountedCallback2')
      const cityUser: City = JSON.parse(localStorage.getItem('city') || '{}')//eslint-disable-line
      changeCity(cityUser)
    }
  }
  return {
    onMountedCallback, changeCity
  }
}
export default useController
