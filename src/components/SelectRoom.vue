<template>
  <div class="row">
    <div class="col-12">
      <div class="alert alert-info" v-if="checkInDate && checkOutDate">
        <span>Giriş Tarihi: </span>
        <strong>{{moment(checkInDate).format('DD/MM/YYYY')}}</strong> -
        <span>Çıkış Tarihi: </span>
        <strong>{{moment(checkOutDate).format('DD/MM/YYYY')}}</strong>
      </div>

      <h5 class="section-heading">2. Lütfen Oda Tipi Seçin</h5>
    </div>

    <div class="col-md-4 mt-2">
      <div class="form-group">
        <input type="radio" id="standard" value="standard" v-model="roomType">
        <label class="radio-label" for="standard">
          <img src="@/assets/images/standard.svg" class="img-fluid">
          <span>Standart Oda</span>
        </label>
      </div>
    </div>

    <div class="col-md-4 mt-2">
      <div class="form-group">
        <input type="radio" id="deluxe" value="deluxe" v-model="roomType">
        <label class="radio-label" for="deluxe">
          <img src="@/assets/images/deluxe.svg" class="img-fluid">
          <span>Deluxe Oda</span>
        </label>
      </div>
    </div>

    <div class="col-md-4 mt-2">
      <div class="form-group">
        <input type="radio" id="suit" value="suit" v-model="roomType">
        <label class="radio-label" for="suit">
          <img src="@/assets/images/suit.svg" class="img-fluid">
          <span>Suit Oda</span>
        </label>
      </div>
    </div>

    <hr class="clearfix">

    <div class="col-12">
      <h5 class="section-heading">3. Lütfen Oda Manzarası Seçin</h5>
    </div>

    <div class="col-md-4 mt-2">
      <div class="form-group">
        <input type="radio" id="beach" value="deniz" v-model="roomView">
        <label class="radio-label" for="beach">
          <img src="@/assets/images/beach.svg" class="img-fluid">
          <span>Deniz</span>
        </label>
      </div>
    </div>

    <div class="col-md-4 mt-2">
      <div class="form-group">
        <input type="radio" id="mountain" value="kara" v-model="roomView">
        <label class="radio-label" for="mountain">
          <img src="@/assets/images/mountain.svg" class="img-fluid">
          <span>Kara</span>
        </label>
      </div>
    </div>

    <div class="col-12" v-if="false">
      <div class="alert alert-light" role="alert" v-if="roomType">
        {{roomType}} oda <span v-if="roomView">ve {{roomView}} manzarası </span>seçtiniz
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SelectRoom',
  computed: {
    ...mapState([
      'checkInDate',
      'checkOutDate',
      'roomType',
      'roomView'
    ]),
    roomType: {
      get() {
        return this.$store.state.roomType
      },
      set(value) {
        this.$store.commit('setRoomType', value)
      }
    },
    roomView: {
      get() {
        return this.$store.state.roomView
      },
      set(value) {
        this.$store.commit('setRoomView', value)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
