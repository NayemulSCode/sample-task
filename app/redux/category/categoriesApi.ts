import { Category } from "@/ts-types/generated";
import apiSlice from "../api/api";
import { API_ENDPOINTS } from "@/util/api/endpoints";
export const getCagetoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => `${API_ENDPOINTS.CATEGORIES}`,
        }),
    })
});

export const { useGetCategoriesQuery } = getCagetoryApi;