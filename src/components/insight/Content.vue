1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
<template>
  <v-container>
    <v-row class="d-flex align-center" align="center" justify="center">
        <v-col class="d-flex flex-wrap">
          <v-col v-for="n in items" :key="n.Id">
            <v-card class="mx-auto elevation-0" width="350" height="400" rounded="xl">
              <v-img class="white--text align-end rounded-xl" height="200px" :src="n.featured_image"></v-img>
              <v-card-title>{{n.title}}</v-card-title>
            <v-card-subtitle><v-icon>mdi-calendar</v-icon> {{n.datePosted}}</v-card-subtitle>
            <v-card-text>{{ n.caption }}</v-card-text>
            <v-btn text color="blue accent-4"><router-link :to="'/insights/insightone/'+n.Id"> Read More-></router-link></v-btn>
            </v-card>
          </v-col>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-16 mt-16">
      <v-btn class="primary--text" color="#4291F0" @click="e1 = 26" width="192" height="52" outlined style="border-color: #4291f0; margin-top: 30px">Load More</v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
    items: [],
    alignments: ["center"],
  }),
  mounted(){
    fetch('https://admin.skaleupbusiness.com/recent').then(async response => {
        const data = await response.json();
        this.items = data;
      })
 }
};
</script>
<style>
.lineins {
  border-bottom: 10px solid #4291f0;
  width: 5%;
}
.alignleft {
  float: left;
}
.alignright {
  float: right;
}
</style>