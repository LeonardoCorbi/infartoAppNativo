import axios from 'axios'

const api = axios.create({
  baseURL: 'https://coracaoalerta.herokuapp.com'
  // baseURL: 'http://192.168.15.10:3333'
})

export default api