
const home = new Vue({
  el: '#homepage',
  data:{
    title: 'Hello World',
    content: 'Welcome to this world',
    backgroundVideo:'background.mp4'
  }
})

const information = new Vue({
  el: '#information-section',
  data:{
    titleSection:'information',
    part1: {
      title:'world1',
      content:'this is the world that we are living in. is it beautiful?',
      image:'world1.png'
    },
    part2:{
      title:'world2',
      content:'Ahh let see the world2 together. this is the world we want everyday',
      image:'world2.png'
    },
    part3:{
      title:'world3',
      content:'hey look this world look like the world1 that we have seen',
      image:'world1.png'
    }

  }
})

const comparation = new Vue({
  el: '#compare-university-section',
  data:{
    mainTitle: 'Compare Other University with KIT',
    part1: {
      title: "KIT",
      content: "ladfladfjlas adla fadslf j"
    },
    part2: {
      title: "USA",
      content: "ladfladfjlas adla fadslf j"
    },
    part3: {
      title: "Korea",
      content: "ladfladfjlas adla fadslf j"
    },
  }
})
const footer = new Vue({
  el: '#footer-section',
  data: {
    logo: "logo.png",
    description_under_logo: "data more data to this section in the app.js"
  }
})
