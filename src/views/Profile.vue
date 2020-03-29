<template>
  <div class="container--fluid">
    <v-col cols="12" sm="12" md="4" offset-md="4" offset-sm="0" v-if="model">
      <v-form
        class="mt-10"
        ref="form"
        lazy-validation
      >
        <v-text-field
          v-model="model.name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="model.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="model.businessType"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Business Type"
          required
        ></v-select>

        <v-text-field
          v-model="model.businessName"
          :rules="nameRules"
          label="Business Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="model.address.address"
          :rules="nameRules"
          label="Business Address"
          required
        ></v-text-field>

        <v-text-field
          type="number"
          v-model="model.address.zipCode"
          :rules="nameRules"
          label="Business ZipCode"
          required
        ></v-text-field>

        <v-text-field
          type="text"
          v-model="model.phoneNum"
          :rules="nameRules"
          label="Business Phone Number"
          required
        ></v-text-field>

        <div class="text-center">
          <img :src="processImg(model.logo)" style="max-height: 150px">
        </div>
        <v-file-input label="Upload Business Logo" outlined dense @change="onFileChange" accept="image/*"></v-file-input>

        <span class="font-weight-light">Office Hours:</span>
        <div class="d-flex flex-row">
          <v-select
            style="width: 3rem;"
            v-model="model.opHours['open']"
            :items="opHoursItems"
            :rules="[v => !!v || 'Hour is required']"
            label="Open Hour (AM)"
            required
          ></v-select>
          <v-select
            class="ml-10"
            style="width: 3rem;"
            v-model="model.opHours['close']"
            :items="opHoursItems"
            :rules="[v => !!v || 'Hour is required']"
            label="Closing Hour (PM)"
            required
          ></v-select>
        </div>
        <v-switch
          v-model="model.active"
          :label="`Is Open: ${model.active.toString()}`"
        ></v-switch>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4 mt-10 float-right"
          @click="validate"
        >
          Update
        </v-btn>
      </v-form>
    </v-col>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { processImg } from '@/utils/domUtils'

  export default {
    name: "Profile",
    props: ['email'],
    computed: {
      ...mapGetters(['user'])
    },
    data: () => ({
      model: null,
      img: null,
      valid: true,
      nameRules: [
        v => !!v || 'Field is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Restaurant',
        'Other'
      ],
      opHoursItems: Array.from({length:12},(v,k)=>k+1)
    }),
    async created() {
      await this.$store.dispatch('GET_USER', this.email)
      this.model = this.user
      console.log('%c this.model', 'background: red; color: white;', this.model)
    },
    methods: {
      processImg: processImg,
      render() {
        console.log('%c this.user', 'background: red; color: white;', this.user)
        this.img = 'data:image/jpeg;base64,' + btoa(this.user.logo.data);
      },
      onFileChange(File) {
        if (File) {
          const reader = new FileReader()
          reader.readAsBinaryString(File)

          reader.onload = e => {
            this.model.logo = e.target.result
          }
        }
      },
      async validate() {
        const isValid = this.$refs.form.validate()

        if (isValid) {
          await this.$store.dispatch('UPDATE_USER', this.model)
        }
      }
    }
  }
</script>

<style scoped>

</style>
