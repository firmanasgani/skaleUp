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
                      <h1> {{ title }} </h1>
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
                  <v-card-text class="body-1" style="text-align: justify;" v-html="content">

                  </v-card-text><br>
                  <v-container fill-height fluid style="width:755px">
                    <v-img class="white--text align-end rounded-xl" height="500px" width="755px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                  </v-container>

                  <v-container class="mt-16">
                    <v-row align="center" justify="center">
                      <p class="display-2 font-weight-bold">Associate Partner</p>
                    </v-row>
                    <v-row align="center" justify="center">
                      <p class="lineh"></p>
                    </v-row>

                    <v-row align="center" justify="center" width="10%" height="10%">
                        <v-img class="align-end rounded" style="width:1; height:1" :src="imagepartner"></v-img>
                    </v-row>
                    
                    <v-row align="center" justify="center">
                      <v-col class="d-flex justify-space-around mt-16 mb-16">
                        <v-card width="350" height="100%" flat>
                          <v-img height="55px" width="250px" src="https://s3-alpha-sig.figma.com/img/487c/a0f9/5743f83411ca9b5f7e35b67e4bb696b3?Expires=1638748800&Signature=ViW76zeffBlUv2~Mjqdle7rNvC1vxxnxeohH8C6qKEklEK57up2b5zFT5z3B1IqkbvVTIK5BHI-QZHFZVewVOX-amEAm6HwTy3a9aTicGSOlzb8eI1DUCbzUZX0-11H4mEeVVCxYVwSfGLp2bXdRfhGB4xAr8q8vTcqq78iTIj-UoC9Ej5YwQOo7m4VnhtnqznUtwymk8tLccSI0hyZPzrHSClBt7WvL9-jc4FtYAfI~~fTCvl1OkrVwJE1NNvstStX6nS~lHZNF9Jn4rbe0z3O3Os6LGop9BRFV-SoypsEgbRbFPBxucTUIEKVD7mJ5b4oSFgMBLFxxC7i3cBVr4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></v-img>
                        </v-card>
                        
                        <v-card width="350" height="100%" flat>
                          <v-img height="55px" width="250px" src="https://s3-alpha-sig.figma.com/img/487c/a0f9/5743f83411ca9b5f7e35b67e4bb696b3?Expires=1638748800&Signature=ViW76zeffBlUv2~Mjqdle7rNvC1vxxnxeohH8C6qKEklEK57up2b5zFT5z3B1IqkbvVTIK5BHI-QZHFZVewVOX-amEAm6HwTy3a9aTicGSOlzb8eI1DUCbzUZX0-11H4mEeVVCxYVwSfGLp2bXdRfhGB4xAr8q8vTcqq78iTIj-UoC9Ej5YwQOo7m4VnhtnqznUtwymk8tLccSI0hyZPzrHSClBt7WvL9-jc4FtYAfI~~fTCvl1OkrVwJE1NNvstStX6nS~lHZNF9Jn4rbe0z3O3Os6LGop9BRFV-SoypsEgbRbFPBxucTUIEKVD7mJ5b4oSFgMBLFxxC7i3cBVr4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></v-img>
                        </v-card>
                        
                        <v-card width="350" height="100%" flat>
                          <v-img height="55px" width="250px" src="https://s3-alpha-sig.figma.com/img/487c/a0f9/5743f83411ca9b5f7e35b67e4bb696b3?Expires=1638748800&Signature=ViW76zeffBlUv2~Mjqdle7rNvC1vxxnxeohH8C6qKEklEK57up2b5zFT5z3B1IqkbvVTIK5BHI-QZHFZVewVOX-amEAm6HwTy3a9aTicGSOlzb8eI1DUCbzUZX0-11H4mEeVVCxYVwSfGLp2bXdRfhGB4xAr8q8vTcqq78iTIj-UoC9Ej5YwQOo7m4VnhtnqznUtwymk8tLccSI0hyZPzrHSClBt7WvL9-jc4FtYAfI~~fTCvl1OkrVwJE1NNvstStX6nS~lHZNF9Jn4rbe0z3O3Os6LGop9BRFV-SoypsEgbRbFPBxucTUIEKVD7mJ5b4oSFgMBLFxxC7i3cBVr4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></v-img>
                        </v-card>
                      </v-col>
                      
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
                                  <v-card class="mb-3 mt-3" width="235" height="130" rounded="xl" outlined v-for="(item, index) in clientlogo" :key="index" router :to="item.link">
                                    <v-col class="text-center">
                                      <v-avatar>
                                        <v-icon>mdi-camera</v-icon>
                                      </v-avatar>
                                      <v-col>
                                    
                                        <h4>{{ item.judul }}</h4>
                                      </v-col>
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
      params: this.$route.params.industri,
       title: '',
        imagepartner: '',
        n: 1,
      content: '',
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
          text: '',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],

      clientlogo:[
        {
            link: 'howwehelpsatu',
            judul: 'Client Logo 1',
        },
        {
            judul: 'Client Logo 2',
        },
        {
            judul: 'Client Logo 3',
        },
        {
            judul: 'Client Logo 4',
        },
        {
            judul: 'Client Logo 5',
        },
        {
            judul: 'Client Logo 6',
        },

      ],
    }
  },
  mounted(){
    const params = this.params;

    if(params == 'agribusiness'){
      this.title = 'Agribusiness'
      this.items[2].text = 'Agribusiness';
      this.content = 'Agrikultur telah ada dan berkembang sejak awal kehidupan bermasyarakat terbentuk. Hal ini pula yang mendorong bisnis dalam bidang pertanian menjadi tidak lekang oleh waktu. Dengan semakin berkembangnya teknologi di era disruptif ini, agribisnis juga harus mengikuti transformasi tersebut agar tetap relevan dengan kebutuhan pasar dan keberlangsungan perusahaan. Kami didukung oleh mitra yang terpercaya dalam bidang ini mampu membantu perusahaan agribisnis anda untuk berkembang dan berinovasi menggunakan teknologi yang dapat diaplikasikan secara langsung di lapangan. Tim agrikultur kami berpengalaman mulai dari pemilihan bibit yang sesuai dengan kondisi lapangan, penerapan metode pembiakkan hingga metode meningkatkan pertumbuhan panen yang konsisten.';
      this.imagepartner = require('@/assets/partner/swasembada.png');

    }else if(params == 'manufacture'){
      this.title = 'Manufacture';
      this.items[2].text = 'manufacture';
      this.content = 'Revolusi industry 4.0 telah membawa perubahan besar pada dunia manufaktur dimana tenaga-tenaga konvensional perlahan digantikan oleh IoT (Internet of Things). Penggunaan AI (artificial intelligence) dan Machine Learning dalam mengolah data dan rujukan pengambilan keputusan juga berpengaruh dalam kesuksesan perusahaan. Hal ini tentu membantu perusahaan tidak hanya dalam hal efisiensi operational cost namun juga memangkas waktu yng dibutuhkan selama proses produksi.Namun, penggunaan teknologi tanpa perubahan mindset karyawan dan manajemen akan menjadi boomerang tersendiri untuk perusahaan. Oleh karena itu dibutuhkan assessment atau penilaian terlebih dahulu terhadap kebutuhan dan kondisi perusahaan sebelum menentukan sistem dan teknologi yang sesuai. Bersama tim ahli, kami melakukan assessment secara komprehensif mulai dari manajerial, proses produksi hingga supply chain. Dengan menganalisa potensi kekuatan dan kekurangan perusahaan, kami dapat menentukan elemen-elemen krusial yang dapata meningkatkan performa perusahaan manufaktur.Kami menggunakan pendekatan 4S dalam melakukan perubahan performa perusahaan, yaitu: Scanning, Structuring, Sending dan Scaling Up. Dimana dalam setiap tahapan memiliki benchmark dan goal yang jelas untuk menigkatkan produktivitas perusahaan.'


    }else if(params == 'customer-products'){
      this.title = 'Customer Products';
      this.items[2].text = 'Customer Products';
      this.content = 'Perusahaan yang bergerak di bidang consumer products telah mengalami berbagai dinamika bisnis yang serba naik turun. Namun Pandemi global yang terjadi membawa perubahan besar pada perilaku konsumen, rantai suplai barang dan tingkat kompetisi antar perusahaan. Para pelaku bisnis dalam bidang consumer goods harus dapat menitikberatkan aktivitas perusahaan pada inovasi-inovasi yang sesuai dengan keadaan terbaru selama dan pasca pandemi.Terlepas dari segala tantangan yang ada, consumer products masih menjadi salah satu bisnis yang stabil karena jangkauannya yang berkaitan erat dengan kebutuhan hidup konsumen sehari-hari. Kami dapat membantu perusahaan dalam bidang ini untuk melakukan efektivitas dan efisiensi perusahaan dalam proses bisnis yang berjalan. Serta melakukan analisa pasar yang sesuai untuk keberlangsungan inovasi produk terbaru. Menciptakan strategi perusahaan yang sesuai untuk merubah tantangan menjadi peluang.'
      this.imagepartner = require('@/assets/partner/clove.png');

    }else if(params == 'financial-services'){
      this.title = 'Finansial Services';
      this.items[2].text = 'Financial Services';
      this.content = 'Digital banking, Peer to Peer Landing dan digital investing telah menjadi game changer dalam dunia keuangan. Layanan jasa keuangan digital yang kian diminati beberapa pelaku usaha seharusnya tidak hanya memperhatikan dari sisi teknologi, namun juga dari kebutuhan dan kemampuan pasar untuk menggunakan dan mengaplikasikan layanan tersebut dalam transaksi harian.  Kami membantu dalam menetukan product market fit hingga meningkatkan customer loyalty hingga mengubah data menjadi alat decision maker yang tepat untuk aplikasi fintech.'

    }else if(params == 'forest-product-paper-and-packing'){
      this.title = 'Forest Product, Paper, and Packing';
      this.items[2].text = 'Forest Product, Paper, and Packing';
      this.content = 'Digitalisasi telah membawa perubahan dan peningkatan performa yang signifikan dalam hampir setiap sektor industri. Namun hal ini justru mendisrupsi sektor pulp and paper hingga penurunan permintaan dari industri koran, majalah hingga perkantoran. Di bidang kemasan juga ditutunt untuk menghadirkan kemasan yang eco-friendly dan terbuat dari bahan-bahan recycle. Kami membantu perusahaan dalam bidang kehutanan, kertas dan kemasan, termasuk sub sektornya seperti: tissue, graphic paper, biochemical, wood products, dalam menentukan goal yang jelas dan mengeksekusinya dalam serangkaian tahapan. Kami berfokus pada strategi manajemen, cost reduction serta mencari potensi dilakukannya automasi dan digitalisasi.'

    }else if(params == 'infrastructure-and-construction'){
      this.title = 'Infrastructure and Construction';
      this.items[2].text = 'Infrastructure and Construction';
      this.content = 'Menuju Indonesia emas 2045, pemerintah mendorong pertumbuhan pembangunan infrastruktur yang massif di berbagai daerah. Hal ini berdampak pada peningkatan peluang sektor usaha infrastructure, construction and building products. Jika peningkatan permintaan proyek  tidak diimbangi dengan sistem manajerial, tata kelola keuangan dan sumber daya manusia yang proper, tentu akan menjadi bom waktu untuk perusahaan dikemudian hari.Tim kami dapat membantu perusahaan untuk beradaptasi dengan perubahan dan dinamika yang serba cepat. Terlepas apakah perusaahan anda adalah produsen atau distributor bahan bangunan dan konstruksi yang ingin memahami tren penggunaan material, penetrasi pasar atau perusahaan teknik dan pengadaan yang dalam sektor konstruksi jalan raya dan jalan raya, tim ahli kami akan membantu meningkatkan kinerja perusahaan anda kearah yang tidak pernah anda bayangkan.'

    }else if(params == 'media-and-entertainment'){
      this.title = 'Media and Entertainment';
      this.items[2].text = 'Media and Entertainment';
      this.content = 'Perubahan yang terjadi pada sektor usaha media dan hiburan bukanlah suatu fenomena yang baru. Hal ini sangat normal terjadi pada sektor usaha ini dikarenakan kebutuhan customer yang menginginkan lebih banyak pilihan ragam, personalisasi dan experience yang berbeda dari sebelumnya. Terlepas dari semua dinamikanya, teknologi digital juga turut serta merubah proses produksi, distribusi, komsunsi hingga monetisasi produks-produk media dan hiburan.Pertumbuhan eSport dan konten hiburan digital lainnya juga mengalami peningkatan yang pesat dari tahun ke tahun. Potensi pasar dari kedua bidang tersebut sangat menjanjikan banyak untuk skala domestik maupun global. Namun jika suatu produk diluncurkan tanpa adanya research market dan customer experience baenchmarking terlebih dahulu maka akan mendatangkan kerugian besar bagi perusahaan.Kami membantu merumuskan metode dan Langkah-langka yang tepat dalam pengumpulan ide hingga analisa pasar sebelum dilakukan tahap design dan produksi lebih lanjut. Sehingga perusahaan dapat menciptakan blueprint produk yang akan berpotensi menghasilkan keuntungan saat dilepas ke pasaran.'

    }else if(params == 'energy-and-mining'){
      this.title = 'Energy and Mining';
      this.items[2].text = 'Energy and Mining';
      this.content = 'Sektor enrgi dan pertambangan mempunyai tanggung jawab besar untuk menjaga kredibilitas dan akuntabilitas di hadapan para investor, pemerintahan dan masyarakat publik. Dalam pelaksanaan operasi di lapangan perusahaan juga dituntut untuk memperhatikan Langkah-langkah yang mampu mendukung gerakan decarbonisasi sesuai dengan SDGs (Sustainable Development Goals). Tim ahli kami berpengalaman dan teruji dalam meningkatkankan efektivitas dan efisiensi cost dari kegiatan pertambangan. Mulai dari optimalisasi MA (mechanical availability), PA (physical availability) hingga UA (utilization availability) melalui assessment yang dilakukan guna melihat bottleneck tiap proses. Meningkatkan produktivitas alat berat dan karyawan juga diperlukan untuk menjadi efisien dan efektivitas kegiatan operasi pertambangan. Tim kami juga berpengalaman dalam optimalisasi penggunaan fuel yang diselaraskan dengan infrastruktur jalan tambang sehingga dapat menekan cost yang timbul dari bahan bakar.'
  }else if(params == 'retail'){
    this.title = 'Retail';
    this.items[2].params = 'Retail';
    this.content = 'Omnichannel merupakan salah satu pembawa perubahan yang signifikan dalam dunia retail and wholesale. Fenomena ini menuntut sektor retail untuk bergerak cepat memenuhi ekspektasi pasar dan menyesuaikan diri dengan perubahan lainnya seperti: disrupsi teknologi digital, ekspansi channel, model bisnis baru yang menuntut pertumbuhan profit yang berkesinambungan. Dan hal-hal tersebut terjadi jauh sebelum pandemi COVID19.Pembaharuan tools and methods untuk memenuhi pola konsumsi dan transaksi “New Normal” menjadi urgensi yang harus dilakukan oleh para retailers. Fokus ditekankan pada kenyamanan dan pengalaman berbelanja yang menarik, promosi dan keuntungan khusus bagi para konsumen loyal serta B2B target sebagai sumber profit yang stabil. Tim kami dapat menbantu anda melakukan menyusun strategi dalam: <ul><li> Membangun omnichannel baik konvensional maupun digital</li><li> 	Menentukan optimasi harga produk yang terbaik</li><li>Cost reduction</li><li>	Meningkatkan performa advanced analytic dalam operasi, supply chain dan customer journey.</li><li>Memberikan kenyamanan dan personalisasi berbelanja untuk memenuhi kebutuhan customer </li></ul>'

  }else if(params == 'technology-and-telecomunications'){
    this.title = 'Technology and Telecomunications';
    this.items[2].text = 'Technology and Telecomunications';
    this.content = 'Di era disrupsi 4.0 seperti saat ini, perusahaan-perusahaan dalam berbagai sektor mulai bergerak dengan kecepatan yang sangat mengagumkan. Lantas bagaimana dengan perusahaan teknologi dan telekomunikasi? Perusahaan-perusahaan yang menjadi pionir dalam disrupsi ini tentunya dituntut untuk agile dan resilience berkali lipat lebih cepat. Inovasi dapat mejadi dua mata pisau yang sama tajamnya berupa peluang emas dan ancaman berbahaya bagi perusahaan ICT. Tim kami dapat membantu pimpinan perusahaan dalam menyusun rencana akuisisi, mempersingkat proses research and development, meningkatkan efektivitas tenaga penjualan, memperkuat sistem cybersecurity dan cost optimization. Kami membantu perusahaan yang berkinerja kurang memuaskan cara merombak struktur modal, dan kami mengakselerasi para pemain baru tentang bagaimana cara meningkatkan organisasi mereka untuk meningkatkan pertumbuhan perusahaan. Telekomunikasi telah menjadi support system yang utama seiring bertambahnya fenomena pekerjaan yang dilakukan dari jarak jauh (remote work) seperti video conferencing antar benua dan berkembangnya ekonomi digital. Tim kami membantu perusahan untuk:<ul><li>Menyederhanakan produk dan proses layanan sehingga customer</li><li>Membuat keputusan yang strategis dalam layanan nirkabel, seluler dan lainnya</li><li>Menentukan investasi yang bijak dalam pengembangan infrastruktur yang bertujuan meningkatkan customer experience</li><li>Membangun budaya tim yang inovatif, resilience terhadap perubahan masa depan dan mengedepankan keberagaman</li></ul>'

  }else if(params == 'transportation-and-logistic'){
    this.title = 'Transportation and Logistic';
    this.items[2].text = 'Transportation and Logistic';
    this.content = 'Sektor transportasi dan logistik merupakan salah satu sektor usaha yang mengalami perubahan signifikan dikarenakan pandemi COVID19. Dimana mobilisasi manusia menjadi berkurang, sementara pengiriman barang mengalami peningkatan yang cukup pesat sejalannya dengan pola konsumsi yang baru. Jika perusahaan anda bergerak di bidang ekpedisi, pos, pengiriman barang, perusahaan truk, penyedia logistik pihak ketiga, kereta api, operator pelabuhan, pengirim dan distributor laut, sistem angkutan massal, dan perusahaan transportasi lainnya, kami dapat membantu anda bertansformasi ke level yang lebih tinggi. Tim kami dapat menyusun strategi jangka panjang yang akan merubah sistem dan bisnis proses yang rumit menjadi lebih sederhana dengan insight-insight dan trend teknologi yang akan berkembang di bidang trasportasi dan logistic.'

  }else if(params == 'renewable-energy'){
    this.title = 'Renewable Energy';
    this.items[2].text = 'Renewable Energy';
    this.content = 'Sejalan dengan digalakkannnya salah satu dari 17 poin SDGs (Sustainable Development Goals) 2030 mengenai energi bersih dan terjangkau (affordable and clean energy), telah bermunculan berbagai jenis perusahaan yang bergerak di bidang energi terbarukan. Perusahaan yang bergerak di bidang ini mempunyai tekanan yang cukup besar baik dalam permintaan yang mulai meningkat, regulasi yang berubah hingga bertambahnya desakan dari perubahan iklim. Terlepas dari segala tantangan yang ada perusahaan energi terbarukan menjadi titik harapan warga dunia dalam menciptakan masa depan planet ini sehingga setiap inovasi yang diciptakan akan menjadi sorotan.Tim ahli kami dapat membantu anda meningkatkan setiap aspek dari operasi di lapangan. Kami akan bekerja dengan anda untuk menyusun strategi pertumbuhan yang terbaik, meningkatkan pengalaman pelanggan, menyusun strategi remodeling operasi perusahaan dalam rangka meningkatkan performa operasi, menggali kemampuan dan potensi tim anda hingga fokus pada tujuan dekarbonisasi. Tim konsultan energi kami dapat membantu anda mengaplikasikan teknologi baru dan menerapkan strategi big data analysis yang akan menempatkan anda di garis depan revolusi digital.'


  }else if(params == 'chemical-industry'){
    this.title = 'Chemical Industry';
    this.items[2].text = 'Chemical Industry';
    this.content = 'tidak akan berhenti dalam waktu dekat. Untuk memimpin di bidang ini, perusahaan anda harus dapat bergerak dengan gesit dan tangguh terhadap berbagai perubahan. Anda membutuhkan business advisor yang mempunyai kapabilitas dan kredibilitas yang mumpuni. Baik Anda sedang mempertimbangkan merger atau transformasi digital, atau hanya ingin mengurangi biaya dan meningkatkan kinerja, tim kami dapat memandu Anda menuju strategi yang unggul.Jika perusahaan anda bergerak di bidang petrochemicals, industri biochemicals and biomaterials, bahan kimia organik dan anorganik, industry polimer and plastik, bahan kimia khusus serta bahan kimia pertanian, maka tim kami akan memastikan bahwa seluruh organisasi anda selaras dengan strategi yang telah dicanangkan sehingga memberikan hasil, tidak hanya untuk saat ini namun berkelanjutan hingga masa mendatang. Dari rantai pasokan hingga pengadaan, kami akan membantu Anda menata ulang operasi Anda dengan cara yang menggabungkan alat digital terbaru serta membentuk tim yang resilience dan agile.';
    
  }else if(params == 'health'){
    this.title = 'Health';
    this.items[2].text = 'Health';
    this.content =  'Industri Kesehatan selalu menghadapi kompleksitas baru yang berkaitan dengan dinamika pasar, regulasi pemerintah dan global serta ekspektasi konsumen yang meningkat. Keahlian tim konsultan kesehatan kami dibangun di atas pemahaman terperinci dari setiap stakeholder di dunia kesehatan, mulai dari dokter, pasien hingga farmasi sebagai produsen obat-obatan. Wawasan lintas disiplin kami dapat membantu perusahaan anda mendorong inovasi, mengurangi biaya, mengoptimalkan teknologi digital, dan mencapai nilai maksimum yang berkelanjutan. Kami beroperasi sebagai one stop solution dengan keahlian di bidang farmasi, teknologi medis, customer kesehatan, dan penyedia layanan kesehatan, menghadirkan pengalaman yang beragam dan mendalam ke setiap aktivitas di dalamnya.'
  
  }else{
    this.title = 'Not found',
    this.items[2].text = 'Not found';
    this.content = 'Industry that you selected is not found';

  }
}
}
</script>
