import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedLocations: []
    },
    mutations: {
      setLocations (state, payload) {
        state.loadedLocations = payload
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios
          .get('http://localhost:3004/locations/')
          .then((res) => {
            const locationArray = []
            for (const key in res.data) {
              locationArray.push({ ...res.data[key] })
            }
            vuexContext.commit('setLocations', locationArray)
          })
          .catch(e => context.error(e))
      },
      setLocations (vuexContext) {
        return axios
          .get('http://localhost:3004/locations/')
          .then((res) => {
            const locationArray = []
            for (const key in res.data) {
              locationArray.push({ ...res.data[key] })
            }
            vuexContext.commit('setLocations', locationArray)
          })
      },
      addLocation (vuexContext, location) {
        const createdPost = {
          ...location
        }
        return axios.post('http://localhost:3004/locations/', createdPost)
          .then((data) => {
            vuexContext.commit('setLocations', { ...data })
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedLocations (state) {
        return state.loadedLocations
      }
    }
  })
}

export default createStore
