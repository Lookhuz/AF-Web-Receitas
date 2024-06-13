<template>
  <v-row 
    no-gutters 
    class="mb-8 px-16"
  >
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
      <div v-if="receiptData">
        <div class="text-h3 font-weight-normal mb-5 text-center">
          <span id="span">{{ receiptData.name }}</span>
        </div>
        <v-img 
          style="height: 450px;" 
          :src="receiptData.imgLink" 
          cover 
          class="my-auto"
        >
        </v-img>

        <div class="text-subtitle-1 mb-2 text-center">
          <span id="span">{{ receiptData.description }}</span>
        </div>

        <v-divider class="my-8"></v-divider>

        <div class="d-flex">
          <div>
            <div class="text-h6 font-weight-bold ml-2">
              <span id="span">Ingredientes</span>
            </div>

            <v-row no-gutters>
              <v-col
                v-for="key in receiptData.ingredient" 
                :key="key"
                cols="5"
                md="6"
              >
                <div 
                  class="d-flex"
                >
                  <v-icon 
                    size="x-large" 
                    style="width: 12px; 
                    height: 12px;"
                    class="align-self-center"
                  >
                    mdi-circle-small
                  </v-icon>
      
                  <div class="text-subtitle-1">
                    <span id="span">{{ key }}</span>
                  </div>
                </div>
              </v-col>
            </v-row>
            </div>
            
            <v-spacer></v-spacer>
          </div>

          <v-divider class="my-8"></v-divider>

          <div class="d-flex">
            <div class="d-flex">
              <div class="text-subtitle-1">
                <span id="span">Tempo de preparo:</span>
              </div>
              <div class="ml-2 text-subtitle-1 font-weight-bold">
                <span id="span">{{ receiptData.time }}</span>
              </div>
            </div>
            <div class="d-flex ml-4">
              <div class="text-subtitle-1">
                <span id="span">Serve:</span>
              </div>
              <div class="ml-2 text-subtitle-1 font-weight-bold">
                <span id="span">{{ receiptData.serve }}</span>
              </div>
            </div>
          </div>
          
        <v-divider class="my-8"><span class="font-weight-bold text-h6" id="span">Modo de preparo</span></v-divider>

        <div
          v-for="(key, index) in receiptData.preparo"
          :key="key"
          class="d-flex"
        >
          <div class="ml-2 text-subtitle-1 font-weight-bold mb-4">
            <span id="span">{{ index + '.' }}</span>
          </div>
          <div class="ml-2 text-subtitle-1 font-weight-normal mb-4">
            <span id="span">{{ key }}</span>
          </div>
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
      receiptData: null
    }
  },
  methods: {
    getReceiptData() {
      const receipt = this.$route.query.receiptString;
      if (receipt) {
        this.receiptData = JSON.parse(receipt);
      } else {
        console.log('Category data is not defined');
      }
    },
  },
  mounted() {
    this.getReceiptData();
  }
}
</script>

<style scoped>
#span{
  font-family: 'MyFont';
}
</style>