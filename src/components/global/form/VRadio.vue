<template>
<div class="flex items-center mb-4" v-for="option in options" :key="option.value" @click="selectValue(option.value)">
    <input type="radio" :value="option.value" :name="name"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        v-model="inputValue"
    >
    <label :for="name" class="ml-2 text-sm font-medium">{{ option.title }}</label>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        options: Array,
        modelValue: [String, Number]
    },

    setup(props, { emit }) {
        const inputValue = ref(props.modelValue)

        const selectValue = value => {
            inputValue.value = value
            emit('update:modelValue', value)
        }

        return {
            name: `radio-group-${Math.random()}`,
            inputValue,
            selectValue
        }
    },

    emits: [ 'update:modelValue' ]
}
</script>