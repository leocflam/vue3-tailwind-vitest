import currency from "@/assets/methods/currency"
import store from '@/store'
import { SET_CODE } from "@/store/currency/mutationTypes"

test(`it converts to hkd currency at hk rate=1`, () => {
    expect(currency(100)).toBe('HK$ 100')
})

test(`it converts to usd currency at us rate=2`, async () => {
    await store.commit(`currency/${SET_CODE}`, 'us')

    expect(currency(100)).toBe('US$ 200')
})

test(`it converts to aud currency at au rate=3`, async () => {
    await store.commit(`currency/${SET_CODE}`, 'au')

    expect(currency(100)).toBe('AU$ 300')
})