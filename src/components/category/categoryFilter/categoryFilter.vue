<template>
  <div class="category-filter">
    <div v-if="activeCategory &&  activeCategory.children.length">
      <router-link  :to="{ name: 'category', params: { slug:  route.params.slug } }" class="category-filter__item " :class="{_active:!route.params.slugCategory}">Все продукты</router-link>
      <router-link :to="{  name: 'categoryFilter', params: { slug:  route.params.slug, slugCategory:item.slug } }"  :class="{_active:route.params.slugCategory === item.slug}" class="category-filter__item" v-for="item in activeCategory.children" :key="item.id">
        {{item.name}}
      </router-link >
      {{activeRoute}}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import useController from './controller'

export default defineComponent({
  props: {
    activeCategory: {
      type: Object,
      require: {}
    }
  },
  setup () {
    const route = useRoute()
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const routeActive = ref(route.params.slug)
    const { categoryItems } = useController()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { route, routeActive, categoryItems }
  }
})
</script>

<style>
.category-filter{
  margin-right:34px
}
.category-filter__item{
  padding: 8px 12px;
  width:100%;
  color:var(--main-bg-black);
  display: block;
  text-decoration: none;
  transition: background .15s ease;
}
.category-filter__item._active, .category-filter__item:hover{
  background-color:  var(--main-light);
}
</style>
