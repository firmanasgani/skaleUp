<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-main>
        <Banner />
    </v-main>
      <Footer/>
  </v-app>
</template>

<script>
import Footer from '../Footer';
import Banner from '../Banner';
import Header from '../Header';

document.title = 'SkaleUp Business';
export default {
  name: 'App',

  components: {
    Header,
    Banner,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
