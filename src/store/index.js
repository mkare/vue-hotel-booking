import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 1,
    currentStep: 1,
    checkInDate: null,
    checkOutDate: null,
    roomType: null,
    roomView: null
  },

  mutations: {
    setStep(state, step) {
      state.step = step
    },
    setCheckInDate(state, date) {
      state.checkInDate = date
    },
    setCheckOutDate(state, date) {
      state.checkOutDate = date
    },
    setRoomType(state, type) {
      state.roomType = type
    },
    setRoomView(state, view) {
      state.roomView = view
    }
  },

  actions: {
    updateStep({ commit }, step) {
      commit('setStep', step)
    },
    updateCheckInDate({ commit }, date) {
      commit('setCheckInDate', date)
    },
    updateCheckOutDate({ commit }, date) {
      commit('setCheckInDate', date)
    },
    updateRoomType({ commit }, type) {
      commit('setRoomType', type)
    },
    updateRoomView({ commit }, view) {
      commit('setRoomView', view)
    }
  },

  modules: {
  },
});
