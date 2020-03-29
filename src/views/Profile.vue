<template>
  <div class="container--fluid">
    <v-col cols="12" sm="12" md="4" offset-md="4" offset-sm="0" v-if="userModel">
      <v-form
        class="mt-10"
        ref="profileForm"
        lazy-validation
      >
        <h3>Update Profile</h3>
        <v-text-field
          disabled
          :value="userModel.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="userModel.name"
          :rules="emptyRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="userModel.password"
          :rules="emptyRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4 mt-10"
          @click="validateProfile"
        >
          Update Profile
        </v-btn>
      </v-form>
    </v-col>
    <v-col cols="12" sm="12" md="4" offset-md="4" offset-sm="0">
      <h3>Update Business Info</h3>
      <v-form
        ref="busForm"
        lazy-validation>
        <v-select
          v-model="businessModel.type"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Business Type"
          required
        ></v-select>

        <v-text-field
          v-model="businessModel.name"
          :rules="emptyRules"
          label="Business Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="businessModel.location.address"
          :rules="emptyRules"
          label="Business Address"
          required
        ></v-text-field>

        <v-text-field
          type="number"
          v-model="businessModel.location.zipCode"
          :rules="emptyRules"
          label="Business ZipCode"
          required
        ></v-text-field>

        <v-text-field
          type="text"
          v-model="businessModel.phoneNum"
          :rules="emptyRules"
          label="Business Phone Number"
          required
        ></v-text-field>

        <div class="text-center">
          <img :src="processImg(businessModel.logo)" style="max-height: 150px">
        </div>
        <v-file-input label="Upload Business Logo" outlined dense @change="onFileChange" accept="image/*"></v-file-input>

        <span class="font-weight-light">Office Hours:</span>
        <div class="d-flex flex-row">
          <v-select
            style="width: 3rem;"
            v-model="businessModel.opHours['open']"
            :items="opHoursItems"
            :rules="[v => !!v || 'Hour is required']"
            label="Open Hour (AM)"
            required
          ></v-select>
          <v-select
            class="ml-10"
            style="width: 3rem;"
            v-model="businessModel.opHours['close']"
            :items="opHoursItems"
            :rules="[v => !!v || 'Hour is required']"
            label="Closing Hour (PM)"
            required
          ></v-select>
        </div>
        <v-switch
          v-model="businessModel.active"
          :label="`Is Open: ${businessModel.active.toString()}`"
        ></v-switch>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4 mt-10"
          @click="validateBus"
        >
          Update Business
        </v-btn>
      </v-form>
    </v-col>
    <v-snackbar v-model="snackbar" right>
      {{ snackbarMsg }}
    </v-snackbar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { processImg } from '@/utils/domUtils'
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: "Profile",
    props: ['id'],
    computed: {
      ...mapGetters(['user'])
    },
    data: () => ({
      snackbar: false,
      snackbarMsg: null,
      userModel: null,
      businessModel: {
        name: null,
        type: null,
        phoneNum: null,
        logo: null,
        location: {
          address: null,
          zipCode: null
        },
        opHours: {
          open: '',
          close: ''
        },
        active: false
      },
      img: null,
      valid: true,
      emptyRules: [
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
      await this.$store.dispatch('GET_USER', this.id)
      this.userModel = this.user

      const busModel = await this.$store.dispatch('GET_BUS', this.id)

      if (busModel) {
        this.businessModel = {
          ...this.businessModel,
          ...busModel
        }
      }
    },
    methods: {
      processImg: processImg,
      render() {
        this.img = 'data:image/jpeg;base64,' + btoa(this.user.logo.data);
      },
      onFileChange(File) {
        if (File) {
          const reader = new FileReader()
          reader.readAsBinaryString(File)

          reader.onload = e => {
            this.businessModel.logo = e.target.result
          }
        }
      },
      async validateProfile() {
        const isValid = this.$refs.profileForm.validate()

        if (isValid) {
          try {
            await this.$store.dispatch('UPDATE_USER', this.userModel)

            this.snackbar = true
            this.snackbarMsg = 'Profile Updated'
          } catch(err) {
            this.snackbar = true
            this.snackbarMsg = err.message || 'Could not update Profile'
          }
        }
      },
      async validateBus() {
        const isValid = this.$refs.busForm.validate()

        if (isValid) {
          try {
            if (this.businessModel.id) {
              await this.$store.dispatch('UPDATE_USER_BUS', this.businessModel)
            } else {
              await this.$store.dispatch('UPDATE_USER_BUS', {
                ...this.businessModel,
                ...{
                  id: uuidv4(),
                  userId: this.id
                }
              })
            }
            this.snackbar = true
            this.snackbarMsg = 'Business Profile Updated'
          } catch (err) {
            this.snackbar = true
            this.snackbarMsg = err.message || 'Could not update Profile'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
