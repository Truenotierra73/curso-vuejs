import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';

import * as GETTERS from './getters';
import * as MUTATIONS from './mutations';
import * as ACTIONS from './actions';

Vue.use(Vuex);

export const STORE = new Vuex.Store({
    state: {
        value: 0
    },
    getters: GETTERS,
    mutations: MUTATIONS,
    // Las actions pueden ejecutar código asíncrono. Las mutations son síncronas.
    // Primero se define la función en una mutación para usarla en un acción.
    actions: ACTIONS,
    modules: {
        counter: counter
    }
});