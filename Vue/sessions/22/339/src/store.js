import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

import axios from './axios-auth'
import globalAxios from 'axios'

export default new Vuex.Store({
  state: {
        idToken: null,
        userId: null,
        user: {}
  },
    mutations: {
        authUser(state, userData){
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser (state, user){
            state.user = user;
        },
        clearAuthDate(state){
            state.idToken = null;
            state.userId = null;
            localStorage.removeItem('token');
            localStorage.removeItem('expiresDate');
        }
  },
  actions: {
    setLogOutTimer({commit, dispatch}, expirationTimer){
        setTimeout(()=>{
            dispatch('logout')
        }, expirationTimer * 1000);
    },
    signup({commit, dispatch}, authData){
        var key= 'AIzaSyAlTzHhc0MJ5PqRkLoAGooSRf5K7SLxQGY';
        axios.post('/signupNewUser?key='+key, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }).then( res => {
            console.log(res);
            commit('authUser', {
                token: res.data.idToken,
                userId: res.data.localId
            });
            
            const now = new Date();
            const expiresDate = new Date(now.getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('expirationDate', expiresDate);

            dispatch('storeUser', authData);
            dispatch('setLogOutTimer', res.data.expiresIn);
        }).catch(err => {console.log(err)});
    },
    logout({commit}){
        commit('clearAuthDate');
        router.replace('/signin')
    },
    login({commit, dispatch}, authData){
        var key= 'AIzaSyAlTzHhc0MJ5PqRkLoAGooSRf5K7SLxQGY';
        axios.post('/verifyPassword?key='+key, {
            ...authData,
            returnSecureToken: true
        }).then( res => {
            console.log(res);
            commit('authUser', {
                token: res.data.idToken,
                userId: res.data.localId
            });
            
            const now = new Date();
            const expiresDate = new Date(now.getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('expirationDate', expiresDate);

            dispatch('setLogOutTimer', res.data.expiresIn);
            router.push('/dashboard');
        }).catch(err => {
            console.log(err); 
        });
    },
    tryAutoLogin({commit}){
        const token = localStorage.getItem('token');
        if(!token)
            return

        const expirationDate = localStorage.getItem('expirationDate');
        if(new Date() <= expirationDate){
            return
        }

        const userId = localStorage.getItem('userId');
        if(!userId)
            return

        commit('authUser',{
            token,
            userId
        })


    },
    storeUser ({commit, state}, userData){
        if(!state.idToken){
            console.log('Not Authed');
            return
        }
        globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
            .then( res => { console.log(res); })
            .catch( err => { console.log(err); })
    },
    fetchUser({commit, state}){
        if(!state.idToken){
            console.log('Not Authed');
            return
        }

        globalAxios.get('/users.json' + '?auth=' + state.idToken)
            .then( res => {
                console.log(res);
                const users = Object.entries(res.data).reduce((arr, entry) => {
                    var user = entry [1];
                    entry[1].id = entry[0];
                    arr.push(user);
                    return arr;
                }, []);
                console.log(users);
                commit('storeUser', users[0])
            }).catch(err => { 
                console.log(err); 
            });
    }
  },
  getters: {
      user(state){
        return state.user;
      },
      isAutheticated(state){
          return state.idToken !== null;
      }
  }
})