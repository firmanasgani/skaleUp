<template>
  <div class="footer">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-card-text class="mt-10">
            <v-img width="150px" :src="require('../assets/logoskaleup.png')"></v-img>
            <div class="white--text">
             We Are The one stop solution of business consultant in<br> fast-forwading your business. Get ready for scaling up your <br> business beyond
            </div><br><br><br><br><br>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :href="icon.url" target="_blank" dark icon>
              <v-icon size="24px">
                {{ icon.icons }}
              
              </v-icon>
            </v-btn>
          </v-card-text><br><br><br>
        </v-col>
        <v-col cols="12" md="4" class="white--text align-center" align="center" justify="center" >
          <div class="white--text">Join Us."</div>
          <br />
          <p class="white--text">for upcoming new event from us and other exciting news</p><br><br><br>
          <v-text-field label="E-mail" solo style="width:350px; height: 52px" class="mb-3"></v-text-field>
          <v-btn color="#4291F0" href="mailto:halo@skaleupbusiness.com?subject=Saya ingin berlangganan!"  style="width:350px; height: 52px" class="white--text ml-0 mr-0">Subscribe</v-btn>
        </v-col>
      </v-row>
      <p class="linef"></p>
      <h4 class="text-center white--text">Copyright © 2022 SkaleUp. All Right Reserved.</h4>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons:  [
      {
        icons: 'mdi-linkedin',
        url: 'https://www.linkedin.com/company/skale-up-business/'
      },{
        icons: 'mdi-instagram',
        url: 'https://www.instagram.com/skaleupwith.us/'
      },{
        icons: 'mdi-facebook',
        url: 'https://www.facebook.com/SkaleUpWithUs'
      },{
        icons: 'mdi-whatsapp',
        url: 'https://wa.me/6281333338630'
      },{
        icons: 'mdi-youtube',
        url: 'https://www.youtube.com/channel/UCMRmAlX0XT3ca9YgJQNK-Yw'
      }
    ],
  }),
};
</script>

<style>
.footer {
  background-color: #0f4d72;
}

.v-text-field {
  width: 400px;
}

.linef {
  border-bottom: 5px solid #fff;
  width: 100%;
}
</style>