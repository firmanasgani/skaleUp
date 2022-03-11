<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="text-center mb-16" cols="12" sm="8" md="7">
        <v-col align="center"><br/><br/>
          <p class="text-h4 text--primary font-weight-bold">Find Your Dream Job in Skaleup!</p>
          <p class="lineinso"></p>
          <v-card-subtitle>Start finding your purpose with Skaleup. See our latest vacancies below.</v-card-subtitle>
          <v-row>
            <v-col cols="12" sm="10">
              <v-text-field v-model="search" outlined label="Search by role or keyword" prepend-inner-icon="mdi-magnify" style="width: 100%"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
             <router-link to="/Careers/careersatu"> <v-btn color="#4291F0" width="168" height="52" class="white--text">Search</v-btn></router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-data-table
          :headers="tittles"
          :items="itemitem"      
          :items-per-page="5"
          class="elevation-1"
          :search="search">
          <template v-slot:[`item.title`] ="{ item }">
            <v-list-item >
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="'Careers/careersatu/'+item.Id">{{ item.title }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template> 
    </v-data-table>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        tittles: [
          {
            text: 'Title',
            align: 'start',
            sortable: false,
            value: 'title',
          },
          { text: 'Department', value: 'department' },
          { text: 'Job Posted', value: 'date_posted' },
        ],
        itemitem: [],
      }
    },methods:{
      todetail(id){
        this.$router.push({ name: 'Applycareersatu', params: {id: id}})
      }
    },
    mounted(){
      fetch('https://admin.skaleupbusiness.com/getCareers').then(
        async response => {
          const data = await response.json();
          this.itemitem = data.data;
          console.log(this.itemitem)
        }
      )
    }
  }
</script>