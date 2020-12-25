<template>
  <ul class="nav nav-pills nav-fill mt-5 mb-3">
    <li class="nav-item">
      <a class="nav-link" :class="{ active: step == 1 }" href="#" @click.prevent="setStep(1)">Tarih</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ active: step == 2 }" href="#" @click.prevent="setStep(2)">Oda</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ active: step == 3 }" href="#" @click.prevent="setStep(3)">Ödeme</a>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  props: {},
  computed: {
    ...mapState([
      'step',
    ]),
  },
  methods: {
    ...mapActions([
      'updateStep'
    ]),
    setStep(step) {
      this.updateStep(step)
    }
  }
};
</script>


<style lang="scss" scoped>
.nav-pills {
  .nav-link {
    border-radius: 0;
    color: #718093;
    font-weight: 700;

    &.active {
      background: #40739e;
    }
  }
}
</style>
