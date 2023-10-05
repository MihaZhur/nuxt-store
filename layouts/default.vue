<template>
    <div class="main ">
        <VHeader />
        <div class="container max-[1280]: p-4">
        <slot />
        </div>
    </div>
</template>

<script setup>
import VHeader from '~/components/base/v-header.vue'

</script>

<style lang="scss" scoped></style>