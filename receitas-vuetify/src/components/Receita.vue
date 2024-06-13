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
          {{ receiptData.name }}
        </div>
        <v-img 
          style="height: 450px;" 
          :src="receiptData.imgLink" 
          cover 
          class="my-auto"
        >
        </v-img>

        <div class="text-subtitle-1 mb-2 text-center">
          {{ receiptData.description }}
        </div>

        <v-divider class="my-8"></v-divider>

        <div class="d-flex">
          <div>
            <div class="text-h6 font-weight-bold ml-2">
              Ingredientes
            </div>
  
            <div 
              v-for="key in receiptData.ingredient" 
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
                {{ key }}
              </div>
            </div>
          </div>

          <v-spacer></v-spacer>
          <div>
            <div class="d-flex">
              <div class="text-subtitle-1">
                Tempo de preparo:
              </div>
              <div class="ml-2 text-subtitle-1 font-weight-bold">
                {{ receiptData.time }}
              </div>
            </div>
            <div class="d-flex">
              <div class="text-subtitle-1">
                Serve:
              </div>
              <div class="ml-2 text-subtitle-1 font-weight-bold">
                {{ receiptData.serve }}
              </div>
            </div>
          </div>
        </div>

        <v-divider class="my-8"><span class="font-weight-bold text-h6">Modo de preparo</span></v-divider>

        <div
          v-for="(key, index) in receiptData.preparo"
          :key="key"
          class="d-flex"
        >
          <div class="ml-2 text-subtitle-1 font-weight-bold mb-4">
            {{ index + '.' }}
          </div>
          <div class="ml-2 text-subtitle-1 font-weight-normal mb-4">
            {{ key }}
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

<style></style>