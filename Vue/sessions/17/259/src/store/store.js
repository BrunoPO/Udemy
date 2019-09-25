import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

Vue.use(Vuex);

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export const store = new Vuex.Store({
    state:{
        value: 0
    },
    getters, 
    mutations,
    actions,
    modules: {
        counter
    }
});