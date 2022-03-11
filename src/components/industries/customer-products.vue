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
                
                <v-img class="white--text align-center rounded-0 elevation-0" height="400px" width="100%" src="../../assets/banner/cusproduct.jpg">
                  <v-container>
                    <v-card-title>
                      <h1> Customer Products </h1>
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
                     Perusahaan yang bergerak di bidang consumer products telah mengalami berbagai dinamika bisnis yang serba naik turun. Namun Pandemi global yang terjadi membawa perubahan besar pada perilaku konsumen, rantai suplai barang dan tingkat kompetisi antar perusahaan. Para pelaku bisnis dalam bidang consumer goods harus dapat menitikberatkan aktivitas perusahaan pada inovasi-inovasi yang sesuai dengan keadaan terbaru selama dan pasca pandemi.<br /><br />Terlepas dari segala tantangan yang ada, consumer products masih menjadi salah satu bisnis yang stabil karena jangkauannya yang berkaitan erat dengan kebutuhan hidup konsumen sehari-hari. <br /><br /> Kami dapat membantu perusahaan dalam bidang ini untuk melakukan efektivitas dan efisiensi perusahaan dalam proses bisnis yang berjalan. Serta melakukan analisa pasar yang sesuai untuk keberlangsungan inovasi produk terbaru. Menciptakan strategi perusahaan yang sesuai untuk merubah tantangan menjadi peluang.
                  </v-card-text><br>
                  <!-- <v-container fill-height fluid style="width:755px">
                    <v-img class="white--text align-end rounded-xl" height="500px" width="755px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                  </v-container> -->

                  <v-container class="mt-16">
                    <v-row align="center" justify="center">
                      <p class="display-2 font-weight-bold">Associate Partner</p>
                    </v-row>
                    <v-row align="center" justify="center">
                      <p class="lineh"></p>
                    </v-row>

                    <v-row align="center" justify="center">
                        <v-img class="align-end rounded" style="max-width:200px; height:200px" :src=" require('@/assets/partner/clove.png')"></v-img>
                    </v-row>
                    
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
          text: 'Customer Products',
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
