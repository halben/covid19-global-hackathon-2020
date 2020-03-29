<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="primary"
    >
      <div class="d-flex align-center">
        <h1 @click="$router.push('/')">Opened Local Business Near Me</h1>
      </div>

      <v-spacer></v-spacer>
      <h4 class="font-weight-black" v-if="!isAuth">
        Restaurant or business owners? Click
        <router-link to="sign-up" class="black--text">here</router-link>
      </h4>
      <template v-else>
        <v-icon large class="mr-5" @click="onProfile">mdi-account-circle</v-icon>
        <v-btn @click="onLogout" outlined>log out</v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <v-spacer></v-spacer>
      <div class="caption">Created by Kou Lor &copy; {{ 2020 }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapGetters([ 'isAuth', 'user' ])
  },
  data: () => ({
    //
  }),
  methods: {
    async onLogout() {
      await this.$store.dispatch('LOG_OUT')
      this.$router.push('/')
    },
    onProfile() {
      this.$router.push(`/profile/${this.user.id}`)
    }
  }
};
</script>
