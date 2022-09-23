import axios from 'axios'

/* configurações para a API */

const api = axios.create({baseURL: process.env.NEXT_PUBLIC_API})
api.defaults.headers.common['authorization'] = 'keyapi'

export default api