import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import uiSlice from './ui-slice'

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export default store

// CRIO MINHA STORE E ARMAZENO MEUS ESTADOS
// CONFIGURE STORE = FUNÇÃO QUE RETORNA UM OBJETO COM OS ESTADOS
// REDUCER = FUNÇÃO QUE RECEBE O ESTADO ATUAL E O ACTION QUE VEM DO DISPATCH
// SLICE = OBJETO QUE CONTÉM OS REDUCERS
// ACTIONS = OBJETO QUE CONTÉM OS ACTIONS (AÇÕES QUE )
