<template>
  <v-app-bar
    app
    :height="105"
  >
    <div
      style="width: 100%;"
      class="d-flex flex-column fill-height"
    >
      <div class="my-auto d-flex">
        <v-img
          style="height: 70px;"
          aspect-ratio="16/9"
          src="https://cdn.icon-icons.com/icons2/1151/PNG/512/1486505264-food-fork-kitchen-knife-meanns-restaurant_81404.png"
          max-width="148"
          contain
          class="my-auto ml-4"
        >
        </v-img>

        <v-divider vertical inset class="mx-4"></v-divider>
       
        <div 
          class="my-auto mr-3 pr-3 font-weight-light"
          style="font-size: 26px !important;"
        >
          Receitas Lookuz
        </div>    

        <v-spacer></v-spacer>

        <v-menu
          open-on-hover
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="my-auto ml-12"
              v-bind="attrs"
              icon
            >
              <v-icon>
                mdi-account
              </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item link @click="logoutClicked()">
              <v-list-item-title>
                Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <template v-slot:extension>
      <v-tabs
        dense
        background-color="#121212"
        :slider-size="5"
        :height="40"
        class="mt-3"
        style="border-bottom: 1px solid gray;"
      >
        <v-tab
          v-for="(menu, index) in menus"
          :key="index"
          :disabled="menu.disabled"
          :to="menu.to"
        >
          <span 
            class="white--text text-capitalize"
            style="font-weight: 400;"
          >
            {{ menu.label }}
          </span>
        </v-tab>
      </v-tabs>
    </template>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { label: "Home", to: "/receitas" },
      ],
    }
  }
};
</script>

<style scoped>

</style>