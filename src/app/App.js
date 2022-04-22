import router from '../router'
export default {
  name: 'App',

  data: () => ({
    isLoggedIn: false
  }),
  created () {},
  methods: {
    disconnect () {
      this.isLoggedIn = false
      router.push('/')
    }
  }
}
