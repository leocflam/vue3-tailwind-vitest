<template>
    <div v-if="!ageError">
        <div class="mt-12">
            <h1 class="text-2xl font-bold text-center">Tell Us about yourself</h1>
        </div>

        <div class="w-80 mx-auto">
            <div class="mt-4">
                <label>Name</label>
                <v-input type="text" class="mt-2" placeholder="Your Name (Chan Tai Man)" 
                    v-model="form.name" role="name"
                    />
                <p class="text-red-500" v-if="submited && !validation.name">Please enter your name</p>
            </div>
        
            <div class="mt-4">
                <label>Age</label>
                <v-input type="number" class="mt-2" placeholder="Your Age" v-model="form.age" role="age"/>
                <p class="text-red-500" v-if="submited && !validation.age">Please enter your age</p>
            </div>
        
            <div class="mt-4">
                <label>Where do you live</label>
                <v-select v-model="form.countryCode" :options="countryOptions" role="countryCode" @change="codeChanged"/>
            </div>
        </div>

        <v-box>
            <div class="inline-block">
                <v-radio :options="priceOptions" v-model="form.priceId"></v-radio>
            </div>

            <h2 class="text-xl font-bold mt-6">
                <span v-if="!ageExceeded">Your premium is: {{ currenctPremium }}</span>
                <span v-else>Press Next to see your premium.</span>
            </h2>
        
            <div class="mt-12">
                <v-button class="bg-white text-lg font-semibold mr-2 border border-black" @click="$router.push('/'); cache()">
                    Back
                </v-button>
        
                <v-button class="bg-black text-white text-lg font-semibold" @click="nextStep" role="next">
                    Next
                </v-button>
            </div>
        </v-box>
    </div>

    <v-box v-else>
        <div class="mt-12">
            <h1 class="text-2xl font-bold text-center">Ooops</h1>
        </div>

        <p class="text-lg mt-4">Your age is over our accepted limit.</p>
        <p class="text-lg mt-4">We are sorry but we cannot insure you now.</p>

        <div class="mt-12">
            <v-button class="bg-black text-white text-lg font-semibold" @click="$router.replace('/')">
                OK
            </v-button>
        </div>
    </v-box>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { SET_CODE } from '@/store/currency/mutationTypes'
import currency from '@/assets/methods/currency'
import premium from '@/assets/methods/premium'
import { SET_FORM } from '@/store/insurance/mutationTypes'

export default {

    setup() {
        const router = useRouter()
        const store = useStore()

        const storedForm = store.state.insurance.form
        const initialForm = {
            ...storedForm
        }

        const form = ref(initialForm)

        const priceOptions = computed(() => {
            const basePrice = store.state.insurance.prices.find(price => price.multiplier === "10")
            const baseTotal = premium(basePrice, form.value.age, selectedRate.value)

            const eachPrice = price => {
                const total = premium(price, form.value.age, selectedRate.value)
                let suffix= price.name_suffix
                const diff = total - baseTotal
                if (diff && !ageExceeded.value) {
                    suffix = suffix.replace("{price_diff}", currency(diff))
                } else {
                    suffix = suffix.replace("{price_diff}, ", "")
                }
                
                return { value: price.id, title: `${price.name}${suffix}`}
            }

            return store.state.insurance.prices.map(eachPrice)
        })

        const selectedPrice = computed(() => store.state.insurance.prices.find(price => price.id === form.value.priceId) )

        const selectedRate = computed(() => store.state.currency.rates[form.value.countryCode] )

        const submited = ref(false)
        const ageError = ref(false)
        const ageExceeded = computed(() => parseInt(form.value.age) > 99)

        const validation = computed(() => {
            const { name, age } = form.value

            return {
                name: !!name,
                age: !ageExceeded.value && parseInt(age) > 1,
            }
        })

        const validated = () => {
            const valid = validation.value

            return valid.name && valid.age
        }

        const hanldeInvalid = () => {
            if (parseInt(form.value.age) > 99) {
                ageError.value = true
            }
        }

        const cache = () => {
            store.commit(`insurance/${SET_FORM}`, form.value)
        }

        const nextStep = () => {
            submited.value = true

            cache()
            
            if (!validated()) return hanldeInvalid()


            router.push('/insurance/summary')

        }

        const codeChanged = async event => {
            await store.commit(`currency/${SET_CODE}`, event.target.value)
        }

        const currenctPremium = computed(() => {
            return currency(premium(selectedPrice.value, form.value.age, selectedRate.value))
        })
        
        return {
            form,
            cache,

            countryOptions: store.state.insurance.countries,
            priceOptions,
            currenctPremium,
            nextStep,
            submited,
            ageError,
            ageExceeded,
            validation,

            codeChanged,
            currency
        }
    }
}
</script>