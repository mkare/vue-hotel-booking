<template>
  <div class="row">
    <div class="col-md-6 mt-2">
      <div class="form-group">
        <label>Check-in</label>
        <datepicker :bootstrap-styling="true" v-model="checkInDate" :language="tr" :format="dateFormatter">
          <div slot="beforeCalendarHeader" class="calender-header">
            Lütfen Giriş Tarihi seçin
          </div>
          <span slot="afterDateInput">
            <i class="fa fa-calendar"></i>
          </span>
        </datepicker>
      </div>
    </div>

    <div class="col-md-6 mt-2">
      <div class="form-group">
        <label>Check-out</label>
        <datepicker :bootstrap-styling="true" v-model="checkOutDate" :language="tr" :format="dateFormatter">
          <div slot="beforeCalendarHeader" class="calender-header">
            Lütfen Çıkış Tarihi seçin
          </div>
          <span slot="afterDateInput">
            <i class="fa fa-calendar"></i>
          </span>
        </datepicker>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { tr } from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  name: 'SelectDate',
  components: {
    Datepicker
  },
  data() {
    return {
      tr: tr
    };
  },
  computed: {
    ...mapState([
      'checkInDate',
      'checkOutDate'
    ]),

    checkInDate: {
      get() {
        return this.$store.state.checkInDate
      },
      set(value) {
        this.$store.commit('setCheckInDate', value)
      }
    },
    checkOutDate: {
      get() {
        return this.$store.state.checkOutDate
      },
      set(value) {
        this.$store.commit('setCheckOutDate', value)
      }
    },
  },
  methods: {
    dateFormatter(date) {
      return moment(date).format('DD/MM/YYYY');
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
