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
            <h1> Marketing Solution</h1>
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
               Hasil dari marketing assessment berupa analisa mendalam mengenai hal-hal yang menjadi fokus perhatian para client. Dari hasil penilaian tersebut dapat diketahui aspek-aspek yang menjadi penghambat performa marketing secara komprehensif. Langkah selanjutnya adalah memberikan solusi dan rekomendasi atas hasil temuan tersebut. Tim ahli kami akan bekerjasama dengan seluruh lapisan karyawan perusahaan yang terkait untuk bersama-sama menerapkan solusi dan rekomendasi yang diberikan. Sehingga potensi kesuksesan penerapan solusi tersebut dapat dipastikan berpeluang lebih besar. <br /><br />
Marketing solution kami dapat menjawab beberapa poin penting dalam merumuskan tujuan dan strategi pemasaran perusahaan, seperti: market target segment, market positioning, voice of customer, brand architecture dan lain sebagainya.

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