<template>
  <div class="payment">
    <div class="row">
      <div class="col-12">
        <div class="alert alert-info" v-if="checkInDate && checkOutDate">
          <span>Giriş Tarihi: </span>
          <strong>{{moment(checkInDate).format('DD/MM/YYYY')}}</strong> -
          <span>Çıkış Tarihi: </span>
          <strong>{{moment(checkOutDate).format('DD/MM/YYYY')}}</strong>
          <hr class="clearfix">
          <span>Oda Tipi: </span>
          <strong>{{roomType}}</strong> -
          <span>Oda Manzarası: </span>
          <strong>{{roomView}}</strong>
        </div>

        <h5 class="section-heading">4. Lütfen Kredi Kartı Bilgilerinizi Girin</h5>
      </div>

      <div class="col-md-6">
        <div class="credit-card">
          <div class="credit-card__back">
            <div class="credit-card__cvc">{{card.cvc}}</div>
          </div>
          <div class="credit-card__front">
            <img src="@/assets/images/credit-card.svg" class="credit-card__chip">
            <img src="@/assets/images/world.svg" class="credit-card__bg">
            <div class="credit-card__number">{{card.number}}</div>
            <div class="credit-card__name">{{card.name}}</div>
            <div class="credit-card__exp">{{card.exp}}</div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input-mask class="form-control" placeholder="Kart Numarası"
                v-model="card.number" mask="9999 9999 9999 9999">
              </input-mask>
              <div v-if="submitted && !$v.card.number.required" class="invalid-feedback d-block">Lütfen kart numarası girin.</div>
              <div v-if="submitted && !$v.card.number.minLength" class="invalid-feedback d-block">Lütfen kart numarasını eksiksiz</div>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Kart Üzerindeki İsim"
                v-model="card.name">
              <div v-if="submitted && !$v.card.name.required" class="invalid-feedback d-block">Lütfen kart üzerindeki ismi kontrol edin.</div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <input-mask class="form-control" placeholder="Son Kul. Tarihi"
                    v-model="card.exp" mask="99/99">
                  </input-mask>
                  <div v-if="submitted && !$v.card.exp.required" class="invalid-feedback d-block">Lütfen son kul. tarihini kontrol edin.</div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <input-mask class="form-control" placeholder="CVC"
                    v-model="card.cvc" mask="999">
                  </input-mask>
                  <div v-if="submitted && !$v.card.exp.required" class="invalid-feedback d-block">Lütfen cvc kodu girin.</div>
                  <div v-if="submitted && !$v.card.exp.minLength" class="invalid-feedback d-block">Lütfen cvc kodunu eksiksiz girin.</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, numeric } from 'vuelidate/lib/validators';
import { mapState } from 'vuex';
import router from '@/router';

export default {
  name: 'Payment',
  data() {
    return {
      submitted: false,
      card: {
        number: "",
        name: "",
        exp: "",
        cvc: ""
      }
    };
  },
  computed: {
    ...mapState([
      'checkInDate',
      'checkOutDate',
      'roomType',
      'roomView'
    ]),
  },
  validations: {
    card: {
      number: {
        required,
        minLength: minLength(19)
      },
      name: {
        required,
        minLength: minLength(6)
      },
      exp: {
        required,
        minLength: minLength(5)
      },
      cvc: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
          console.log("Hata! Eksik form bilgileri. \n\n" + JSON.stringify(this.card));
          return;
      }

      console.log("Başarılı! \n\n" + JSON.stringify(this.card));
      router.push({ path: '/payment-completed' })
    }
  }
};
</script>


<style lang="scss" scoped>
.card-form {
  @media only screen and (min-width: 768px)  {
    padding-left: 30px;
    padding-top: 90px;
  }
}
</style>
