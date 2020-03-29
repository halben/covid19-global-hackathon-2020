<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <h1>Support Local Business</h1>
      </div>

      <v-spacer></v-spacer>
      <h4 class="font-weight-light" v-if="!isAuth">
        Restaurant or business owners? Create an account
        <router-link to="sign-up">here</router-link></h4>
      <v-btn v-else @click="onLogout">log out</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapGetters([ 'isAuth' ])
  },
  data: () => ({
    //
  }),
  methods: {
    async onLogout() {
      await this.$store.dispatch('LOG_OUT')
      this.$router.push('/')
    }
  }
};
</script>
