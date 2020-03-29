<template>
  <div class="container--fluid">
    <img :src="img">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Profile",
    props: ['email'],
    computed: {
      ...mapGetters(['user'])
    },
    data: () => ({
      img: null
    }),
    async created() {
      await this.$store.dispatch('GET_USER', this.email)
      this.render()
    },
    methods: {
      render() {
        this.img = 'data:image/jpeg;base64,' + btoa(this.user.logo.data);
      }
    }
  }
</script>

<style scoped>

</style>
