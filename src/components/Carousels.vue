<template>
  <v-carousel cycle height="800" hide-delimiter-background show-arrows-on-hover hide-delimiters :show-arrows="false" v-model="currentIndex">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.featured_image" reverse-transition="fade-transition" transition="fade-transition">
      <v-container>
        <v-row class="d-flex align-center mb-0 white--text" align="center" justify="center" no-gutters style="height: 800px">
          <v-col>
          <v-card-text>
          <h3>{{ item.datePosted }}</h3><br>
            <p class="text-h2 font-weight-bold">{{ item.title }}
            </p><br>
            <h2 class="alignleft"><router-link to="/insights" style="text-decoration: none; color: inherit;"><br>
                Learn More->
                </router-link></h2>
          </v-card-text><br><br><br><br><br><br><br><br>
          <v-container class="hidden-xs-only">
            <v-col class="d-flex align-center">
              <v-card class="transparent mx-auto elevation-0" width="250" height="100" @click="currentIndex = 0">
                <router-link to="" class="white--text body-2" style="text-decoration: none; color: inherit;"><br>
                {{ itemSatu }}<br><br><br>
                </router-link><br>
                <v-progress-linear v-model="value" :buffer-value="bufferValue" color="#4291F0" height="6"></v-progress-linear>
              </v-card>
              <v-card class="transparent mx-auto elevation-0" width="250" height="100" @click="currentIndex = 1">
                <router-link to="" class="white--text body-2" style="text-decoration: none; color: inherit;"><br>
                {{ itemDua }}<br><br><br>
                </router-link><br>
                <v-progress-linear v-model="value" :buffer-value="bufferValue" color="#4291F0" height="6"></v-progress-linear>
              </v-card>
              <v-card class="transparent mx-auto elevation-0" width="250" height="100" @click="currentIndex = 2">
                <router-link to="" class="white--text body-2" style="text-decoration: none; color: inherit;"><br>
                {{ itemTiga }}<br><br><br>
                </router-link><br>
                <v-progress-linear v-model="value" :buffer-value="bufferValue" color="#4291F0" height="6"></v-progress-linear>
              </v-card>
              <v-card class="transparent mx-auto elevation-0" width="250" height="100" @click="currentIndex = 3">
                <router-link to="" class="white--text body-2" style="text-decoration: none; color: inherit;"><br>
                {{ itemEmpat }}<br><br><br>
                </router-link><br>
                <v-progress-linear v-model="value" :buffer-value="bufferValue" color="#4291F0" height="6"></v-progress-linear>
              </v-card>
            </v-col>
          </v-container>
          <v-container class="hidden-sm-and-up">
            <v-col class="d-flex align-center">
              <v-card class="transparent mx-auto elevation-0" width="250" height="100" @click="currentIndex = 0">
                <router-link to="" class="white--text body-2" style="text-decoration: none; color: inherit;"><br>
                JUDUL ARTIKEL<br><br><br>
                </router-link><br>
                <v-progress-linear class="hidden-sm-and-up" v-model="value" :buffer-value="bufferValue" color="#4291F0" height="6"></v-progress-linear>
              </v-card>
            </v-col>
          </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
  data() {
    return {
        value: 0,
        bufferValue: 100,
        interval: 0,
        currentIndex: 0,
        items:[],
        itemSatu: '',
        itemDua: '',
        itemTiga: '',
        itemEmpat: '',
    };
  },
  mounted () {
      fetch('https://admin.skaleupbusiness.com/recent').then(async response => {
        const data = await response.json();
        this.items = data;
        this.itemSatu = data[0].title;
        this.itemDua = data[1].title;
        this.itemTiga = data[2].title;
        this.itemEmpat = data[3].title;
      })
      this.startBuffer()
    },

methods: {
      startBuffer () {
        clearInterval(this.interval)
          this.interval = setInterval(() => {
          this.value += Math.random() * 0.5
          this.bufferValue += Math.random() * 1
        }, 14.5)
      },
    },
};
</script>

<!-- 
  {
    src: require("..assets/image")
    tittle: "Bla Bla Bla"
  }
 -->
 
