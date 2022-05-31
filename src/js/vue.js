Vue.component('food-card', {
  props: ['text', 'img'],
  template:
    '<div><article id="food"><img :src="img" :alt="food-card"/><div><h3>{{text}}</h3></div><button>ADD</button></artcile></div>',
})

Vue.component('Navbar', {
  template:
    '<div><nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar"><a class="navbar-brand"><img src="images/Logo_dark-removebg-preview.png" width="200" height="38"     class="d-inline-block align-top" alt="ERROR" /></a> <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li ><a href="Home.html"><h4 class="px-4">Home</h4></a></li><li ><a href="Account.html"><h4 class="px-4">Account</h4></a></li>   <li ><a href="Cart.html"><h4 class="px-4">My Cart</h4></a></li><li ><a href="About.html"><h4 class="px-4">About us</h4></a></li></ul></div></nav></div>',
})

var app = new Vue({
  el: '#app',
  data: {
    img: '',
    foods: [],
  },
  methods: {
    // Creating functions
    show: function (id) {
      this.sections.forEach((section) => {
        if (section.id === id) {
          section.visible = true
        } else {
          section.visible = false
        }
      })
    },
    addCarrito: function (text) {
      this.items.push({
        text: text,
      })
    },
    getFood: function () {
      for (let i = 0; i < 10; i++) {
        fetch('https://foodish-api.herokuapp.com/api/')
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.foods.push({
              text: 'asjdh',
              img: data.image,
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  },
})

var mysql = require('mysql')

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'parcial2_a0826615',
  user: 'root',
  password: '',
})
