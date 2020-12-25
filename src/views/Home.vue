<template>
  <div class="container home">
    <navbar />

    <div class="select-date mt-5" v-if="step == 1">
      <h5 class="section-heading">1. Lütfen Giriş ve Çıkış Tarihleri Seçin</h5>
      <select-date />
      <div class="alert alert-danger mb-3" v-if="(!checkInDate || !checkOutDate) && alertDate">
        Tarih seçimi yapmadınız.<br>
        <span v-if="!checkOutDate">Giriş tarihi seçmediniz.</span> -
        <span v-if="!checkInDate">Çıkış tarihi seçmediniz.</span>
      </div>
    </div>

    <div class="select-room mt-5" v-if="step == 2">
      <select-room />
      <div class="alert alert-danger mb-3" v-if="(!roomType || !roomView) && alertRoom">
        Lütfen seçim yapın.<br>
        <span v-if="!roomView">Oda tipi seçmediniz.</span> -
        <span v-if="!roomType">Manzara seçmediniz.</span>
      </div>
    </div>

    <div class="payment mt-5" v-if="step == 3">
      <payment ref="payment"/>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button type="button" class="btn btn-primary mr-2" @click.prevent="prevStep" v-if="step != 1">Geri Dön</button>
        <button type="button" class="btn btn-primary pull-right" @click.prevent="nextStep" v-if="step != totalSteps">Sonraki Adım</button>
        <button type="button" class="btn btn-success pull-right" @click.prevent="submit" v-if="step == totalSteps">Ödeme Yap</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Navbar from '@/components/Navbar.vue';
import SelectDate from '@/components/SelectDate.vue';
import SelectRoom from '@/components/SelectRoom.vue';
import Payment from '@/components/Payment.vue';

export default {
  name: 'Home',
  data() {
    return {
      alertDate: false,
      alertRoom: false,
      form: {},
      name: null,
      totalSteps: 3
    };
  },
  components: {
    Navbar,
    SelectDate,
    SelectRoom,
    Payment
  },
  computed: {
    ...mapState([
      'step',
      'roomType',
      'roomView',
      'checkInDate',
      'checkOutDate'
    ]),
  },
  methods: {
    ...mapActions([
      'updateStep'
    ]),

    nextStep() {
      const state = this.$store.state;
      if (this.step == 1) {
        if (state.checkInDate != null && state.checkOutDate != null) {
          this.updateStep(this.step + 1);
          this.alertDate = false;
        } else {
          this.alertDate = true
        }
      } else if(this.step == 2) {
        if (state.roomType != null && state.roomView != null) {
          this.updateStep(this.step + 1);
          this.alertRoom = false;
        } else {
          this.alertRoom = true;
        }
      }
    },
    prevStep() {
      this.updateStep(this.step - 1)
    },
    submit() {
      const state = this.$store.state;
      this.form.checkInDate = state.checkInDate;
      this.form.checkOutDate = state.checkOutDate;
      this.form.roomType = state.roomType;
      this.form.roomView = state.roomView;
      console.log(this.form);
      this.$refs.payment.handleSubmit();
    }
  }
};
</script>
