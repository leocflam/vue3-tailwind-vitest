import premium from "@/assets/methods/premium"
import store from '@/store'


test(`it converts to premium at multiplier=17.5`, () => {
    const price = {
        multiplier: "17.5"
    }
    expect(premium(price, 10)).toBe(175)
})

test(`it converts to premium at multiplier=15`, async () => {
    const price = {
        multiplier: "15"
    }
    expect(premium(price, 11)).toBe(165)
})

test(`it converts to premium at multiplier=10`, async () => {
    const price = {
        multiplier: "10"
    }
    expect(premium(price, 10)).toBe(100)
})