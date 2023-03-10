import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000/',
    responseType: 'json',
})

httpClient.interceptors.request.use(
    (config) => config,
    (err) => {
        return Promise.reject({ message: err.message })
    }
)

httpClient.interceptors.response.use(
    (res) => res.data,
    (err) => {
        let message = err.message
        let status = 500

        if (err.response && err.response.status < 500) {
            // This is the way server send error message
            message = err.response.data.error
            status = err.response.status
        }

        return Promise.reject({ message, status })
    }
)

export default httpClient
