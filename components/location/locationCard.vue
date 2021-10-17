<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <nuxt-link :to="'/locations/'+locationDetails.id">
          <v-list-item-title class="text-h6">
            Location: {{ locationDetails.location }}
          </v-list-item-title>
        </nuxt-link>
        <v-list-item-subtitle class="text-h7 my-1">
          Region: {{ locationDetails.region }}
        </v-list-item-subtitle>
        <v-list-item-subtitle class="my-1">
          Location Clicks: {{ locationDetails.locationClicks }}
        </v-list-item-subtitle>
        <v-list-item-subtitle class="my-1">
          Location Impressions: {{ locationDetails.locationImpressions }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'LocationCard',
  props: {
    locationDetails: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
