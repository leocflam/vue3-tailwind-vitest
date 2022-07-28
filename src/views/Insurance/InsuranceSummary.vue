<template>

    <v-box>
        <div class="mt-12">
            <h1 class="text-2xl font-bold text-center">Summary</h1>
        </div>

        <p class="text-lg mt-4">Please confirm the following summary for buying the insurance:</p>
        <p class="text-lg mt-4">Name: {{ form.name }}</p>
        <p class="text-lg mt-4">Age: {{ form.age }}</p>
        <p class="text-lg mt-4">Where Do you live: {{ country.title }}</p>
        <p class="text-lg mt-4">Package: {{ price.name }}</p>
        <p class="text-lg mt-4">Premium: {{ currencyPremium }}</p>
    
        <div class="mt-12">
            <v-button class="bg-white text-lg font-semibold mr-2 border border-black" @click="$router.back()">
                Back
            </v-button>
    
            <v-button class="bg-black text-white text-lg font-semibold">
                Buy
            </v-button>
        </div>
    </v-box>
</template>

<script>
import currency from '@/assets/methods/currency'
import premium from '@/assets/methods/premium'
import store from '@/store'
import { computed } from 'vue'

export default {
  components: {
  },

  setup() {
    const form = store.state.insurance.form
    const price = computed(() => store.getters['insurance/currentPrice'])
    const country = computed(() => store.getters['insurance/currentCountry'])

    const currencyPremium = computed(() => {
        return currency(premium(price.value, form.age))
    })
    return {
        form,
        price,
        country,
        currencyPremium
    }
  }
}
</script>