<template>
  <v-row class="my-3">
    <v-col cols="12" justify="center" align="center">
      <form class="col-md-4">
        <v-text-field
          v-model="id"
          label="Id"
          required
        />
        <v-btn
          class="mr-4"
          @click="onLoadLoc()"
        >
          Search
        </v-btn>
        <v-btn
          class="mr-4"
          @click="$router.push('/new-location')"
        >
          Add New Location
        </v-btn>
      </form>
    </v-col>
    <v-col v-for="(item,idx) in locationList" :key="idx" cols="12" sm="8" md="4">
      <!-- <p v-if="$fetchState.pending">
        Fetching locations...
      </p>
      <p v-else-if="$fetchState.error">
        An error occurred :(
      </p> -->
      <location-card :location-details="item" />
    </v-col>
  </v-row>
</template>
<script>
import locationCard from '@/components/location/locationCard.vue'
export default {
  components: { locationCard },
  async asyncData ({ $axios }) {
    const locationList = await $axios.$get('http://localhost:3004/locations/')
    return { locationList }
  },
  data () {
    return {
      id: null
    }
  },
  methods: {
    onLoadLoc () {
      this.$router.push('/locations/' + this.id)
    }
  }
}
</script>
