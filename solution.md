# Features
- VueRouter for page handling. (click button -> change page)
- Vuex for form data storage. (assume we pulled the insurance price and stored in the vuex)
- Test for components.
- Tailwind for styling
- Component (e.g. input, radio, select) to handle form data

## architect
- use currency (vuex) + import method to convert between HKD, AUD, USD
- Go back from summary will show previous state (pull from store->insurance->form)

## Decisions
- Unified all "250 HKD" to "HK$ 250"
- if user enter age > 99, I didn't show him error yet. Only show when he presses "next" button
- sparated premium & currency calculation
    - premium = age * price
    - currency = premium * rate
- add input missing warning message

## Test
- Each Page & features are covered by components Test
- For PROD app, I normally writes extra end-to-end test (Cypress).

## Remarks & Comments
- This is my first time toying around with Vue3 + Tailwind + Vitest :)
- Thanks for this exercise that gives me an opportunity to toy with them!
- In my current PWC + Insurance agency project, we launched using Vue2 + Vue2 Composite-api + Bootstrap CSS + Vuetify.
- In form, click back will back to Home, then again go to Form, will see previously cached form data

## Some TODO improvements:
- In test, now the select option is awaiting an arbitrary 10ms to let the component finish render. Instead, I should improve the function so no need to set an arbitrary 10ms value waiting.