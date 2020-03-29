<template>
  <div class="container--fluid">
    <v-col cols="12" sm="12" md="4" offset-md="4" offset-sm="0">
      <h1>To get started, please fill out the form</h1>
      <v-form
        class="d-flex flex-column mt-10"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="emptyRules"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          class="mt-10"
          color="primary"
          @click="validate"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-col>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      valid: true,
      password: null,
      email: '',
      emptyRules: [
        v => !!v || 'Field is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),

    methods: {
      async validate () {
        const isValid = this.$refs.form.validate()

        if (isValid) {
          try {
            const user = await this.$store.dispatch('LOG_IN', {
              email: this.email,
              password: this.password
            })

            this.$router.push(`/profile/${user.id}`)
          } catch(err) {
            console.error('Invalid login')
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
