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
      <div v-if="categoryData" class="text-h3 font-weight-light pb-8 text-center">
        {{ categoryData.name }}
      </div>

      <div>
        <div v-if="categoryData">
            <v-row justify="space-around">
              <v-col
                v-for="key in categoryData.receitas"
                :key="key"
                cols="12"
                md="4"
                >
                <div
                class="cursor-pointer"
                @click="navigateToReceipt(key)"
                >
                  <v-img
                    style="height: 200px;"
                    :src="key.imgLink"
                    cover
                    class="my-auto"
                  >
                  </v-img>
                  
                  <div class="text-subtitle-1 mb-2 text-center">
                    <span>{{ key.name }}</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
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
  data() {
    return {
      categoryData: null
    }
  },
  methods: {
    getCategoryData() {
      const category = this.$route.query.categoryString;
      if (category) {
        this.categoryData = JSON.parse(category);
      } else {
        console.log('Category data is not defined');
      }
    },
    navigateToReceipt(receipt) {
      const receiptString = JSON.stringify(receipt);
      this.$router.push({ path: '/receita', query: { receiptString } });
    }
  },
  mounted () {
    this.getCategoryData();
  }
}
</script>


<style>
</style>