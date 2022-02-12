<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
      <v-main>
        <Background/>
        <Content/>
      </v-main> 
      <Footer/>
  </v-app>
</template>

<script>

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/career/Background';
import Content from '../components/career/Content';

export default {
  name: 'App',

  components: {
    Header,
    Background,
    Footer,
    Content,
},

  data: () => ({
    //
  }),
};
</script>
