<template>
  <div class="categories">
    <h1 class="categories__title">Категории товаров</h1>
    <div class="categories__wrapper" v-if="getCategories">
        <div class="categories__item category" v-for="category in getCategories" :key="category.id">
          <router-link class="category__link" :to="`/category/${category.slug}`"></router-link>
          <!-- <router-link :to="`/categoty/${item.slug}`"></router-link> -->
          <img class="category__img" :src="category.image" />
          <div :style="{color: category.text_color}" class="category__text">{{category.name}}</div>
        </div>
    </div>

  </div>
</template>

<script>
import useController from './controller'
export default {
  setup () {
    const { getCategories } = useController()
    return { getCategories }
  }
}
</script>

<style>
.categories__wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
}
.category__link{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.category__link:hover{
  opacity: .3;
  transition: opacity .15s ease-out, background .15s ease-out;
  background: black;
}
.categories__item{
  position: relative;
  width: calc(25% - 16.6px);
  height: 152px;
  padding: 20px 39px 20px 20px;
}

.category__img{
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
  top:0;
  left: 0;
}
.category__text{
  position: relative;
  object-fit: cover;
  z-index: 9;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
}
</style>
