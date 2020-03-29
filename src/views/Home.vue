<template>
  <div class="container--fluid">
    <v-col cols="12" sm="6" md="3" class="mt-10">
      <label>Enter Zip Code here</label>
      <v-text-field
        label="Solo"
        placeholder="Zip Code"
        solo
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="6" class="mt-10">
      <list-view :items="allBus"></list-view>
    </v-col>
  </div>
</template>

<script>

import ListView from "@/components/ListView";
export default {
  name: 'Home',
  components: { ListView },
  data: () => ({
    allBus: []
  }),
  async created() {
    const data = await this.$store.dispatch('GET_ALL_BUS')
    this.allBus = data
  }
}
</script>
