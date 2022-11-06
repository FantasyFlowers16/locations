// import { computed } from 'vue'
import { CategoryItem } from 'src/components/models'
import { useStore } from 'src/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useController = () => {
  const store = useStore()
  const route = useRoute()
  const categoryItems = computed(() => store.getters['categories/getCategoryItems']as CategoryItem[])//eslint-disable-line
  const filteredItems = computed(() => {
    if (route.params.slugCategory && categoryItems.value) {
      // eslint-disable-next-line array-callback-return
      return categoryItems.value.filter((item: CategoryItem) => {
        if (item.tags) {
          return item.tags.some(el => el.slug === route.params.slugCategory)
        }
      })
    } else return categoryItems.value
  })
  return {
    filteredItems, categoryItems
  }
}

export default useController
