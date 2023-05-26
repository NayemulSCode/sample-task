
'use client'
import { useGetProductsQuery } from '@/app/redux/product/productApi'
import React from 'react'

const Products = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error occurred while fetching products</div>
    }
  return (
    <div>products</div>
  )
}

export default Products