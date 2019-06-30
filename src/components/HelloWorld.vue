

<template >
  <b-container fluid>
    <b-form-input v-model="text" placeholder="Search"></b-form-input>
        <b-row v-for="(item, index) in teamList" :key="index" v-if="index%3 == 0">
          <b-col><b-img :src="item.img" fluid alt="Responsive image"></b-img></b-col>
          <b-col><b-img v-if="teamList[index+1]" :src="teamList[index+1].img" fluid alt="Responsive image"></b-img></b-col>
          <b-col><b-img v-if="teamList[index+2]" :src="teamList[index+2].img" fluid alt="Responsive image"></b-img></b-col>
        </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Football Teams',
  data () {
    return {
      teamList: [
        	{
            "name": "Arsenal",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"
          },
          {
            "name": "Bournemouth",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/631.jpg"
          },
          {
            "name": "Brighton & Hove Albion",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2465.jpg"
          },
          {
            "name": "Burnley",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/650.jpg"
          },
          {
            "name": "Cardiff City",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/5542.jpg"
          },
          {
            "name": "Chelsea",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/635.jpg"
          },
          {
            "name": "Crystal Palace",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/637.jpg"
          },
          {
            "name": "Everton",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/639.jpg"
          },
          {
            "name": "Fulham",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/5770.jpg"
          },
          {
            "name": "Huddersfield Town",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2464.jpg"
          },
          {
            "name": "Manchester United",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/645.jpg"
          },
          {
            "name": "Liverpool",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/646.jpg"
          },
          {
            "name": "Leicester City",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/633.jpg"
          },
          {
            "name": "Manchester City",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/642.jpg"
          },
          {
            "name": "Newcastle United",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2463.jpg"
          },
          {
            "name": "Wolverhampton",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/5543.jpg"
          },
          {
            "name": "Tottenham Hotspur",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/648.jpg"
          },
          {
            "name": "Southampton",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/647.jpg"
          },
          {
            "name": "West Ham United",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/640.jpg"
          },
          {
            "name": "Watford",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/638.jpg"
          }
      ] 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
