import axios from 'axios'
const server = `http://localhost:8000`  
export const userstroke = req => axios.get(`${server}/blog/sickness/stroke`, req)