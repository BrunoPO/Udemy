const state = {
    counter: 0
};

const getters ={
    doubleCounters: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment : (state, payload) => {
        //We have the same of getters logic here, but now to update
        //be aware that mutations is to be use in sync way
        state.counter += payload;
    },
    decrement : (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    increment: ({commit}, payload) => {
        //to async it's need to use actions
        commit('increment', payload)
    },
    decrement: ({commit}, payload) => {
        commit('decrement', payload)
    },
    AsyncIncrement: ({commit}, payload) => {
        setTimeout(()=>{
            commit('increment', payload.by);
        }, payload.duration)
    },
    AsyncDecrement: ({commit}, payload) => {
        setTimeout(()=>{
            commit('decrement', payload.by);
        }, payload.duration)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}

