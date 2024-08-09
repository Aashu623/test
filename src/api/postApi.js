import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'posts',
            providesTags: (result) =>
                result
                    ?
                    [
                        ...result.map(({ id }) => ({ type: 'Posts', id })),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    :
                    [{ type: 'Posts', id: 'LIST' }],
        }),
        addPost: build.mutation({
            query(body) {
                return {
                    url: `post`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        getPost: build.query({
            query: (id) => `post/${id}`,
            providesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
        updatePost: build.mutation({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `post/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
        }),
        deletePost: build.mutation({
            query(id) {
                return {
                    url: `post/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
    }),
})

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useGetPostQuery,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi