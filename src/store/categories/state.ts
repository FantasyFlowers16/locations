import { City, Category, CategoryItem } from '../../components/models'

export interface CatagoryStateInterface {
  cityOption: City,
  isOpenPopup: boolean,
  cityList: City[] | null,
  categories: Category[] | null,
  categoryItems: CategoryItem[] | null,
  loading: boolean,
  cityError: string | null
}

function state (): CatagoryStateInterface {
  return {
    cityOption: {
      id: '1',
      city: 'Новосибирск',
      label: 'Новосиирская область, Новосибирск'
    },
    isOpenPopup: false,
    cityList: null,
    categories: null,
    categoryItems: null,
    loading: false,
    cityError: null
  }
}

export default state
