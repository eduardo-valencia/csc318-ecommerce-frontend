import axios from 'axios'

const apiConfig = axios.create({
  baseURL: process.env.GATSBY_APP_STRAPI_URL,
})

export default apiConfig
