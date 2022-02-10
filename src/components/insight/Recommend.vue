<template>
  <v-container>
    <v-row no-gutters align="left" justify="center" class="mt-16 mb-16">
      <v-col cols="12" sm="12" md="6">
        <v-card flat max-width="80%">
            <v-img class="white--text align-center rounded-xl" height="340px" width="660px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
            <v-card-title>Title Content goes here</v-card-title>
            <v-card-subtitle><v-icon>mdi-calendar</v-icon> Nov 21, 2021</v-card-subtitle>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.</v-card-text>
            <v-btn text color="blue accent-4"><router-link to="/insights/insightone">Read More-></router-link></v-btn>
          </v-card>
      </v-col>
      <v-col cols="12" md="6" >
        <v-list subheader>
        <h1>Recommend</h1>
        <v-list-item v-for="chat in previous" :key="chat.title">
          <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.featured_image"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="chat.title" class="mb-4 mt-2"></v-list-item-title>
            <v-list-item-subtitle><v-icon>mdi-calendar</v-icon> {{ chat.datePosted }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {

    data(){
      return{
        previous: [],
      };
    },
    mounted() {
      fetch('https://admin.skaleupbusiness.com/recent').then(async response => {
        const data = await response.json();
        this.previous = data;
      })

    }
    // data: () => ({
    //   previous: [{
    //     title: 'Title Content Goes Here',
    //     avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    //   },
    //   {
    //       avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    //       title: 'Title Content Goes Here',
    //     },
    //     {
    //       avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    //       title: 'Title Content Goes Here',
    //     },
    //     {
    //       avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    //       title: 'Title Content Goes Here',
    //     },
    //     {
    //       avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    //       title: 'Title Content Goes Here',
    //     },],
    // }),


  }
</script>
