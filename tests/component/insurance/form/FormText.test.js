// MyComponent.test.js
import InsuranceForm from '@/views/Insurance/InsuranceForm.vue'
import setup from '@/../tests/component/setup'
import { sleep } from '@/../tests/utils'

test('Insurance Form see "Hong Kong", "USA", "Australia" as a select option', () => {

  const { getByText } = setup(InsuranceForm)

  getByText('Name')
  getByText('Age')
  getByText('Where do you live')

  getByText('Hong Kong')
  getByText('USA')
  getByText('Australia')
})

test('Insurance Form see insurance details as a select option', () => {

  const { getByText } = setup(InsuranceForm)

  getByText('Standard')
  getByText('Safe (+50%)')
  getByText('Super Safe (+75%)')
})

test('Click back goes back to Home and cached form data', async () => {

  const { getByText, router, store, fireEvent, getByRole } = setup(InsuranceForm)

  fireEvent.input(getByRole('age'), { target: { value: 99 } })
  fireEvent.input(getByRole('name'), { target: { value: 'Jane' } })

  getByText("Back").click()

  await sleep(1)

  expect(router.currentRoute.value.path).toBe('/')
  expect(store.state.insurance.form.age).toBe(99)
  expect(store.state.insurance.form.name).toBe('Jane')
})