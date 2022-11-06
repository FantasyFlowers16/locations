<template>
  <div class="category">
    <Loader v-if="isLoading" />
    <div v-else>
      <div class="category__title-container">
          <router-link to="/" class="category__img"> </router-link>
          <h1 class="category__title" v-if="activeCategory">{{activeCategory.name}}</h1>
      </div>

      <div class="category__wrapper">
        <category-filter :activeCategory="activeCategory" class="category__filter"></category-filter>
        <category-products :activeCategory="activeCategory" class="category__products" ></category-products>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryFilter from '../../components/category/categoryFilter/categoryFilter.vue'
import CategoryProducts from '../../components/category/categoryProducts/CategoryProducts.vue'
import Loader from '../../components/loader/Loader.vue'
import { onMounted } from 'vue'
import useController from './controller'
export default {
  components: { CategoryFilter, CategoryProducts, Loader },
  setup () {
    const {
      onMountedCallback, categoryItems, activeCategory, isLoading
    } = useController()

    onMounted(onMountedCallback)
    return { onMountedCallback, categoryItems, activeCategory, isLoading }
  }
}
</script>

<style>
.category__title-container{
  display: flex;
  align-items: center;
    padding-right: 10px;
}
.category__title{
  padding-left: 10px;
}
.category__img{
  width: 30px;
  height: 30px;
  position:relative;
  border-radius: 50%;
  background-color:var(--main-br-gray);;
  transition: opacity .15s ease
}
.category__img:hover{
  opacity: .6;
}
.category__img:before{
  content: '';
  position: absolute;
  background: url(../../../public/svg/arrow.svg);
  width: 14px;
  height: 10px;
  top: calc(50% - 5px);
  background-size: cover;
  right: calc(50% - 7px);
}
.category__filter{
  margin-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .category__wrapper{
    display: flex;
  }
  .category__filter{
    width: 25%;
  }
  .category__products{
    width:75%;
  }
}
</style>
