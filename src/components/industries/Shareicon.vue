<template>
  <div>
    <v-container fill-height fluid style="width:755px">
      <p class="linesi"></p>
      <v-row align="center" justify="center">
        <v-col>
          <v-card class="text-center" flat>
            <p class="primary--text"  >Share</p>
            <v-btn  v-for="icon in icons" :key="icon" :href="icon.url" class="mx-4" primary icon color="#4291F0" width="36" height="36" outlined style="border-color: #4291f0">
              <v-icon size="25px">
              {{ icon.icons }}
              </v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>


export default {

  data: () => ({
    reveal: false,
    alignments: ["center"],
    icons: [
     {
        icons: 'mdi-facebook',
        url: 'https://www.facebook.com/share.php?'+'u='+document.URL
      },{
        icons: 'mdi-whatsapp',
        url: 'https://wa.me/6281333338630'+'?text='+document.URL
      },{
        icons: 'mdi-twitter',
        url: 'https://twitter.com/intent/tweet?url='+document.URL
      }
    ],
  }),
  methods: {
   copylink() {
     var dummy = document.createElement('input'),
    text = document.URL;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    }
  },
};
</script>

<style>
.linesi {
  border-bottom: 1px solid #D1D1D1;
  width: 100%;
}
</style>