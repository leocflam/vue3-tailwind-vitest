// MyComponent.test.js
import InsuranceForm from '@/views/Insurance/InsuranceForm.vue'
import setup from '@/../tests/component/setup'
import { sleep } from '@/../tests/utils'

test('Age 50 Choose "USA" premium becomes US$ 1000', async () => {

  const { getByText, userEvent, getByRole, fireEvent } = setup(InsuranceForm)

  fireEvent.input(getByRole('age'), { target: { value: 50 } })

  userEvent.selectOptions(getByRole('countryCode'), ['us'])

  fireEvent.input(getByRole('countryCode'), { target: { value: 'us' } })

  await sleep(20)

  getByText("Your premium is: US$ 1000")
})

test('Age 60 Choose "Australia" premium becomes AU$ 1800', async () => {

  const { getByText, userEvent, getByRole, fireEvent } = setup(InsuranceForm)

  fireEvent.input(getByRole('age'), { target: { value: 60 } })

  userEvent.selectOptions(getByRole('countryCode'), ['au'])

  fireEvent.input(getByRole('countryCode'), { target: { value: 'au' } })

  await sleep(20)

  getByText("Your premium is: AU$ 1800")
})