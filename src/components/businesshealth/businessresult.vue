<template>
    <v-app>
        <v-app-bar color="white" app flat height="100" elevation="1">
            <Header/>
        </v-app-bar>
        <v-slide-x-transition>

            <v-main>
                <v-container>
                
                    <div id="businesshealth0">
          
                        <v-row align="center" justify="center" no-gutters style="height: 800px">
                            <v-col class="text-center pa-md-15 mx-lg-15"> 
                                <v-card class="mx-auto flat elevation-0" width="750" height="">
                                    <v-col>
                                        
                                        <v-row align="center" justify="center">
                                            <v-card flat style="width:300px; height:300px;" color="#BFDCFF" rounded="xl" class="d-flex align-center justify-center">
                                            <v-img class="rounded-xl" :lazy-src="lazysrc" height="100%" width="100%" :src="src" align-center></v-img>
                                            </v-card>
                                        </v-row>
                    
                                        <v-row align="center" justify="center">
                                            <v-card style="width:125px; height:125px;" :color="color" rounded="xl" class="d-flex align-center justify-center">
                                                <h1 :style="style">{{this.$route.params.id}}</h1>
                                            </v-card>
                                        </v-row>

                                    </v-col><br>
                
                                    <h2 class="font-weight-bold display-3"> {{h2}} </h2><br>
                                    <h4 class="display-1">{{ h4 }}</h4><br><br><br>
                                
                                    <router-link to="/businesshealth/finalresulttwo">
                                        <v-btn color="#4291F0" width="400" height="60" class="elevation-3 white--text">Scale up bisnis saya sekarang</v-btn>
                                    </router-link>
                                </v-card>
                            </v-col>
                        </v-row>
    
                    </div>
                </v-container>
            </v-main>
        </v-slide-x-transition>
    </v-app>
</template>

<script>

import Header from '../Header';

export default {
  name: 'App',
  
  components: {
    Header,
  },

  data(){
      return{
          total: this.$route.params.id,
          lazysrc: '',
            src: '',
            h2: '',
            h4: '',
            style: '',
            color: '',

      }
  },
mounted() {
    if(Number(this.total) > 40){
       this.lazysrc =  "https://picsum.photos/id/11/10/6";
       this.src = require('./animation/animasisatu.gif');
       this.score = Number(this.total);
       this.h2 = 'Great! Your Business is Ready for Scalling UP!';
        this.style= 'color: #4291F0; font-size: 72px;';
        this.color = '#BFDCFF';
       this.h4 = 'Bisnis anda memiliki kondisi kesehatan yang sangat bagus saat ini dan beberapa tahun mendatang.   Ini saat yang tepat Anda mempertimbangkan strategi peluang pertumbuhan bisnis untuk meningkatkan kesuksesan jangka panjang.';
   }else if(Number(this.total) >= 20 && Number(this.total) <= 40){
       this.lazysrc =  "https://picsum.photos/id/11/10/6";
       this.src = require('./animation/animasidua.gif');
       this.score = Number(this.total);
       this.h2 = 'You’re doing good, but...';
       this.color = '#CDFCD3';
        this.style= 'color: #39A748; font-size: 72px;';
       this.h4 = 'Saat ini bisnis anda menghadapi beberapa kondisi yang menghambat performanya. Hambatan ini dapat berasal dari faktor internal, seperti cash flow yang bermasalah atau performa karyawan yang menurun, maupun factor eksternal. Anda tidak tidak perlu khawatir harus memecahkan masalah-masalah tersebut sendiri. Sebaiknya segera hubungi konsultan manajemen bisnis untuk mencari tahu akar permasalahan dan menyelesaikannya.';
    }else if(Number(this.total) < 20){
         this.lazysrc =  "https://picsum.photos/id/11/10/6";
       this.src = require('./animation/animasitiga.gif');
       this.score = Number(this.total);
       this.h2 = 'Oh no.. there’s a bottleneck';
       this.color = '#FFDBDC';
        this.style= 'color: #ED1C24; font-size: 72px;';
       this.h4 = 'zona merah dimana perlu dilakukan peninjauan secara menyeluruh baik dari business flow process hingga struktur organisasi. Opsi yang dapat dipertimbangakan berdasarkan hasil peninjauan tersebut dapat berupa restrukturisasi, kemungkinan pennjulan atau divestasi dan lainnya. Anda tidak tidak perlu khawatir harus memecahkan masalah-masalah tersebut sendiri.Sebaiknya segera hubungi konsultan manajemen bisnis untuk mencari tahu akar permasalahan dan menyelesaikannya.';
    }
}

  
};
</script>
