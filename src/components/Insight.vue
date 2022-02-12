<template>
  <v-container>
    <v-row class="d-flex align-center" align="center" justify="center" no-gutters>
      <v-col>
        <v-card-text>
          <br /><br /><br /><br /><br />
          <p class="text-h2 text--primary font-weight-bold">Our latest insights</p>
          <p class="lineins"></p>
          <div class="text--primary">
            <h4 class="alignleft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tortor lectus eu massa.
            </h4>
             <router-link to="/insights" style="text-decoration: none; color: inherit;"><br>
                See all insight->
                </router-link>
          </div>
        </v-card-text>
        </v-col>
      </v-row>
          <v-row class="d-flex align-center" align="center" justify="center" no-gutters>
        <v-col class="hidden-xs-only">
        <VueSlickCarousel v-bind="settings">
          <v-col v-for="n in items" :key="n.Id" cols="12" md="12">
            <v-card class="mx-auto elevation-0" rounded="xl">
              <v-img class="white--text align-end rounded-xl" height="200px" width="400px" :src="n.featured_image"></v-img>
              <v-card-subtitle class="pb-0"> {{ n.title }}</v-card-subtitle>
              <v-card-title>{{ n.title }}</v-card-title>
              <v-card-text class="text--primary">
              
              </v-card-text>
              <v-card-actions>
               <router-link :to="'/insights/insightone/'+n.Id" >Read more-></router-link> 
              </v-card-actions>
            </v-card>
          </v-col>
        </VueSlickCarousel>
        </v-col>
        <v-col class="hidden-sm-and-up">
        <VueSlickCarousel v-bind="settingss">
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="12">
            <v-card class="mx-auto elevation-0" rounded="xl">
              <v-img class="white--text align-end rounded-xl" height="200px" :src="item.featured_image"></v-img>
              <v-card-subtitle class="pb-0"> Content Tagging</v-card-subtitle>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text class="text--primary">
                <div>{{ item.caption }}</div>
                
              </v-card-text>
              <v-card-actions>
              <router-link :to="'/insight/insightone/'+item.Id">Read more-></router-link> 
              </v-card-actions>
            </v-card>
          </v-col>
        </VueSlickCarousel>
        </v-col>
        </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data: () => ({
    reveal: false,
    items:[],
    alignments: ["center"],
    settings: {
          "dots": true,
          "infinite": true,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 2000,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true
        },
    settingss: {
          "dots": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 2000,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true
        }
     
  }),
  mounted() {
     fetch('https://admin.skaleupbusiness.com/recent').then(async response => {
        const data = await response.json();
        this.items = data;
      })
  },
};
</script>

<style>
.lineins {
  border-bottom: 10px solid #4291f0;
  width: 5%;
}

.alignleft {
  float: left;
}
.alignright {
  float: right;
}
</style>
