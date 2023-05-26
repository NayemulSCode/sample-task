"use client";
import Image from 'next/image'
import { useGetProductsQuery } from './redux/product/productApi';

export default function Home() {
   const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred while fetching products</div>
  }

  return (
    <div>
      <h1>Products</h1>
      {/* {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))} */}
    </div>
  )
}
