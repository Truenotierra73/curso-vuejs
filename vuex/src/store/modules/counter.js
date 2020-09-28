import * as types from '../types';

const STATE = {
    counter: 0
};

const GETTERS = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter;
    }
    // doubleCounter: state => {
    //     return state.counter * 2;
    // },
    // clicksCounter: state => {
    //     return state.counter;
    // }
};

const MUTATIONS = {
    increment: (state, payload) => {
        // state.counter++;
        state.counter += payload;
    },
    decrement: (state, payload) => {
        // state.counter--;
        state.counter -= payload;
    }
};

const ACTIONS = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    }
};

export default {
    state: STATE,
    getters: GETTERS,
    mutations: MUTATIONS,
    actions: ACTIONS,
}