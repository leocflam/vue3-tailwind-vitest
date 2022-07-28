// MyComponent.test.js
import InsuranceForm from '@/views/Insurance/InsuranceForm.vue'
import setup from '@/../tests/component/setup'
import { sleep } from '@/../tests/utils'

test(`Error Page see text starts with "Your age is over our accepted limit."`, async () => {

  const { getByText, getByRole, fireEvent } = setup(InsuranceForm)

  // fireEvent.input(getByRole('age'), 100)
  fireEvent.input(getByRole('age'), { target: { value: 100 } })

  getByRole('next').click()

  await sleep(1)

  getByText((content) => content.startsWith(`Your age is over our accepted limit.`))
})

test(`Error Page click Ok goes back to Home Page`, async () => {

  const { getByText, router, getByRole, fireEvent } = setup(InsuranceForm)

  // fireEvent.input(getByRole('age'), 100)
  fireEvent.input(getByRole('age'), { target: { value: 100 } })

  getByRole('next').click()

  await sleep(1)

  getByText('OK').click()

  await router.isReady()

  expect(router.currentRoute.value.path).toBe('/')
})