import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CatagoryStateInterface } from './state'

const getters: GetterTree<CatagoryStateInterface, StateInterface> = {
  getCity (context) {
    return context.cityOption
  },
  getIsOpenPopup (context) {
    return context.isOpenPopup
  },
  getCityList (context) {
    return context.cityList
  },
  getCategories (context) {
    return context.categories
  }
}
export default getters
