<template>
    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    props: {
        type: String,

        modelValue: {
            type: [String, Number],
            default: null
        },

        placeholder: {
            type: String,
            default: ''
        }
    },

    emits: [ 'update:modelValue' ]
}
</script>