<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <v-card class="mx-auto mb-16" outlined color="transparent">
                <a :href="'/Careers/careersatu/'+id" class="text-decoration-none"><v-icon>mdi-arrow-left</v-icon> Back to career detail</a>
                <v-card-text><br><br>
                <v-col align="center" justify="center">
                <p class="text-h4 text--primary font-weight-bold">Apply as {{ title }}</p>
                <p class="linecr"></p><br>
                </v-col>
                <v-form>
                <v-container>
                    <v-row>
                    <v-col cols="12" sm="12">
                    <p class="font-weight-bold">Full Name</p>
                    <v-text-field :rules="nameRules" v-model="form.fullname" outlined style="width: 100%" :value="form.fullname" ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                    <p class="font-weight-bold">Email</p>
                    <v-text-field :rules="emailRules" v-model="form.email" label="Email" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                    <p class="font-weight-bold">Contact Number</p>
                    <v-text-field v-model="form.nohp" label="e.g. +62 1234567890" outlined></v-text-field>
                    </v-col>
                      <v-col>
                      <v-card class="d-flex" flat outlined style="border-color: #D2D2D2">
                      <v-col cols="12" md="6" >
                      <p class="font-weight-bold">Resume</p>
                      <p>( 5 MB max in PDF Format)</p>
                      </v-col>
                      <v-col cols="12" md="6">
                      <v-btn class="primary--text"  color="#4291F0" :loading="isSelecting" @click="onButtonClick" width="192" height="48" outlined style="border-color: #4291f0">Upload</v-btn>
                      <input ref="uploader"  class="d-none" type="file" accept="application/pdf" @change="onFileChanged">
                      {{ selectedFile.name }}
                     </v-col>
                     </v-card>
                     </v-col>
                    </v-row>
                </v-container>
                </v-form>
                </v-card-text>
              <p class="linecrb"></p><br>
            <v-row>
            <v-col cols="12" md="8">
            <p class="primary--text">Share this vacancy:</p>
            <v-btn  v-for="icon in icons" :key="icon" class="mx-1" primary icon color="#4291F0" width="36" height="36" outlined style="border-color: #4291f0" >
              <v-icon size="25px">
                {{ icon }}
              </v-icon>
            </v-btn>
            </v-col>

            <v-col cols="12" md="2" class="white--text align-center" align="center" justify="center" >
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn width="192" height="52" class="white--text"  
            color="#4291F0"
            v-bind="attrs"
            v-on="on"
          >Apply Now</v-btn>
        </template>
        <template v-slot:default="dialog">
          
  <v-col align="center" justify="center" class="white">
  <v-card flat style="width:300px; height:300px;" color="#BFDCFF" rounded="xl" class=" align-center justify-center">
                <v-img class="rounded-xl" lazy-src="https://picsum.photos/id/11/10/6" height="100%" width="100%" :src="require('./animation/career.gif')" align-center></v-img>
                </v-card>
            <v-card-text class="text-center">
              <h1>Application sent!</h1><br>
             <p>You've completed your application for <br>{{ title }}</p>
            </v-card-text>
            <v-card-actions class="justify-end">
              <router-link to="/" style="text-decoration: none; color: inherit;">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn></router-link>
            </v-card-actions>
            </v-col>
        </template>
      </v-dialog>
    </v-col>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      </v-main>
    </v-slide-x-transition>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
export default {
    
    components: {
    Header,
    Footer,
},
  data(){
    return{
      id: this.$route.params.id,
      selectedFile: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 255 || 'Name must be less than 10 characters'
      ],
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      isSelecting: false,
      rules: [
        value => !value || value.size < 5000000 || 'File size should be less than 5 MB!',
      ],
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-link",
      ],
      reveal: false,
      alignments: ["center"],
      title: '',
      form: {
        fullname: '',
        email: '',
        nohp: '',
        resume: '',
      },
    }
  },mounted(){
    fetch('https://admin.skaleupbusiness.com/getDetail/'+this.id).then(async response => {
      const data = await response.json();
      this.title = data.data[0].title;
    })

  },
  computed: {
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
    }
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
        console.log(this.form.fullname)
        console.log(this.form.email)
        console.log(this.form.nohp)
        console.log(this.form.resume)
        console.log(Event.target.files[0].name);
        axios.post('https://admin.skaleupbusiness.com/appy-careers', this.form).then(response => 
        {
          this.form.fullname = response.data;
          this.form.email = '';
          this.form.nohp = '';
          this.form.resume = '';
          this.reveal = true;
        });
      }, { once: true })
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]

      // do something
    },
   
  }


};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.roundedbh {
  border-radius: 25px;
}
.linecr {
  border-bottom: 5px solid #4291f0;
  width: 10%;
}
.linecrb {
  border-bottom: 2px solid #D1D1D1;
  width: 100%;
}
</style>