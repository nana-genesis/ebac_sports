import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from './cartSlice'

const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
export default produtosApi
