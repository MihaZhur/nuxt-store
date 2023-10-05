<template>
    <div>

        <Head>
            <Title>{{ product?.title }}</Title>
            <Meta name="description" :content="product?.title" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup lang="ts">
import { Product } from '~/types/product'
const { id } = useRoute().params
const url = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch<Product>(url)

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}


</script>

<style lang="scss" scoped></style>