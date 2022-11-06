<template>
  <div class="product-item">
    <div class="product-item__pic-container">
      <img class="product-item__pic" :src="item.main_image_thumb_300" alt=" pic" />
    </div>
    <div class="product-item__info-container">
      <div class="product-item__name-category">{{item.category.name}}</div>
      <div class="product-item__name">{{item.full_name}}</div>
      <div class="product-item__subname">{{item.comment_name}}</div>
      <div class="product-item__price">{{item.price}} ₽</div>
      <button  v-if="!item.allowed || !item.available"  class="button _disable product-item__but">Нет в наличии</button>
      <button v-else  class="button product-item__but">В корзину</button>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      require: []
    }
  },
  setup () {
    const a = 3
    return { a }
  }
})
</script>

<style>
.product-item{
  width:100%;
  background: var(--main-bg-white);
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 0px 0px 5px 5px;
  transition: box-shadow .15s ease;
  cursor: pointer;
}
.product-item:hover{
  box-shadow: 0px 2px 10px rgba(151, 151, 151, .6);
}
.product-item__pic-container{
  width: 100%;
  background: var(--main-br-gray);
  height: 0;
  position: relative;
  padding-top: 100%;
}
.product-item__pic{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-item__info-container{
  padding: 6px 20px 23px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.product-item__name-category{
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  font-weight: 400;
  color: var(--main-br-gray);
  margin-bottom: 4px;
}
.product-item__name{
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  font-weight: 600;
}
.product-item__subname{
  font-size: 16px;
  margin-top: 9px;
  line-height: 20px;
  min-height: 20px;
  text-align: center;
  font-weight: 400;
}
.product-item__price{
  margin-top: 14px;
  font-size: 24px;
  line-height: 26px;
  font-weight: 600;
}
.product-item__but{
  margin-top: 16px
}

@media screen and (min-width: 768px) {
  .product-item{
    width:calc(50% - 12px);
  }
}

@media screen and (min-width: 1280px) {
  .product-item{
    width:calc(33.333% - 16px);
  }
}
</style>
