import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type CartState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  itens: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const jaExiste = state.itens.find((p) => p.id === action.payload.id)
      if (!jaExiste) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    favoritar(state, action: PayloadAction<Produto>) {
      const index = state.favoritos.findIndex(
        (p) => p.id === action.payload.id
      )
      if (index >= 0) {
        state.favoritos.splice(index, 1)
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, favoritar } =
  cartSlice.actions
export default cartSlice.reducer
