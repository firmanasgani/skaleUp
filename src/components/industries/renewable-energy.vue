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
                
                <v-img class="white--text align-center rounded-0 elevation-0" height="400px" width="100%" src="../../assets/banner/renewable.jpg">
                  <v-container>
                    <v-card-title>
                      <h1> Renewable Energy </h1>
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
                     Sejalan dengan digalakkannnya salah satu dari 17 poin SDGs (Sustainable Development Goals) 2030 mengenai energi bersih dan terjangkau (affordable and clean energy), telah bermunculan berbagai jenis perusahaan yang bergerak di bidang energi terbarukan. Perusahaan yang bergerak di bidang ini mempunyai tekanan yang cukup besar baik dalam permintaan yang mulai meningkat, regulasi yang berubah hingga bertambahnya desakan dari perubahan iklim. Terlepas dari segala tantangan yang ada perusahaan energi terbarukan menjadi titik harapan warga dunia dalam menciptakan masa depan planet ini sehingga setiap inovasi yang diciptakan akan menjadi sorotan.<br /><br />Tim ahli kami dapat membantu anda meningkatkan setiap aspek dari operasi di lapangan. Kami akan bekerja dengan anda untuk menyusun strategi pertumbuhan yang terbaik, meningkatkan pengalaman pelanggan, menyusun strategi remodeling operasi perusahaan dalam rangka meningkatkan performa operasi, menggali kemampuan dan potensi tim anda hingga fokus pada tujuan dekarbonisasi. Tim konsultan energi kami dapat membantu anda mengaplikasikan teknologi baru dan menerapkan strategi big data analysis yang akan menempatkan anda di garis depan revolusi digital.
                  </v-card-text><br>
                  

                  <v-container class="mt-16">
                    <!-- <v-row align="center" justify="center">
                      <p class="display-2 font-weight-bold">Associate Partner</p>
                    </v-row> -->
                    <v-row align="center" justify="center">
                      <p class="lineh"></p>
                    </v-row>
<!-- 
                    <v-row align="center" justify="center" width="10%" height="10%">
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
          text: 'Renewable Energy',
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
