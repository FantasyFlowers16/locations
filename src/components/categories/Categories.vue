<template>
  <div class="categories">
    <h1 class="categories__title">Категории товаров</h1>
    <div class="categories__wrapper" v-if="getCategories">
      <div class="categories__item categories-item" v-for="category in getCategories" :key="category.id">
        <div class="categories__item-wrapper">
          <router-link class="categories-item__link" :to="`/category/${category.slug}`"></router-link>
          <!-- <router-link :to="`/categoty/${item.slug}`"></router-link> -->
          <img class="categories-item__img" :src="category.image" />
          <div :style="{color: category.text_color}" class="categories-item__text">{{category.name}}</div>
        </div>
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
.categories__item-wrapper{
  padding: 20px 39px 20px 20px;
  position: absolute;
  height: 100%;
  top:0;
  left: 0;
  width: 100%;
}
.categories-item__link{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
.categories-item__link:hover{
  transition: background .2s ease-out;
  background: transparent;
}
.categories__item{
  height: 0px;
  width: 100%;
  position: relative;
  padding-top: 48%;

}

.categories-item__img{
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
  top:0;
  left: 0;
}
.categories-item__text{
  position: relative;
  object-fit: cover;
  z-index: 9;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
}
@media screen and (min-device-width: 768px) {
  .categories__item{
    width: calc(50% - 11px);
    padding-top: 22%;
  }
}
@media screen and (min-device-width: 1440px) {
  .categories__item{
    position: relative;
    width: calc(25% - 16.6px);
    padding-top: 11.893%;
  }
}
</style>
