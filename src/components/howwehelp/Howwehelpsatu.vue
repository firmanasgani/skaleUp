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
            <h1>{{ title }}</h1>
            </v-card-title>
            <v-card-text class="text-left">
            <p>Egestas urna facilisi</p>
            </v-card-text>
            </v-container>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-container>
        <v-row align="center" justify="center" no-gutters style="height: 140%">
          <v-col class="text-left">
            <v-card class="mx-auto rounded-0 mb-16 mt-16" width="65%" height="100%" flat>
              <v-card-text style="text-align: justify" v-html="content">
        
              </v-card-text>
              
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        <Howwehelpcontent/>
      <v-container class="mt-16">
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
      </v-container>
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
      content: '',
      title: '',
      params: this.$route.params.help,
    }  
  },
  mounted(){

    if(this.params == 'business-process-assessment'){
      this.content = 'Dalam proses ini tim kami akan melakukan penilaian secara komprehensif terhadap kondisi perusahaan anda yang saat ini. Assessment yang dilakukan meliput seluruh atau sebagian dari: performa operasional, performa finansial, performa karyawan hingga sistem manajemen. Screening ini bertujuan untuk mengevaluasi seberapa baik performa perusahaan dan menginvestigasi kendala-kendala yang menjadi penghambat kesuksesan perusahaan.Proses penilaian ini dilakukan oleh tim ahli kami yang berkompeten di bidang masing-masing sehingga mampu merumskan pain points secara cepat dan memberikan insight yang diperlukan untuk menghilangkan dan memitigasi agar kendala serupa dapat diatasi sedini mungkin.Assessment ini akan melibatkan partisipasi jajaran tim manajerial dan karyawan dalam perusahaan dalam kurun waktu yang telah disepakati tergantung pada luasnya luang lingkup proyek. Hal ini dilakukan untuk mendapatkan didapat hasil yang komprehensif dan valid dalam waktu yang relatif singkat mengenai kondisi terkini dari perusahaan anda.'
      this.title = 'Business Process Assessment'
      
    }else if(this.params == 'marketing-assessment'){
      this.title = 'Marketing Assessment'
      this.content = 'Proses assessment ini didasari oleh kebutuhan untuk menlihat potensi dan bottleneck yang terjadi dalam kegiatan pemasaran produk atau jasa. Penilainnya yang dilakukan akan melibatkan survey dan interview kepada para pelanggan, para calon pelanggan hingga pelaku bisnis dengan usaha sejenis. Hal ini dilakukan untuk mengevaluasi dan menggali insights yang dapat diterapkan pada perusahaan anda sehingga memberikan efek peningkatan kinerja marketing.Proses penilaian ini dilakukan oleh associate partner kami yang berkompeten dan berpengalaman menangani perusahaan-perusahaan nasional dan multinasional dalam hal marketing research. Hasi penilaian ini mampu menemukan pain points secara cepat dan memberikan insight yang diperlukan untuk menghilangkan dan memitigasi agar kendala serupa dapat diatasi sedini mungkin.'

    }else if(this.params == 'business-excellence'){
      this.title = 'Business Excellence'
      this.content = 'Hasil dari business process assessment berupa analisa mendalam mengenai hal-hal yang menjadi concern client. Hasil analisa tersebut juga dilengkapi dengan rekomendasi serangkaian aktivitas yang perlu dilakukan untuk menanggulangi dan memitigasi pain points yang ditemukan.Business Excellence konsep merupakan metode kami dalam meningkatkan performa perusahaan secara terakselerasi dan terstruktur. Konsep ini meliputi seluruh atau sebagian dari: performa operasional, performa finansial, performa karyawan hingga sistem manajemen.'

    }else if(this.params == 'technology-based-solution'){
      this.title = 'Technology-based Solution'
      this.content = 'Perkembangan revolusi industri 4.0 telah dimulai sejak beberapa tahun kebelakang. Penggunaan teknologi dalam pengolahan data, informasi dan automatisasi dalam kegiatan berbisnis menjadi inti dari perubahan ini. Namun, transformasi digital tanpa didasari research akan tujuan, kebutuhan serta kesiapan sumber daya perusahaan justru akan menjadi boomerang bagi perusahaan. Hal ini dikarenakan penggunaan teknologi akan mendisrupsi bisnis proses secara langsung sehingga dibutuhkan perubahan mindset dan pola kerja karyawan. Kami dapat membantu perusahaan untuk menaikkan performa bisnis dengan menggunakan solusi berbasis teknologi. Penerapan solusi tersebut tentunya akan berjalan paralel dengan persiapan mental dan pola pikir para karyawan agar perubahannya dapat dijalankan dengan baik.'

    }else if(this.params == 'marketing-solution'){
      this.title = 'Marketing Solution'
      this.content = 'Hasil dari marketing assessment berupa analisa mendalam mengenai hal-hal yang menjadi fokus perhatian para client. Dari hasil penilaian tersebut dapat diketahui aspek-aspek yang menjadi penghambat performa marketing secara komprehensif. Langkah selanjutnya adalah memberikan solusi dan rekomendasi atas hasil temuan tersebut. Tim ahli kami akan bekerjasama dengan seluruh lapisan karyawan perusahaan yang terkait untuk bersama-sama menerapkan solusi dan rekomendasi yang diberikan. Sehingga potensi kesuksesan penerapan solusi tersebut dapat dipastikan berpeluang lebih besar.Marketing solution kami dapat menjawab beberapa poin penting dalam merumuskan tujuan dan strategi pemasaran perusahaan, seperti: market target segment, market positioning, voice of customer, brand architecture dan lain sebagainya.'

    }else if(this.params == 'merger-and-acquisition'){
      this.title = 'Merger and Acquisition'
      this.content = 'merupakan salah satu cara terbaik untuk tetap relevan. Pertanyaan terpenting dalam merger dan akuisisi bukan mengenai deal or no deal tapi bagaimana caranya agar proses tersebut dapat memberikan keuntungan yang stabil dan berkelanjutan. Untuk memastikan hal tersebut terjadi, maka kami dapat membantu anda merumuskan tujuan dan strategi serta langka-langkah yang harus dilakukan sebelum dan sesudah proses merger dan akuisisi. Tim ahli kami dapat membantu anda dalam:<ul><li>Merumuskan tujuan dan strategi yang perlu dipersiapkan dan dikembangkan oleh tim merger dan akuisisi perusahaan agar dapat meningkatkan peluang kesuksesan dengan proses yang sama</li><li>Melakukan due diligence dan assessment berbasis data dan fakta yang terukur sehingga menghindari perusahaan dari kesepakatan yang tidak sesuai harapan, menemukan celah opportunity dan sinergi yang tepat serta mempersiapkan proses integrasi jauh sebelum penandatanganan kesepakatan</li><li>Menentukan nilai maksimum dari akuisisi perusahaan dengan pendekatan integrasi yang teruji di lapangan sehingga mengurangi dan mengantisipasi berbagai risiko yang dapat melemahkan sinergi kesepakatan </li><li>Memaksimalkan nilai hasil dari joint ventures dan aliansi dari proses merger dan akuisisi</li></ul>'

    }else if(this.params == 'associate-partnership'){
      this.title = 'Associate Partnership'
      this.content = 'Kami membuka ruang seluas-luasnya untuk anda dan perusahaan menjadi bagian dalam associate partnership. Melalui associate partnership ini diharapkan akan terbentuk ekosistem dan kolaborasi antar pelaku yang bergerak dalam bidang jasa atau produk untuk saling bekerjasama. Hasilnya tidak hanya untuk menyelesaikan permasalahan salah satu pihak perusahaan tetapi juga mampu menghasilkan produk dan jasa baru yang bernilai guna lebih sehingga mendatangkan revenue stream yang baru.'
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