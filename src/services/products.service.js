import api from './api'

export const getAllProducts = async () => {
  try {

    const response = await api.get('/listarProduto')

    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    return null
  } catch (error) {
    console.log(error)
  }
}
