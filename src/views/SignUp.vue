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
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Business Type"
          required
        ></v-select>

        <v-text-field
          v-model="businessName"
          :rules="nameRules"
          label="Business Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="address"
          :rules="nameRules"
          label="Business Address"
          required
        ></v-text-field>

        <v-text-field
          type="number"
          v-model="zipCode"
          :rules="nameRules"
          label="Business ZipCode"
          required
        ></v-text-field>

        <v-text-field
          type="text"
          v-model="phoneNum"
          :rules="nameRules"
          label="Business Phone Number"
          required
        ></v-text-field>

        <div class="text-center" v-if="fileBits">
          <img :src="processImg(fileBits)" style="max-height: 150px">
        </div>
        <v-file-input label="Upload Business Logo" outlined dense @change="onFileChange" accept="image/*" ></v-file-input>

        <span class="font-weight-light">Office Hours:</span>
        <div class="d-flex flex-row">
          <v-select
            style="width: 3rem;"
            v-model="opHours['open']"
            :items="opHoursItems"
            :rules="[v => !!v || 'Hour is required']"
            label="Open Hour (AM)"
            required
          ></v-select>
          <v-select
            class="ml-10"
            style="width: 3rem;"
            v-model="opHours['close']"
            :items="opHoursItems"
            :rules="[v => !!v || 'Hour is required']"
            label="Closing Hour (PM)"
            required
          ></v-select>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
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
  import { processImg } from '@/utils/domUtils'
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: "SignUp",
    data: () => ({
      valid: true,
      name: '',
      businessName: '',
      address: '',
      zipCode: '',
      phoneNum: '',
      nameRules: [
        v => !!v || 'Field is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Restaurant',
        'Other'
      ],
      opHours: {
        open: '',
        close: ''
      },
      opHoursItems: Array.from({length:12},(v,k)=>k+1),
      fileBits: null
    }),

    methods: {
      processImg: processImg,
      onFileChange(File) {
        if (File) {
          const reader = new FileReader()
          reader.readAsBinaryString(File)

          reader.onload = e => {
            let bits = e.target.result
            this.fileBits = bits
          }
        } else {
          this.fileBits = null
        }
      },
      async validate () {
        const isValid = this.$refs.form.validate()

        if (isValid) {
          this.id = uuidv4()

          await this.$store.dispatch('CREATE_USER', {
            name: this.name,
            businessName: this.businessName,
            email: this.email,
            businessType: this.select,
            createdAt: Date.now(),
            logo: this.fileBits,
            active: true,
            opHours: this.opHours,
            phoneNum: this.phoneNum,
            address: {
              address: this.address,
              zipCode: this.zipCode
            },
            created: Date.now(),
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
