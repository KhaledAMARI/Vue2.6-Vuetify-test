import AuthService from '../../services/AuthService'

export default {
  props: {
    inscriptions: { type: Array, required: true }
  },
  data () {
    return {
      code: '',
      message: {},
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'LastName', value: 'lastname' },
        { text: 'Email', value: 'email' },
        { text: 'Validated', value: 'validated' },
        { text: 'Actions', value: 'actions' }
      ]
    }
  },
  methods: {
    async validate (item) {
      try {
        await AuthService.validateInscription(item.email)
        // update inscription
        this.inscriptions.map(inscription => {
          if (inscription.email === item.email) {
            inscription.validated = true
          }
        })
        alert('We sent you a validation mail please check your InBox')
      } catch (error) {
        alert(error.message)
      }
    },
    async sendToken (item) {
      try {
        await AuthService.sendToken(item.email)
        alert('We sent you a token to your mail address please check your InBox')
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
