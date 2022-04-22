import axios from 'axios'
require('dotenv').config()
const serverUrl = 'http://localhost:3000/api/'

export default {
  async login (data) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/auth/login`,
      data
    })
  },
  async validateInscription (data) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/auth/inscription/validation`,
      data: { email: data }
    })
  },
  async sendToken (data) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/auth/inscription/send_token`,
      data: { email: data }
    })
  }
}
