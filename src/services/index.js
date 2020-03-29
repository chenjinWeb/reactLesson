
import axios from 'axios'

import services from './apis'

const instance = axios.create({
  baseURL: services.baseUrl
})

export const getTodos = () => {
  return instance.get(services.todos)
}

