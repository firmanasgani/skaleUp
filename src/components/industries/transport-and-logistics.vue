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
                
                <v-img class="white--text align-center rounded-0 elevation-0" height="400px" width="100%" src="../../assets/banner/transport.jpg">
                  <v-container>
                    <v-card-title>
                      <h1> Transportation and Logistic </h1>
                    </v-card-title>
                  
                  </v-container>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        
          <v-container>
            <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-container>
          
          <v-container>
            <v-row align="center" justify="center" no-gutters style="height: 140%">
              <v-col class="text-left">
                <v-card class="mx-auto rounded-0 mb-16" width="80%" height="100%" flat>
                  <v-card-text class="body-1" style="text-align: justify;" >
                      Sektor transportasi dan logistik merupakan salah satu sektor usaha yang mengalami perubahan signifikan dikarenakan pandemi COVID19. Dimana mobilisasi manusia menjadi berkurang, sementara pengiriman barang mengalami peningkatan yang cukup pesat sejalannya dengan pola konsumsi yang baru.<br /> Jika perusahaan anda bergerak di bidang ekpedisi, pos, pengiriman barang, perusahaan truk, penyedia logistik pihak ketiga, kereta api, operator pelabuhan, pengirim dan distributor laut, sistem angkutan massal, dan perusahaan transportasi lainnya, kami dapat membantu anda bertansformasi ke level yang lebih tinggi. Tim kami dapat menyusun strategi jangka panjang yang akan merubah sistem dan bisnis proses yang rumit menjadi lebih sederhana dengan insight-insight dan trend teknologi yang akan berkembang di bidang trasportasi dan logistic.
                  </v-card-text><br>
                  

                  <v-container class="mt-16">
                    <!-- <v-row align="center" justify="center">
                      <p class="display-2 font-weight-bold">Associate Partner</p>
                    </v-row> -->
                    <v-row align="center" justify="center">
                      <p class="lineh"></p>
                    </v-row>

                    <!-- <v-row align="center" justify="center" width="10%" height="10%">
                        <v-img class="align-end rounded" style="width:1; height:1" :src=" require('@/assets/partner/swasembada.png')"></v-img>
                    </v-row> -->
                    
                    <v-row align="center" justify="center">
                      
                      
                      <v-container>
                          <v-row align="center" justify="center" no-gutters style="height: 100%">
                            <v-col :cols="n === 1 ? 8 : 4">
                              <v-card class="mx-auto" outlined color="transparent">
                                <v-card-text>
                                  <p class="text-h2 text--primary font-weight-bold">Our client portfolio</p>
                                  <p class="line"></p>
                                  <div class="text--primary">See how we’ve helped ambitious <br>clients achieve extraordinary<br> outcomes.</div>
                                </v-card-text>
                              </v-card>
                            </v-col>
                            
                            <v-col>
                              <v-container>
                                <v-col class="d-flex justify-space-around flex-wrap">
                                  <v-card class="mb-3 mt-3" width="235" height="fit-content" v-for="(item, index) in clientlogo" :key="index" router>
                                    <v-col class="text-center">
                                     
                                     <v-img class="align-end rounded" style="width:1; height:1" :src="item.judul"></v-img>
                                     
                                    </v-col>
                                  </v-card>
                              </v-col>
                    
                            </v-container>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
        </v-container>
        
        <Shareicon/>
      
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
import Shareicon from './Shareicon';

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Footer,
    Shareicon
  },

  data(){
    return{
        n: 1,
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Industries',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Transportation and Logistic',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],

      clientlogo:[
        {
            judul:  require('@/assets/partner/swasembada.png'),
        },
        {
            judul:  require('@/assets/partner/clove.png'),
        }

      ],
    }
  },
 
}
</script>
