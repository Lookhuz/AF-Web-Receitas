<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="primary white--text text-center">
      <v-card-text>
        <h1 class="pb-2 white--text"> You can find us at</h1>
        <a target="_blank" v-bind:href="social.url" v-for="social in socials" >
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">{{ social.icon }}</v-icon>
          </v-btn>
        </a> 
      </v-card-text>

      <v-card-text class="pt-0 text-left text-md-center">
        <v-expansion-panels accordion v-model="panel" multiple>
          <v-expansion-panel v-for="(item,i) in items" :key="i" class="primary col-md-3 col-12 elevation-0 ">
            <h3 class="d-none d-md-block py-2">{{ item.name }}</h3>
            <v-expansion-panel-header class="d-md-none">{{ item.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <li v-for="tag in item.tags">
                <a target="_blank" v-bind:href="tag.url" class="white--text">{{tag.urlname}} </a>
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright 1993 - {{ new Date().getFullYear() }} 
        <!-- <a class="white--text" href="https://codepen.io/jettaz">Jettaz</a> | It is free for use -->
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  data () {
    return {
      panel: [],
      socials: [
        {name:"facebook", icon:"mdi-facebook", url:"https://codepen.io/jettaz"},
        {name:"twitter", icon:"mdi-alpha-x-box", url:"https://codepen.io/jettaz"},
        {name:"google", icon:"mdi-google", url:"https://codepen.io/jettaz"},
        {name:"linkedin", icon:"mdi-linkedin", url:"https://codepen.io/jettaz"},
        {name:"instagram", icon:"mdi-instagram", url:"https://codepen.io/jettaz"}
      ],
      items: [
        {
          name: "Product",
          tags: [
            {
              urlname: "Create Websites",
              url: "https://codepen.io/jettaz"
            },
            {
              urlname: "Secure Cloud Hosting",
              url: "https://codepen.io/jettaz"
            },
            {
              urlname: "Engage Your Audience",
              url: "https://codepen.io/jettaz"
            },
            {
              urlname: "Website Support",
              url: "https://codepen.io/jettaz"
            }
          ]
        },
        { name: "Company", 
         tags: [
           { urlname: "About", url: "https://codepen.io/jettaz" },
           { urlname: "Careers", url: "https://codepen.io/jettaz"},
           { urlname: "Support", url: "https://codepen.io/jettaz"},
           { urlname: "Pricing", url: "https://codepen.io/jettaz"},
           { urlname: "FAQ", url: "https://codepen.io/jettaz"}
         ] 
        },
        { name: "Resources", 
         tags: [
           { urlname: "Blog", url: "https://codepen.io/jettaz" },
           { urlname: "eBooks", url: "https://codepen.io/jettaz" },
           { urlname: "Whitepapers", url: "https://codepen.io/jettaz" },
           { urlname: "Comparison Guide", url: "https://codepen.io/jettaz" },
           { urlname: "Website Grader", url: "https://codepen.io/jettaz" }
         ] 
        },
        { name: "Get Help", 
         tags: [
           { urlname: "Help Center", url: "https://codepen.io/jettaz" },
           { urlname: "Contact Us", url: "https://codepen.io/jettaz" },
           { urlname: "Privacy Policy", url: "https://codepen.io/jettaz" },
           { urlname: "Terms", url: "https://codepen.io/jettaz" },
           { urlname: "Login", url: "https://codepen.io/jettaz" }
         ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>