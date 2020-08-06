import axios from 'axios'

const api = axios.create({
  baseURL: 'https://coracaoalerta.herokuapp.com'
})

export default api