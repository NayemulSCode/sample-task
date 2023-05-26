// 'use server';
import { Product } from "@/ts-types/generated";
import  apiSlice  from "../api/api";
import { API_ENDPOINTS } from "@/util/api/endpoints";
export const getProductApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query<Product, number>({
            query: (id) => `${API_ENDPOINTS.PRODUCTS}/${id}`,
        }),
        getProducts: builder.query<Product[], void>({
            query: () => `${API_ENDPOINTS.PRODUCTS}`,
        }),
    })
});

export const { useGetProductQuery, useGetProductsQuery } = getProductApi;