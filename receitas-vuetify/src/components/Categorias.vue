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

    <!-- <v-col
      xs="12"
      sm="12"
      md="12"
      lg="10"
      xl="10"
      class="pt-8"
    >
      <div v-if="recipes" class="text-h3 font-weight-light pb-8 text-center">
        <span id="span">{{ categoryData.name }}</span>
      </div>

      <div>
        <div v-if="recipes">
            <v-row justify="space-around">
              <v-col
                v-for="key in categoryData.receitas"
                :key="key"
                cols="16"
                md="6"
                >
                <div
                >
                <v-img
                style="height: 300px;"
                :src="key.imgLink"
                cover
                class="my-auto cursor-pointer"
                @click="navigateToReceipt(key)"
                  ></v-img>
                  
                  <div class="d-flex">
                    <div class="text-h6 mb-2">
                      <span id="span">{{ key.name }}</span>
                    </div>
                    <v-spacer></v-spacer>
                    <v-rating
                      v-model="key.rate"
                      hover
                    ></v-rating>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
      </div>
    </v-col> -->

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
import axios from 'axios';

export default {
  data() {
    return {
      categoryData: null,
      rating: 3,
      recipes: []
    }
  },
  computed: {
    // filteredRecipe() {
    //   const categoryName = this.getCategoryFromUrl();
    //   console.log(this.recipes.find(recipe => recipe.name === categoryName))
    //   return this.recipes.find(recipe => recipe.name === categoryName);
    // }
  },
  methods: {
    getCategoryFromUrl() {
      const pathArray = window.location.pathname.split('/');
      const categoryIndex = pathArray.indexOf('categorias');
      return pathArray[categoryIndex + 1];
    },
    filteredRecipe() {
      const categoryName = this.getCategoryFromUrl();
      return this.recipes.find(recipe => recipe.name === categoryName);
    },
    navigateToReceipt(receipt) {
      const receiptString = JSON.stringify(receipt);
      this.$router.push({ path: '/receita', query: { receiptString } });
    },
    fetchCategories() {
      axios
        .get('http://localhost:8000/api/v1/categories/')
        .then(response => {
          this.recipes = JSON.parse(JSON.stringify(response.data));
          console.log(this.recipes)
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }
  },
  mounted () {
    this.fetchCategories();
    this.$nextTick(() => {
  });
  },
  watch: {
  recipes(newVal) {
    if (newVal.length > 0) {
      console.log(this.filteredRecipe());
    }
  }
}
}
</script>


<style scoped>
#span{
  font-family: 'MyFont';
}
</style>