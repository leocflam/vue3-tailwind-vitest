import VButton from './form/VButton.vue'
import VInput from './form/VInput.vue'
import VSelect from './form/VSelect.vue'
import VRadio from './form/VRadio.vue'
import VBox from './layout/VBox.vue'

const allComponents = {
    VButton,
    VInput,
    VSelect,
    VRadio,
    VBox,
}

const useGlobalComponents = (app) => {
    for (let name in allComponents) {
        app.component(name, allComponents[name])
    }
}

export { allComponents, useGlobalComponents }
