// MyComponent.test.js
import HomePage from '@/views/HomePage.vue'
import setup from '../setup'

test(`Home Page see text starts with "Let's buy some insurance"`, () => {

  const { getByText } = setup(HomePage)

  getByText((content) => content.startsWith(`Let's buy some insurance`))
})

test(`Home Page click "Start" goes to Purchase`, async () => {

  const { getByText, router } = setup(HomePage)

  getByText('Start').click()

  await router.isReady()

  expect(router.currentRoute.value.path).toBe('/insurance/form')
})