<template>
  <div>
    <div  class="category-items" v-if="filteredItems && filteredItems.length">
      <category-product v-for="categoryItem in filteredItems" :key="categoryItem.id" :item="categoryItem" ></category-product>
    </div>
  </div>

</template>

<script>
import useController from './controller'
import CategoryProduct from '../categoryProduct/CategoryProduct.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { CategoryProduct },
  props: {
    activeCategory: {
      type: Object,
      require: {}
    }
  },
  setup () {
    const { filteredItems, categoryItems } = useController()

    return { filteredItems, categoryItems }
  }
})
</script>

<style>
.category-items{
  display: flex;
  gap:24px;
  flex-wrap:wrap;
}
</style>
