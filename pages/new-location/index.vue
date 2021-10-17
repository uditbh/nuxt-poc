<template>
  <v-col cols="8">
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
            />
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="idLocation.region"
              label="Region"
              outlined
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
            />
          </v-col>
          <v-btn
            class="mr-4"
            @click="submit(idLocation)"
          >
            submit
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-col>
</template>

<script>

export default {
  data () {
    return {
      idLocation: {
        location: '',
        region: '',
        locationClicks: null,
        locationImpressions: null
      }
    }
  },
  methods: {
    submit (idLocation) {
      this.$store.dispatch('addLocation', idLocation).then(() => {
        this.$router.push('/locations')
      })
    }
  }
}
</script>

<style scoped>

</style>
