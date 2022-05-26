import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

api.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
api.defaults.headers.get['Access-Control-Allow-Methods'] = 'POST, GET'
api.defaults.headers.get['Access-Control-Allow-Headers'] =
  'OPTIONS,Accept,Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Header'
api.defaults.headers.get['Access-Control-Max-Age'] = '86400'

export default api
