<template>
  <div class="popup">
    <div class="popup__form form">
      <h3 class="form__title">Выбор населённого пункта:</h3>
      <div class="form__union-block">
        <div class="form__input-container" :class="{_active:cityList}">
          <input @input="changeInput" class="form__input" :class="{_active:cityList}" v-model="cityValue" />
          <div class="form__error" v-if="cityError">{{cityError}}</div>
          <div v-if="cityList" class="form__autocomplete autocomplete">
          <div class="autocomplete__item" @click="addCity(city)" v-for="city in cityList" :key="city.id">
            {{city.label}}
          </div>
        </div>
        </div>
        <button :class="{'_disable':!selectCity}" class="form__but button" @click="updateCity()">Подтвердить</button>
      </div>

      <img @click="closePopup"  class="form__img" src="../../../public/svg/close.svg" alt="close">
    </div>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { debounce } from 'quasar'
import useController from './controller'
import Loader from '../loader/Loader.vue'

export default {
  components: { Loader },
  setup () {
    const cityValue = ref('')
    const activeCity = ref(null)
    const selectCity = ref(false)
    const updateCity = () => {
      void selectedCity(activeCity.value)
      closePopup()
    }
    const loadInput = () => {
      changeCityError(null)
      selectCity.value = false
      if (cityValue.value.length > 2) {
        void updateInfo(cityValue.value)
      }
    }
    const addCity = (item) => {
      activeCity.value = item //eslint-disable-line
      cityValue.value = item.label //eslint-disable-line
      changeCityList(null)
      selectCity.value = true
    }
    const changeInput = debounce(loadInput, 500)
    const { isOpenPopup, closePopup, updateInfo, selectedCity, cityList, isLoading, cityError, changeCityList, changeCityError } = useController()

    return { cityValue, isOpenPopup, closePopup, loadInput, changeInput, cityList, cityError, selectedCity, activeCity, changeCityError, addCity, updateCity, changeCityList, isLoading, selectCity }
  }
}
</script>

<style>
.popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup:before{
  content:'';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--main-bg-dark);
  mix-blend-mode: normal;
  opacity: .8;
}
</style>
