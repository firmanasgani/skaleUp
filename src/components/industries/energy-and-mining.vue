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
                
                <v-img class="white--text align-center rounded-0 elevation-0" height="400px" width="100%" src="../../assets/banner/energymining.jpg">
                  <v-container>
                    <v-card-title>
                      <h1> Energy and Mining </h1>
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
                     Sektor enrgi dan pertambangan mempunyai tanggung jawab besar untuk menjaga kredibilitas dan akuntabilitas di hadapan para investor, pemerintahan dan masyarakat publik. Dalam pelaksanaan operasi di lapangan perusahaan juga dituntut untuk memperhatikan Langkah-langkah yang mampu mendukung gerakan decarbonisasi sesuai dengan SDGs (Sustainable Development Goals). <br /><br />
Tim ahli kami berpengalaman dan teruji dalam meningkatkankan efektivitas dan efisiensi cost dari kegiatan pertambangan. Mulai dari optimalisasi MA (mechanical availability), PA (physical availability) hingga UA (utilization availability) melalui assessment yang dilakukan guna melihat bottleneck tiap proses. Meningkatkan produktivitas alat berat dan karyawan juga diperlukan untuk menjadi efisien dan efektivitas kegiatan operasi pertambangan. Tim kami juga berpengalaman dalam optimalisasi penggunaan fuel yang diselaraskan dengan infrastruktur jalan tambang sehingga dapat menekan cost yang timbul dari bahan bakar.

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
          text: 'Energy and Mining',
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
