<template>
  <v-row no-gutters class="mb-8 px-8">
    <v-col
      xs="0"
      sm="0"
      md="0"
      lg="1"
      xl="1"
    >
    </v-col>

    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="10"
      xl="10"
      class="pt-8"
    >
      <div class="text-h3 font-weight-light mb-10 pb-8 text-center">
        {{ category }}
      </div>  
    </v-col>

    <v-col
      xs="0"
      sm="0"
      md="0"
      lg="1"
      xl="1"
    >
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$route.query.category;
    }
  }
}
</script>
<style>
</style>