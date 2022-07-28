// MyComponent.test.js
import InsuranceSummary from '@/views/Insurance/InsuranceSummary.vue'
import setup from '@/../tests/component/setup'
import { sleep } from 'tests/utils'
import { SET_CODE } from '@/store/currency/mutationTypes'
import { SET_FORM } from '@/store/insurance/mutationTypes'

test('Summary Sees Input', async () => {

  const { getByText, store } = setup(InsuranceSummary)

  const name = 'Chan'
  const age = 60
  const countryCode = 'us'
  const priceId = '2'

  store.commit(`insurance/${SET_FORM}`, {
    name,
    age,
    countryCode,
    priceId,
  })

  await store.commit(`currency/${SET_CODE}`, 'us')
  
  await sleep(1)

  getByText(`Name: ${name}`)
  getByText(`Age: ${age}`)
  getByText(`Where Do you live: USA`)
  getByText(`Package: Safe`)
  getByText(`Premium: US$ 1800`)

})