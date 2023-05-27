import { Category, Product } from "@/ts-types/generated";
import apiSlice from "../api/api";
import { API_ENDPOINTS } from "@/util/api/endpoints";
export const getCagetoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => `${API_ENDPOINTS.CATEGORIES}`,
        }),
        getCategoryProducts: builder.query<Product[], { limit: number, categoryName: string }>({
            
            query: ({limit, categoryName}) => {
                console.log(limit, categoryName)
                return `${API_ENDPOINTS.CATEGORYWISEPRODUCT}/${categoryName}?limit=${limit}`
            },
        }),
    })
});

export const { useGetCategoriesQuery, useGetCategoryProductsQuery } = getCagetoryApi;