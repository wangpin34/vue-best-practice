import API from './API'

class Service extends API {
  async retrieveServices () {
    const resp = await this.request({
      url: `/services`,
      method: 'get'
    })
    return resp
  }

  async createService (service) {
    const resp = await this.request({
      url: `/services`,
      method: 'post',
      data: service
    })
    return resp
  }

  async retrieveService (id) {
    const resp = await this.request({
      url: `/services/${id}`,
      method: 'get'
    })
    return resp
  }

  async updateService (service) {
    const resp = await this.request({
      url: `/services/${service.id}`,
      method: 'put',
      data: service
    })
    return resp
  }

  async deleteService (id) {
    const resp = await this.request({
      url: `/services/${id}`,
      method: 'delete'
    })
    return resp
  }
}

export default Service
