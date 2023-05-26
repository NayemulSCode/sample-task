import { baseUrl } from '@/util/api/baseurl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: [],
    endpoints: (builder) => ({})
})
export default api
