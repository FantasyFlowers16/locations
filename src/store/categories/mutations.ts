import { City, Category, CategoryItem } from 'src/components/models'
import { MutationTree } from 'vuex'
import { CatagoryStateInterface } from './state'

const mutation: MutationTree<CatagoryStateInterface> = {
  changeIsOpenPopup (state: CatagoryStateInterface, payload: boolean) {
    state.isOpenPopup = payload
  },
  changeCity (state: CatagoryStateInterface, payload: City) {
    state.cityOption = payload
  },
  changeCityError (state: CatagoryStateInterface, payload: string|null) {
    state.cityError = payload
  },
  changeCityList (state: CatagoryStateInterface, payload: City[] | null) {
    console.log('changeCityList')
    state.cityList = payload
  },
  changeCategories (state: CatagoryStateInterface, payload: Category[] | null) {
    state.categories = payload
  },
  changeCategoryItems (state: CatagoryStateInterface, payload: CategoryItem[] | null) {
    state.categoryItems = payload
  },
  changeLoading (state: CatagoryStateInterface, payload: boolean) {
    state.loading = payload
  },
  changeCityInit (state: CatagoryStateInterface) {
    const cityUser: City = JSON.parse(localStorage.getItem('city') || '{}')//eslint-disable-line
    if (cityUser.id) {
      state.cityOption = cityUser
    }
    localStorage.setItem('city', JSON.stringify(state.cityOption))
  }
}

export default mutation
