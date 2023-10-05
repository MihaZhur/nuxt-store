<template>
    <div class="grid grid-cols-4 gap-5">
        <template v-for="p of products" :key="p.id">
            <ProductCard :product="p" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { Product } from '~/types/product';
const { data: products } = await useFetch<Product[]>('https://fakestoreapi.com/products/')


</script>

<style lang="scss" scoped></style>