import axios from 'axios'
const server = `http://localhost:8000`  
export const useriris = req => axios.post(`${server}/shop/s_users/iris`, req)