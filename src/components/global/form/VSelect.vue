<template>
<select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">

    <option :value="option.value" v-for="option in options" :key="option.value">
        {{ option.title }}
    </option>
</select>
</template>

<script>
export default {
    props: {
        type: String,

        modelValue: {
            type: [String, Number],
            default: null
        },

        options: {
            type: Array,
            required: true
        }
    },

    emits: [ 'update:modelValue' ]
}
</script>