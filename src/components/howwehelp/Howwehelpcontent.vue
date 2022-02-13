<template>
  <v-container>
  
    <v-row justify="left">
      <v-col cols="12" sm="8" md="2">
  
        <v-card class="mx-auto" outlined color="transparent">
          <v-card-text>
  
            <p class="text-h2 text--primary font-weight-bold">
              How We Help
            </p>
  
            <p class="line"></p>
            
            <div class="text--primary">
              We help you in leveraging your business performance through these 7 services
            </div>
          
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="8" md="10" align="left" justify="center">
        
        <v-container >
          <v-row>
            <v-col class="d-flex justify-space-around flex-wrap">
              <v-card width="400" height="150" rounded="0" outlined color="transparent" v-for="(item, index) in wehelp" :key="index" router :to="'/Howwehelpsatu/'+item.link">
                <v-col class="overfloww d-flex">
                  <v-avatar style="border: 1 solid blue">
                    {{ index+1 }}
                  </v-avatar>
                <v-col class="pa-md-1 mx-lg-3">
                  <h4>{{ item.judul }}</h4>
                  <p>{{ item.rincian }}</p>
                </v-col>
                </v-col>
              </v-card>
            </v-col>
          </v-row> 
        </v-container>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
    alignments: ["center"],
    wehelp:[
        {
            link: 'business-process-assessment',
            judul: 'Business Process Assessment',
            rincian: 'Dalam proses ini tim kami akan melakukan penilaian secara komprehensif terhadap kondisi perusahaan anda yang saat ini. ',
        },
        {
            link: 'marketing-assessment',
            judul: 'Marketing Assessment',
            rincian: 'Proses assessment ini didasari oleh kebutuhan untuk menlihat potensi dan bottleneck yang terjadi dalam kegiatan pemasaran produk atau jasa. ',
        },
        {
            link: 'business-excellence',
            judul: 'Business Excellence',
            rincian: 'Hasil dari business process assessment berupa analisa mendalam mengenai hal-hal yang menjadi concern client.',
        },
        {
            link: 'technology-based-solution',
            judul: 'Technology Based Solution',
            rincian: 'Penggunaan teknologi dalam pengolahan data, informasi dan automatisasi dalam kegiatan berbisnis menjadi inti dari perubahan ini. ',
        },
        {
            link: 'marketing-solution',
            judul: 'Marketing Solution',
            rincian: 'Hasil dari marketing assessment berupa analisa mendalam mengenai hal-hal yang menjadi fokus perhatian para client. ',
        },
        {
            link: 'merger-and-acquisition',
            judul: 'Merger and Acquisition',
            rincian: 'Mengembangkan perusahaan dengan diversifikasi bisnis dan penggabungan dengan perusahaan lain merupakan salah satu cara terbaik untuk tetap relevan.',
        },
        {
            link: 'associate-partnership',
            judul: 'Associate Partnership',
            rincian: 'Kami membuka ruang seluas-luasnya untuk anda dan perusahaan menjadi bagian dalam associate partnership. ',
        }
    ],
  }),
  mounted () {
    document.getElementbyId().scroll = true
  }
};
</script>