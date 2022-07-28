import store from "@/store"

export default function (amount) {

    const code = store.state.currency.code
    const rate = store.state.currency.rates[code]
        
    return `${rate.code} ${amount * rate.value}`
}