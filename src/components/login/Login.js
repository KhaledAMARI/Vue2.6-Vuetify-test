import AuthService from '../../services/AuthService.js'
import router from '../../router/index.js'

export default {
  data () {
    return {
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const credential = {
        email: this.email,
        password: this.password
      }
      try {
        const response = await AuthService.login(credential)
        if (response.data.error) {
          alert(response.data.error)
        }
        const inscriptions = response.data.allInscriptions
        router.push({ name: 'validation', params: { inscriptions } })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
