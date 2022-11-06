import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { CatagoryStateInterface } from './state'
import LoadService from '../../services/LoadService'
import { City, Category, CategoryItem } from 'src/components/models'

const actions: ActionTree<CatagoryStateInterface, StateInterface> = {
  async loadRegions (context, query:string) { //eslint-disable-line
    return await LoadService.apiRequest((`/city/?term=${query}&country=ru`)).then( //eslint-disable-line
      (result: any) => { //eslint-disable-line
        const cityArray:City[] = []
        if (result.data.length) {//eslint-disable-line
          result.data.forEach((item: City) => {//eslint-disable-line
            cityArray.push({
              id: item.id,
              label: item.label,
              city: item.city
            })
          })
          context.commit('changeCityList', cityArray)
        } else {
          context.commit('changeCityList', null)
          context.commit('changeCityError', 'По запросу ничего не найдено')
        }
      })
  },
  async loadCategoties (context, id:string) { //eslint-disable-line
    return await LoadService.apiRequest((`/menutags/?city_id=${id}`)).then( //eslint-disable-line
      (result) => {
        console.log(context)
        if (result.tags as Category[]) {
          context.commit('changeCategories', result.tags)
        }
      })
  },
  async loadCategory (context, slug: string) { //eslint-disable-line
    const id = context.state.cityOption.id
    return await LoadService.apiRequest((`/menutags/${slug}/?city_id=${id}`)).then( //eslint-disable-line
      (result) => {
        console.log(result)
        if (result.products as CategoryItem[]) {
          context.commit('changeCategoryItems', result.products)
        }
      })
  }
}

export default actions
