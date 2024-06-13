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
      <div class="text-h3 font-weight-light pb-8 text-center">
        Receitas
      </div>

      <div>
        <v-img
          style="height: 450px;"
          src="https://nutricaodesafras.com.br/wp-content/uploads/2024/02/plantio-de-hortalicas.jpg"
          cover
          class="my-auto ml-4"
        >
        </v-img>

        <div>
          <v-divider class="mb-8 mt-8"><span class="font-weight-bold">ESCOLHA SUA RECEITA</span></v-divider>
          
          <div class="text-subtitle-2 font-weight-light pb-8 text-center">
            NAVEGUE POR CATEGORIA
          </div>

          <div>
            <v-row justify="space-around">
              <v-col
                v-for="(category, key) in items.type.category"
                :key="key"
                cols="12"
                md="4"
                >
                <div
                class="cursor-pointer"
                @click="navigateToCategories(category)"
                >
                  <v-img
                    style="height: 200px;"
                    :src="category.linkImg"
                    cover
                    class="my-auto"
                  >
                  </v-img>
                  
                  <div class="text-subtitle-1 mb-2 text-center">
                    <span>{{ key }}</span>
                  </div>
                </div>
              </v-col>
            </v-row>
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
      items: {
        "type": {
          "category": {
            "Entradas": {
              "name": "Entradas",
              "linkImg": "https://blog.atau.com.br/wp-content/uploads/2019/03/opcoes-de-entrada-restaurante.jpg",
              "receitas": [
                {
                  "name": "Queijo Brie na Air Fryer",
                  "imgLink": "https://i.panelinha.com.br/i1/bk-2392-ayu1139-blog.webp",
                  "description": "Uh lala! O queijo mais famoso da Europa ganhou várias camadas de sabor ao se deparar com a AirFryer da Rita Lobo. Em pouco minutinhos, o brie francês fica mais cremoso por dentro e com a casca dourada por fora. Além de ervas frescas e mel, figos frescos acompanham pra deixar a tábua de aperitivos ainda mais vistosa.",
                  "ingredient": [
                    "1 queijo brie",
                    "1/4 de colher de azeite",
                    "1 colher de Mel",
                    "1/4 de colher de pimenta"
                  ],
                  "preparo": {
                    "1": "Com a faca de legumes, faça cortes paralelos e transversais, a cada 1,5 cm, na peça de queijo sem chegar até o fim. Com cuidado para não quebrar a peça, dê uma leve abridinha no queijo com as mãos — assim ele absorve melhor o sabor do mel, do tomilho e da pimenta.",
                    "2": "Preaqueça a AirFryer da linha Electrolux por Rita Lobo a 160 ºC e programe para assar por 10 minutos.",
                    "3": "Coloque o queijo numa tigela pequena ou pratinho (que possa assar na AirFryer), polvilhe a pimenta calabresa, o tomilho debulhado e regue com o azeite e o mel.",
                    "4": "Coloque a tigela no cesto da AirFryer e preste atenção ao tempo: se o queijo brie estiver mais maduro (mais próximo da data de validade), o miolo vai ser mais macio e em 5 minutos estará no ponto, derretendo. Caso contrário (queijo mais novo e fresco), o miolo vai estar mais firme; então, deixe o queijo brie assar por cerca de 8 minutos, para ficar com o miolo macio e aquecido — os queijos mais novos não chegam a derreter na AirFryer; evite deixar assar por muito tempo, pois o queijo pode ressecar.",
                    "5": "Sirva a seguir com pães, castanhas, frutas frescas e secas."
                  },
                  "time": "Pá-Pum",
                  "serve": "4 Porcoes"
                },
                {
                  "name": "Milho com manteiga", 
                  "imgLink": "https://i.panelinha.com.br/i1/bk-9071-blog-milho-verde-na-airfryer.webp",
                  "ingredient": [
                    "1 espiga de milho-verde",
                    "1 colher de manteiga",
                    "1/2 colher de sal",
                    "primenta-do-reino moida"
                  ],
                  "preparo": {
                    "1": "Descarte a palha e o cabelo do milho e lave bem as espigas sob água corrente. Seque cada espiga com um pano de prato.",
                    "2": "Lave, seque e pique fino a salsinha. Descasque e rale o dente de alho. Numa tigela pequena, coloque a manteiga, a salsinha e o alho. Tempere com o sal e pimenta e misture bem para formar uma pastinha.",
                    "3": "Corte 3 retângulos de papel-alumínio um pouco maiores que as espigas de milho — cada espiga vai ser embalada separadamente para assar na AirFryer, e é isso que vai deixar o milho temperado e úmido.",
                    "4": "Coloque uma espiga de milho no centro de um pedaço de papel-alumínio (com o lado brilhante para cima), meça 1 colher (sopa) da manteiga temperada e espalhe sobre toda a superfície do milho. Embale formando uma trouxinha bem justa — é importante fechar bem para que a manteiga não vaze. Repita o processo com o restante das espigas.",
                    "5": "Preaqueça a AirFryer da linha Electrolux por Rita Lobo a 200 ºC e programe para assar por 30 minutos.",
                    "6": "Coloque as espigas de milho no cesto, uma ao lado da outra, e deixe assar — não precisa virar na metade do tempo.",
                    "7": "Com uma pinça, transfira as espigas para um prato e desembale com cuidado para não se queimar. Sirva a seguir com a manteiga derretida que sobrar na trouxinha.",  
                  },
                  "time": "Pá-Pum",
                  "serve": "3 Porcoes"
                }
              ]
            },
            "Principais": {
              "linkImg": "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27698/culinaria-mineira-cpt.jpg",
              "receitas": [
                {
                  "name": "Hamburguer na Air Fryer",
                  "ingredient": [
                    "180 g de acem moido",
                    "azeite",
                    "sal moido",
                    "pimenta-do-reino moida"
                  ],
                },
                {
                  "name": "Macarrao gratinado",
                  "ingredient": [
                    "1/2 xicara de queijo mimolette ralado",
                    "3 xicaras de leite gelado",
                    "2 colhers de manteiga",
                    "1/4 de xicara de farinha de trigo",
                    "1/2 colher de sal",
                    "pimenta-do-reino moida"
                  ],
                }
              ]
            },
            "Carnes": {
              "linkImg": "https://marettimo.com.br/blog/wp-content/uploads/2023/09/bife-suculento-carne-rara-medio-com-especiarias-e-legumes-grelhados-1-2048x1365.jpg",
              "receitas": [
                {
                  "name": "Costelinha Assada",
                  "ingredient": [
                    "1 costela de porco em peça",
                    "4 dentes de alho",
                    "1 colher sal",
                    "raspas de laranja baía"
                  ],
                },
                {
                  "name": "",
                  "ingredient": "",
                }
              ]
            },
            "saladas": {
              "linkImg": "https://www.juliatto.com.br/wp-content/uploads/2022/09/dicas-de-saladas-para-o-almoco.jpg",
              "receitas": [
                {
                  "name": "",
                  "ingredient": "",
                },
                {
                  "name": "",
                  "ingredient": "",
                }
              ]
            },
            "Bebidas": {
              "linkImg": "https://www.djapa.com.br/wp-content/uploads/2023/03/drinks.jpg",
              "receitas": [
                {
                  "name": "",
                  "ingredient": "",
                },
                {
                  "name": "",
                  "ingredient": "",
                }
              ]
            },
            "Sopas": {
              "linkImg": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2021/02/como-fazer-sopa-de-legumes-historia-do-prato-receitas-deliciosas.jpg.webp",
              "receitas": [
                {
                  "name": "",
                  "ingredient": "",
                },
                {
                  "name": "",
                  "ingredient": "",
                }
              ]
            }
          }
        }
      }
    }
  },
  methods: {
    navigateToCategories(category) {
      const categoryString = JSON.stringify(category);
      this.$router.push({ path: '/categorias', query: { categoryString } });
    }
  }
}
</script>

<style>
</style>