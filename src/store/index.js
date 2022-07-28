import { createStore } from 'vuex'
import insurance from './insurance'
import currency from './currency'

// Create a new store instance.
const store = createStore({
  modules: {
    insurance,
    currency,
  }
})

export default store