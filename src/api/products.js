import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        addProduct: build.mutation({
            query(body) {
                return {
                    url: `/products`,
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: ['Products']
        }),
        updateProduct: build.mutation({
            query({ id, body }) {
                return {
                    url: `/products/${id}`,
                    method: 'PATCH',
                    body
                }
            },
            invalidatesTags: ['Products']
        }),
        deleteProduct: build.mutation({
            query(id) {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Products']
        })
    })
})
export const {
    useGetProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productApi