import axios from 'axios'

class API {
  constructor (baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async request (config) {
    try {
      const result = await this.axiosInstance({...config})
      return result.data
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 404) {
          console.error('api not avaiable')
        }
        if (error.response.status === 401) {
          document.dispatchEvent(
            new CustomEvent('unauthorized', {
              detail: {
                path: config.url
              }
            })
          )
        }
        if (!error.response.data.error) {
          return {
            code: -1
          }
        }
        return error.response.data
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
        console.error('No response was received. Return 408 timeout')
        return {
          error: {
            code: 408
          }
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      return {
        error: {
          code: -1
        }
      }
    }
  }
}

export default API
