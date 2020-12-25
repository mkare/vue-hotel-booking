<template>
  <div class="payment-completed container">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="alert alert-info text-center">
          <h4 class="mt-2">Teşekkürler! Rezervasyonunuz oluşturuldu.</h4>
          <hr class="clearfix">
          <span>Giriş Tarihi: </span>
          <strong>{{moment(checkInDate).format('DD/MM/YYYY')}}</strong> -
          <span>Çıkış Tarihi: </span>
          <strong>{{moment(checkOutDate).format('DD/MM/YYYY')}}</strong>
          <hr class="clearfix">
          Rezervasyonunuz, <strong>{{roomView}} manzarası</strong> ve <strong>{{roomType}} oda tipi</strong> ile yapılmıştır.
          <button type="button" class="btn btn-success mt-4 mb-3">
            <i class="fa fa-caret-left mr-2"></i>
            <span>Anasayfaya Geri Dön</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PaymentCompleted',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'checkInDate',
      'checkOutDate',
      'roomType',
      'roomView'
    ]),
  }
};
</script>
