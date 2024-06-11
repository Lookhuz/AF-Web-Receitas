<template>
  <div>
    <navbar></navbar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import Navbar from "./../components/NavBar.vue"

export default {
  components: {
    Navbar
  }
}
</script>