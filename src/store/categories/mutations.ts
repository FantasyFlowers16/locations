import { City, Category } from 'src/components/models'
import { MutationTree } from 'vuex'
import { CatagoryStateInterface } from './state'

const mutation: MutationTree<CatagoryStateInterface> = {
  changeIsOpenPopup (state: CatagoryStateInterface, payload: boolean) {
    state.isOpenPopup = payload
  },
  changeCity (state: CatagoryStateInterface, payload: City) {
    state.cityOption = payload
  },
  changeCityList (state: CatagoryStateInterface, payload: City[] | null) {
    console.log('changeCityList')
    state.cityList = payload
  },
  changeCategories (state: CatagoryStateInterface, payload: Category[] | null) {
    state.categories = payload
  }
}

export default mutation
