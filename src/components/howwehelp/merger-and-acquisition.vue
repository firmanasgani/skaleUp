<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <v-row align="center" justify="center" no-gutters style="height: 400px">
        <v-col class="text-center">
          <v-card flat>
            <v-img class="white--text align-center rounded-0 elevation-0" height="400px" width="100%" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-container>
            <v-card-title>
            <h1> Merger And Acquisition</h1>
            </v-card-title>
           
            </v-container>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-container>
        <v-row align="center" justify="center" no-gutters style="height: 140%">
          <v-col class="text-left">
            <v-card class="mx-auto rounded-0 mb-16 mt-16" width="65%" height="100%" flat>
              <v-card-text style="text-align: justify" >
              merupakan salah satu cara terbaik untuk tetap relevan. Pertanyaan terpenting dalam merger dan akuisisi bukan mengenai deal or no deal tapi bagaimana caranya agar proses tersebut dapat memberikan keuntungan yang stabil dan berkelanjutan. Untuk memastikan hal tersebut terjadi, maka kami dapat membantu anda merumuskan tujuan dan strategi serta langka-langkah yang harus dilakukan sebelum dan sesudah proses merger dan akuisisi. <br /><br />Tim ahli kami dapat membantu anda dalam:<ul><li>Merumuskan tujuan dan strategi yang perlu dipersiapkan dan dikembangkan oleh tim merger dan akuisisi perusahaan agar dapat meningkatkan peluang kesuksesan dengan proses yang sama</li><li>Melakukan due diligence dan assessment berbasis data dan fakta yang terukur sehingga menghindari perusahaan dari kesepakatan yang tidak sesuai harapan, menemukan celah opportunity dan sinergi yang tepat serta mempersiapkan proses integrasi jauh sebelum penandatanganan kesepakatan</li><li>Menentukan nilai maksimum dari akuisisi perusahaan dengan pendekatan integrasi yang teruji di lapangan sehingga mengurangi dan mengantisipasi berbagai risiko yang dapat melemahkan sinergi kesepakatan </li><li>Memaksimalkan nilai hasil dari joint ventures dan aliansi dari proses merger dan akuisisi</li></ul>

              </v-card-text>
              
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        <Howwehelpcontent/>
      <!-- <v-container class="mt-16">
        <v-row align="center" justify="center">
        <p class="display-2 font-weight-bold">Client Result</p>
        </v-row>
        <v-row align="center" justify="center">
        <p class="lineh"></p>
        </v-row><br><br>
          <v-col class="d-flex">
            <v-row align="center" justify="center" no-gutters >
            <v-col v-for="n in 3" :key="n" md="3">
            <v-card flat class="mr-16">
            <p class="display-4 font-weight-bold text-center">123+</p>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.</p>
            </v-card>
            </v-col>
          </v-row>
          </v-col>
      </v-container> -->
        <Insight/>
        
      </v-main>
    </v-slide-x-transition>
    <Banner/>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';
import Howwehelpcontent from './Howwehelpcontent';
import Insight from '../Insight';

export default {
  name: 'App',

  components: {
    Header,
    Howwehelpcontent,
    Insight,
    Banner,
    Footer,
  },

  data() {
    return{
    }  
  }
};
</script>

<style>
.videos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.lineh {
  border-bottom: 10px solid #4291f0;
  width: 5%;
}
</style>