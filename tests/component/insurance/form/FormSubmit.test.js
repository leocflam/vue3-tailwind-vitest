// MyComponent.test.js
import InsuranceForm from '@/views/Insurance/InsuranceForm.vue'
import setup from '@/../tests/component/setup'
import { sleep } from '@/../tests/utils'
import { expect } from 'vitest'

test('Click Next with empty form see input error message', async () => {

  const { getByText } = setup(InsuranceForm)
  
  getByText("Next").click()
  await sleep(1)

  getByText('Please enter your name')
  getByText('Please enter your age')
})

test('Click Next with only age form see input error message', async () => {

  const { getByText, fireEvent, getByRole } = setup(InsuranceForm)

  fireEvent.input(getByRole('name'), { target: { value: '' } })
  fireEvent.input(getByRole('age'), { target: { value: 60 } })
  
  getByText("Next").click()
  await sleep(1)

  getByText('Please enter your name')
//   getByText('Please enter your age')
})

test('Click Next with only name form see input error message', async () => {

  const { getByText, fireEvent, getByRole } = setup(InsuranceForm)

  fireEvent.input(getByRole('name'), { target: { value: 'My Name' } })
  fireEvent.input(getByRole('age'), { target: { value: '' } })
  
  getByText("Next").click()
  await sleep(1)

  getByText('Please enter your age')
})

test('Click Next with age and name goes to summary', async () => {

  const { getByText, fireEvent, getByRole, router } = setup(InsuranceForm)

  fireEvent.input(getByRole('age'), { target: { value: 60 } })
  fireEvent.input(getByRole('name'), { target: { value: 'My Name' } })
  
  getByText("Next").click()
  await router.isReady()

  expect(router.currentRoute.value.path).toBe('/insurance/summary')
})

test('Click Next insurance vuex store form populated', async () => {

  const { getByText, fireEvent, getByRole, store } = setup(InsuranceForm)

  fireEvent.input(getByRole('age'), { target: { value: 60 } })
  fireEvent.input(getByRole('name'), { target: { value: 'My Name' } })
  
  getByText("Next").click()
  await sleep(1)

  const form = store.state.insurance.form
  expect(form.name).toBe('My Name')
  expect(form.age).toBe(60)
  expect(form.priceId).toBe('1')
  expect(form.countryCode).toBe('hk')
})