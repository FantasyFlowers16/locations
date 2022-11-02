import { City, Category, CategoryItem } from '../../components/models'

export interface CatagoryStateInterface {
  cityOption: City,
  isOpenPopup: boolean,
  cityList: City[] | null,
  categories: Category[] | null,
  categoryItems: CategoryItem[] | null
}

function state (): CatagoryStateInterface {
  return {
    cityOption: {
      id: '1',
      city: 'Новосибирск',
      label: 'Yjdjcb,bhcrfz j,kfcnm'
    },
    isOpenPopup: false,
    cityList: null,
    categories: null,
    categoryItems: null
  }
}

export default state
