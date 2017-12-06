import API from './API'

class User extends API {
  async retrieveUsers () {
    const resp = await this.request({
      url: `/users`,
      method: 'get'
    })
    return resp
  }

  async createUser (user) {
    const resp = await this.request({
      url: `/users`,
      method: 'post',
      data: user
    })
    return resp
  }

  async retrieveUser (id) {
    const resp = await this.request({
      url: `/users/${id}`,
      method: 'get'
    })
    return resp
  }

  async updateUser (user) {
    const resp = await this.request({
      url: `/users/${user.id}`,
      method: 'put',
      data: user
    })
    return resp
  }

  async deleteUser (id) {
    const resp = await this.request({
      url: `/users/${id}`,
      method: 'delete'
    })
    return resp
  }
}

export default User
