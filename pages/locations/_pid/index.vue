<template>
  <v-row class="my-3">
    <v-col cols="12">
      <h1>Audience location for id : {{ $route.params.pid }}</h1>
    </v-col>
    <v-col v-if="noLocationFound" cols="8">
      <h3>Information not available in the database</h3>
    </v-col>
    <v-col v-else cols="8">
      <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="idLocation.location"
                label="Location"
                outlined
                readonly
              />
            </v-col>

            <v-col
              cols="12"
            >
              <v-text-field
                v-model="idLocation.region"
                label="Region"
                outlined
                readonly
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="idLocation.locationClicks"
                label="Location Clicks"
                outlined
                readonly
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="idLocation.locationImpressions"
                label="Location Impressions"
                outlined
                readonly
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      noLocationFound: false
    }
  },
  computed: {
    idLocation () {
      return this.$store.getters.loadedLocations.filter(element => element.id === parseInt(this.$route.params.pid))
    }
  },
  mounted () {
    console.log(this.idLocation)
    if (this.idLocation.length === 0) {
      this.noLocationFound = true
    }
  }
}
</script>
