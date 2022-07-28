<template>
    <button class="py-3 px-10 shadow focus:outline-none">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        black: {
            type: String,
            default: ''
        }
    },

    setup() {
        
    },
}
</script>
