<template >
  <div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search"/>
    </div>
    <lightbox :images="filteredList" :caption="true"></lightbox>
  </div>
</template>

<script>

export default {
  data () {
    return {
      search: '',
      images: [
        {
          'caption': 'Arsenal',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg'
        },
        {
          'caption': 'Bournemouth',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/631.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/631.jpg'
        },
        {
          'caption': 'Brighton & Hove Albion',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2465.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2465.jpg'
        },
        {
          'caption': 'Burnley',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/650.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/650.jpg'
        },
        {
          'caption': 'Chelsea',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/635.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/635.jpg'
        },
        {
          'caption': 'Crystal Palace',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/637.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/637.jpg'
        },
        {
          'caption': 'Everton',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/639.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/639.jpg'
        },
        {
          'caption': 'huddersfield Town',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2464.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2464.jpg'
        },
        {
          'caption': 'Manchester United',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/645.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/645.jpg'
        },
        {
          'caption': 'Liverpool',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/646.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/646.jpg'
        },
        {
          'caption': 'Leicester City',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/633.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/633.jpg'
        },
        {
          'caption': 'Manchester City',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/642.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/642.jpg'
        },
        {
          'caption': 'Newcastle United',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2463.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/2463.jpg'
        },
        {
          'caption': 'Wolverhampton',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/5543.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/5543.jpg'
        },
        {
          'caption': 'Tottenham Hotspur',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/648.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/648.jpg'
        },
        {
          'caption': 'Southampton',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/647.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/647.jpg'
        },
        {
          'caption': 'West Ham United',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/640.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/640.jpg'
        },
        {
          'caption': 'Watford',
          'src': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/638.jpg',
          'thumb': 'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/638.jpg'
        }
      ]
    }
  },
  computed: {
    filteredList: function filteredList () {
      var _this = this

      return this.images.filter(function (image) {
        return image.caption.toLowerCase().includes(_this.search.toLowerCase())
      })
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
.team-col {
  margin-top: 50px;
}
.team-img {
  height: 200px;
  width: 200px
}
</style>
