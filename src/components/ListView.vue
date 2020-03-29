<template>
  <div class="container--fluid">
    <v-list two-line subheader>
      <template v-for="(item, index) in items">
        <v-divider v-if="index  === 0" :key="'start'+index"></v-divider>

        <v-list-item :key="item.id">
          <v-list-item-avatar size="80">
            <v-img :src="processImg(item.logo)"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="headline" v-text="item.businessName"></v-list-item-title>
            <v-list-item-subtitle v-text="item.address.address"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="item.address.zipCode"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="item.phoneNum"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon :color="item.active ? 'green' : 'red'" size="30">mdi-circle</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider :key="'end'+index"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
  import { processImg } from '@/utils/domUtils';

  export default {
    name: 'ListView',
    props: ['items', 'filterKey'],
    methods: {
      processImg: processImg
    },
    watch: {
      items(cur) {
        console.log('%c cur', 'background: red; color: white;', cur)
      }
    }
  }
</script>

<style scoped>

</style>
