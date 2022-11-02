<template>
  <div class="header">
    <div class="header__content">
      <div class="header__location-container">
        <img class="header__location-img" src="../../../public/svg/location.svg" alt="loc">
        <div class="header__city" @click="selectCity">{{city.city}}</div>
      </div>
    </div>
    <popup v-if="isOpenPopup"></popup>
  </div>
</template>

<script>
import Popup from '../popup/Popup.vue'
import useController from './controller'

export default {
  components: { Popup },
  setup () {
    const {
      city,
      isOpenPopup,
      changeIsOpenPopup,
      selectCity
    } = useController()

    return { city, isOpenPopup, selectCity, changeIsOpenPopup }
  }
}
</script>

<style>
.header{
  width: 100%;
  padding: 25px 0 23px 0;
  height: 71px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
}
.header__content{
  cursor: pointer;
  max-width: 1150px;
  margin:  0 auto;
}
.header__location-container{
  display: flex;
  align-items: center;
  transition: opacity .15s ease-out
}
.header__location-container:hover{
  opacity: .8;
}
.header__location-img{
  width: 11px;
  margin-right: 7px;
  height: 16px;
}
</style>
