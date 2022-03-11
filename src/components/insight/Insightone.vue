<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
      <Header />
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <v-container>
          <v-row>
            <v-col class="text-center">
                <v-col class="fill-height align-center" align="center" justify="center" style="height: 280px"><br/><br/><br/>
                    <p class="text-h4 text--primary font-weight-bold"> {{ items[0].title }}</p>
                    <p class="lineinso"></p>
                    <v-card-subtitle >
                        <v-icon>mdi-account-outline</v-icon>By {{ items[0].author }} .
                        <v-icon>mdi-calendar</v-icon> {{ items[0].datePosted }} . 
                        <v-icon>mdi-clock-outline</v-icon> {{ timesread }}
                    </v-card-subtitle>
                    Share
                </v-col>
                <v-card class="mx-auto rounded-xl" max-width="1100" height="570">
                    <v-img class="rounded-xl" lazy-src="https://picsum.photos/id/11/10/6" width="1140" height="570" :src="items[0].featured_image" align-center></v-img>
                </v-card>
                
                <v-card class="mx-auto rounded-xl text-left" max-width="50%" flat>
                    <v-card-text v-html="items[0].content">
                    
                    </v-card-text>  
                
                </v-card>

                <v-card class="mx-auto rounded-xl text-left" max-width="50%" flat>
                  
                <v-row justify="space-around" align="center"  >
                   <h4>Tags:</h4>
  
                  <v-chip v-for="n in tag" :key="n.Id" label outlined>{{ n.tag_id }} </v-chip>
                
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <Shareicon />
        <Insight />
      </v-main>
    </v-slide-x-transition>
    <Banner />
    <Footer />
  </v-app>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import Insight from "../Insight";
import Shareicon from "../industries/Shareicon";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Banner,
    Insight,
    Shareicon,
  },
  data(){
    return{
      id: this.$route.params.id,
      items: [],
      tags: [], 
      timesread: 0,

    }
  },
  mounted(){
    fetch('https://admin.skaleupbusiness.com/articles/'+this.id).then(async response => {
        const data = await response.json();
        this.items = data.data;
        this.tag = data.tags;
        
        document.title = this.items[0].title;
        const words = 400;
        const textlength = data.data[0].content.length;
        console.log(this.tag);
       

        if(textlength > 1){
          let value = Math.ceil(textlength / words);
          this.timesread = value+ ' min read';
        }

       

      });
  }, methods:{
  
  }
};
</script>

<style>
.lineinso {
  border-bottom: 8px solid #4291f0;
  width: 5%;
}
</style>