<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title><router-link to="/">
        <v-img :src="require('../assets/logoscaleup.jpg')" contain height="80" width="150"/></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu open-on-hover offset-y transition="slide-x-transition" bottom centered >
          <template v-slot:activator="{ on, attrs }" >
            <v-btn plain text v-bind="attrs" v-on="on" class="overfloww text-capitalize"><router-link to="/" style="text-decoration: none; color: inherit;">
              Industries</router-link>
            </v-btn>
          </template>
        <v-list outlined elevation="0">
          <v-row class="mb-0 mt-0">
            <v-col class="mx-auto">
              <v-img :src="iconTemp" width="225" height="300">
                <p class="white--text" style="background: rgba(0,0,0,.5); color: white;"> {{ titleIcon }} </p>
              </v-img>
            </v-col>
            <v-col>
              <v-card class="mx-auto" height="275" width="900" outlined color="transparent" >
                <v-col class="column_wrapper" height="275" width="900" outlined color="transparent">
                    <v-list-item v-for="(item, index) in services" :key="index" router :to="'/industries'+item.link">
                      <v-list-item-action>
                        <v-list-item-title  @mouseover="setIconTemp(item.avatar, item.title)">{{ item.title }}</v-list-item-title>
                      </v-list-item-action>
                    </v-list-item>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-list>
        </v-menu>
          <v-btn plain text class="text-capitalize"><router-link to="/businesshealth" style="text-decoration: none; color: inherit;" >Business Health Scanning</router-link></v-btn>
          <v-btn plain text class="text-capitalize"><router-link to="/howwehelp" style="text-decoration: none; color: inherit;" >How We Help</router-link></v-btn>
          <v-btn plain text class="text-capitalize"><router-link to="/insights" style="text-decoration: none; color: inherit;" >Insight</router-link></v-btn>
          <v-btn plain text class="text-capitalize"><router-link to="/about" style="text-decoration: none; color: inherit;" >About</router-link></v-btn>
          <v-btn plain text class="text-capitalize"><router-link to="/careers" style="text-decoration: none; color: inherit;" >Career</router-link></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-menu open-on-hover offset-y transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
          <v-icon>mdi-earth</v-icon> ID
          </v-btn>
        </template>
        <v-list height="137" width="230" outlined elevation="0" class="rounded-md elevation-0">
          <v-container>
            <v-radio-group column class="mt-1 mb-0">
              <v-radio label="English (EN)" value="radio-1"></v-radio>
              <p class="linebh"></p>
              <v-radio label="Bahasa (ID)" value="radio-2"></v-radio>
            </v-radio-group>
          </v-container>
        </v-list>
      </v-menu>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title plain text class="text-capitalize"><router-link to="/businesshealth" style="text-decoration: none; color: inherit;" >Business Health Scanning</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title plain text class="text-capitalize"><router-link to="/howwehelp" style="text-decoration: none; color: inherit;" >How We Help</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title plain text class="text-capitalize"><router-link to="/insights" style="text-decoration: none; color: inherit;" >Insight</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title plain text class="text-capitalize"><router-link to="/about" style="text-decoration: none; color: inherit;" >About</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title plain text class="text-capitalize"><router-link to="/careers" style="text-decoration: none; color: inherit;" >Career</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    sheet: false,
    activate: true,
    theme: 1,
    mini: true,
    iconTemp: require('@/assets/detil/industries.png'),
    titleIcon: '',
    services: [
      {
        avatar: 'Picture1.png',
        title: "Agribusiness",
        link: "/agribusiness",
      },
      {
        avatar: 'manufaktur.png',
        title: "Manufacture",
        link: "/manufacture",
      },
      {
        avatar: 'Picture2.png',
        title: "Customer Products",
        link: "/customer-products",
      },
      {
        avatar: 'finansial.png',
        title: "Financial Services",
        link: "/financial-services",
      },
      {
        avatar: 'forestry.png',
        title: 'Forest Product, Paper and Packing',
        link: "/forest-product-paper-and-packing",
      },
      {
        avatar: 'infras.png',
        title: "Infrastructure And Construction",
        link: "/infrastructure-and-construction",
      },
      {
        avatar: 'mediaand.png',
        title: "Media And Entertainment",
        link: "/media-and-entertainment",
      },
      {
        avatar: 'energymining.png',
        title: "Energy And Mining",
        link: "/energy-and-mining",
      },
      {
        avatar: 'retail.png',
        title: "Retail",
        link: "/retail",
      },
      {
        avatar: 'techinfo.png',
        title: "Technology And Telecomunications",
        link: "/technology-and-telecomunications",
      },
      {
        avatar: 'transport.png',
        title: "Transportation And Logistic",
        link: "/transportation-and-logistic",
      },
      {
        avatar: 'Picture3.png',
        title: "Renewable Energy",
        link: "/renewable-energy",
      },
      {
        avatar: 'chemical.png',
        title: "Chemical Industry",
        link: "/chemical-industry",
      },
      {
        avatar: 'health.png',
        title: "Health",
        link: "/health",
      },
    ],
  }),
  methods: {
    setIconTemp (icon, title)  {
      if(icon == ''  || icon == null || icon == undefined) {
        this.iconTemp = '../assets/detil/industri.png'
      } else {
        this.iconTemp = require('../assets/detil/'+icon)
        this.titleIcon = title
      }
      console.log(this.iconTemp)
    
    },
   
  }
};
</script>

<style>
.column_wrapper {
  max-height: 100%;
  display: flex;
  flex-flow: column wrap;
}

.linebh {
  border-bottom: 2px solid #000;
  width: 100%;
}

</style>