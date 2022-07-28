<template>
<v-box>
    <div>
        <h1 class="text-2xl font-bold">Hello There!</h1>
    </div>

    <p class="mt-6 text-lg">Let's buy some insurance. It is going to take only a few steps</p>

    <div class="mt-6">
        <v-button class="bg-black text-white text-lg font-semibold" @click="$router.push('/insurance/form')">
            Start
        </v-button>
    </div>
</v-box>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>