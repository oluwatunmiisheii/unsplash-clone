// import libraries
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// add clien id to acios instance 
apiClient.defaults.headers.common['Authorization'] = `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;

// before a request is made start the nprogress
apiClient.interceptors.request.use(config => {
  nprogress.start()
  return config
})

// before a response is returned stop nprogress
apiClient.interceptors.response.use(response => {
  nprogress.done()
  return response
}, function (error) {
  nprogress.done()
  return Promise.reject(error);
})


export default apiClient
