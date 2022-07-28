
// MyComponent.test.js
import InsuranceForm from '@/views/Insurance/InsuranceForm.vue'
import setup from '@/../tests/component/setup'
import { sleep } from '@/../tests/utils'

test('Choose "Safe (+HK$ 250, 50%)" premium becomes HK$ 750', async () => {

    const { getByText, fireEvent, getByRole } = setup(InsuranceForm)

    fireEvent.input(getByRole('age'), { target: { value: 50 } })

    await sleep(1)
    getByText("Safe (+HK$ 250, 50%)").click()
    await sleep(1)
    getByText("Your premium is: HK$ 750")
  })
  
  test('Choose "Super Safe (+HK$ 375, 75%)" premium becomes HK$ 875', async () => {
  
    const { getByText, fireEvent, getByRole } = setup(InsuranceForm)

    fireEvent.input(getByRole('age'), { target: { value: 50 } })

    await sleep(1)
    getByText("Super Safe (+HK$ 375, 75%)").click()
    await sleep(1)
    getByText("Your premium is: HK$ 875")
  })