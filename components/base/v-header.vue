<template>
     <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Nuxt Test</NuxtLink>
            <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>