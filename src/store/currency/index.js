import { SET_CODE } from './mutationTypes'

const insurance = {
    namespaced: true,
    
    state: () => ({
        rates: {
            hk: {
                code: 'HK$',
                value: 1
            },
            us: {
                code: 'US$',
                value: 2
            },
            au: {
                code: 'AU$',
                value: 3
            }
        },
        code: 'hk'
    }),

    mutations: {
        [SET_CODE](state, code) { state.code = code }
    },

    actions: {

        setCode({ commit }, countryCode) {
            commit(SET_CODE, countryCode)
        }
    },

    getters: {}
  }

  export default insurance