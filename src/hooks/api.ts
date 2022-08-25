import axios from 'axios'

/* configurações para a API */
const Api = axios.create({
    baseURL: 'http://localhost:5000'
})

console.log(process.env.API)

export default Api