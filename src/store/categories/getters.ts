import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CatagoryStateInterface } from './state'

const getters: GetterTree<CatagoryStateInterface, StateInterface> = {
  getCity (context) {
    return context.cityOption
  },
  getCityError (context) {
    return context.cityError
  },
  getIsOpenPopup (context) {
    return context.isOpenPopup
  },
  getCityList (context) {
    return context.cityList
  },
  getCategories (context) {
    return context.categories
  },
  getCategoryItems (context) {
    return context.categoryItems
  },
  getLoad (context) {
    return context.loading
  }
}
export default getters
