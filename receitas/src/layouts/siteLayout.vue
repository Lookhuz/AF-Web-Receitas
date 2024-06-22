<template>
  <div>
    <navbar></navbar>
    
    <v-main>
      <router-view />
    </v-main>
    
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./../components/NavBar.vue"
import Footer from "./../components/Footer.vue"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>../components/NavBar.vue../components/Footer.vue