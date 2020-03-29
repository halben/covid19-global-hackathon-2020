<template>
  <div class="container--fluid">
    <v-col cols="4" class="mt-10">
      <label>Enter Zip Code</label>
      <v-text-field
        label="Solo"
        placeholder="Zip Code"
        solo
        @keyup="onZipCodeChange"
      ></v-text-field>
      <p class="title">Found <span class="headline" :style="{color: allBus.length ? 'green' : 'red'}">{{allBus.length}}</span> result{{ allBus.length > 1 ? 's' : '' }}</p>
    </v-col>
    <v-col cols="12" class="mt-10">
      <list-view :items="allBus"></list-view>
    </v-col>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import ListView from '@/components/ListView'

export default {
  name: 'Home',
  components: { ListView },
  data: () => ({
    allBus: []
  }),
  async created() {
    this.init()
  },
  methods: {
    async init() {
      const data = await this.$store.dispatch('GET_ALL_BUS')
      this.allBus = data
    },
    onZipCodeChange: debounce(async function(evt) {
      const str = evt.target.value
      const data = await this.$store.dispatch('SEARCH', str)

      if (str) {
        this.allBus = data
      } else {
        this.init()
      }

    }, 500)
  }
}
</script>
