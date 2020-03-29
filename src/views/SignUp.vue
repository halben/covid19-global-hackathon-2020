<template>
  <div class="container--fluid">
    <v-col cols="12" sm="12" md="4" offset-md="4" offset-sm="0">
      <h1>To get started, please fill out the form</h1>
      <v-form
        class="mt-10"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :rules="emptyRules"
          label="Name"
          required
        ></v-text-field>

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
          color="primary"
          class="mr-4 mt-10 float-right"
          @click="validate"
        >
          Create Account
        </v-btn>
      </v-form>
    </v-col>
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: "SignUp",
    data: () => ({
      valid: true,
      name: '',
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
          this.id = uuidv4()

          await this.$store.dispatch('CREATE_USER', {
            name: this.name,
            email: this.email,
            password: this.password,
            createdAt: Date.now(),
            id: this.id
          })

          this.$router.push(`/profile/${this.id}`)
        }
      },
    },
  }
</script>

<style scoped>

</style>
