import { allComponents } from '@/components/global'
import store from '@/store'
import router from '@/router'

import { render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { screen, fireEvent } from '@testing-library/dom'

export default function setup(component) {
    return {
        router,
        store,
        
        ...render(component, {
            global: {
              plugins: [store, router],
            },
            components: allComponents
        }),
        userEvent,
        screen,
        fireEvent
    }
}