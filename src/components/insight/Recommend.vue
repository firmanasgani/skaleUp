<template>
  <v-container>
    <v-row no-gutters align="left" justify="center" class="mt-16 mb-16">
      <v-col cols="12" sm="12" md="6" v-for="n in newest" :key="n.Id">
        <v-card flat max-width="80%">
            <v-img class="white--text align-center rounded-xl" height="340px" width="660px" :src="n.featured_image"></v-img>
            <v-card-title>{{ n.title }}</v-card-title>
            <v-card-subtitle><v-icon>mdi-calendar</v-icon> {{ n.datePosted }}</v-card-subtitle>
            <v-card-text>{{ n.caption }}</v-card-text>
            <v-btn text color="blue accent-4"><router-link :to="'/insights/insightone/'+n.Id">Read More-></router-link></v-btn>
          </v-card>
      </v-col>
      <v-col cols="12" md="5" >
        <v-list subheader>
        <h1>Recommend</h1>
        <v-list-item v-for="chat in previous" :key="chat.title">
          <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.featured_image"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <router-link :to="'/insights/insightone/'+chat.Id" style="text-decoration: none; color: inherit;"><br>
                <v-list-item-title v-text="chat.title" class="mb-4 mt-2"></v-list-item-title>
              </router-link>
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
        newest: [],
      };
    },
    mounted() {
      fetch('https://admin.skaleupbusiness.com/recent').then(async response => {
        const data = await response.json();
        this.previous = data;
      });

      fetch('https://admin.skaleupbusiness.com/news').then(async response => {
        const data = await response.json();
        this.newest = data;
      });

    }
    
  }
</script>
