<template>
  <v-footer dark padless class="d-flex align-center">
    <div style="max-height: 200px; width: 100%;">
      <v-card flat tile width="100%" class="primary white--text text-center">
        <v-card-text>
          <a target="_blank" v-bind:href="social.url" v-for="social in socials" >
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="24px">{{ social.icon }}</v-icon>
            </v-btn>
          </a> 
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          Copyright ©{{ new Date().getFullYear() }} - Designed by Lookuz
        </v-card-text>
      </v-card>
    </div>
  </v-footer>
</template>

<script>

export default {
  data () {
    return {
      panel: [],
      socials: [
        {name:"facebook", icon:"mdi-facebook", url:""},
        {name:"twitter", icon:"mdi-alpha-x-box", url:""},
        {name:"google", icon:"mdi-google", url:""},
        {name:"linkedin", icon:"mdi-linkedin", url:""},
        {name:"instagram", icon:"mdi-instagram", url:""}
      ],
      items: [
        {
          name: "Product",
          tags: [
            {
              urlname: "Create Websites",
              url: ""
            },
            {
              urlname: "Secure Cloud Hosting",
              url: ""
            },
            {
              urlname: "Engage Your Audience",
              url: ""
            },
            {
              urlname: "Website Support",
              url: ""
            }
          ]
        },
        { name: "Company", 
         tags: [
           { urlname: "About", url: "" },
           { urlname: "Careers", url: ""},
           { urlname: "Support", url: ""},
           { urlname: "Pricing", url: ""},
           { urlname: "FAQ", url: ""}
         ] 
        },
        { name: "Resources", 
         tags: [
           { urlname: "Blog", url: "" },
           { urlname: "eBooks", url: "" },
           { urlname: "Whitepapers", url: "" },
           { urlname: "Comparison Guide", url: "" },
           { urlname: "Website Grader", url: "" }
         ] 
        },
        { name: "Get Help", 
         tags: [
           { urlname: "Help Center", url: "" },
           { urlname: "Contact Us", url: "" },
           { urlname: "Privacy Policy", url: "" },
           { urlname: "Terms", url: "" },
           { urlname: "Login", url: "" }
         ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>