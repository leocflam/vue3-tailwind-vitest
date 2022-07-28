import { SET_FORM } from "./mutationTypes"

const insurance = {
    namespaced: true,
    state: () => ({
        prices: [
            { id: "1", multiplier: "10", name: "Standard", name_suffix: ""  },
            { id: "2", multiplier: "15", name: "Safe", name_suffix: " (+{price_diff}, 50%)"  },
            { id: "3", multiplier: "17.5", name: "Super Safe", name_suffix: " (+{price_diff}, 75%)"  },
        ],
        countries: [
            { value: 'hk', title: 'Hong Kong' },
            { value: 'us', title: 'USA' },
            { value: 'au', title: 'Australia' },
        ],
        form: {
            age: null,
            name: null,
            priceId: "1",
            countryCode: 'hk'
        }
    }),
    mutations: {
        [SET_FORM](state, form) {
            for (let attr in form) {
                state.form[attr] = form[attr]
            }
        }
    },
    actions: {},
    getters: {
        currentPrice(state) {
            return state.prices.find(price => price.id === state.form.priceId)
        },
        currentCountry(state) {
            return state.countries.find(country => country.value === state.form.countryCode)
        }
    }
  }

  export default insurance