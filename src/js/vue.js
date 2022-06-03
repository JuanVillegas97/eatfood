Vue.component('food-card', {
  props: ['text', 'img'],
  template:
    '<div ><img :src="img" :alt="food-card" style="height: 20vh; min-width: 50vh; object-fit: contain;"/><div><h3>{{text}}</h3></div><button>ADD</button></div>',
})

Vue.component('category-card', {
  props: ['text', 'img'],
  template:
    '<div ><img :src="img" :alt="food-card" style="height: 20vh; min-width: 50vh; object-fit: contain;"/><div><h3>{{text}}</h3></div><button @click="getCategory(text)"><a href="#foods">SELECT</a></button></div>',
  data: function () {
    return {
      foods: [],
      adjetives: [
        'acceptable',
        'agreeable',
        'appetizing',
        'attractive',
        'delicious',
        'enjoyable',
        'pleasant',
        'satisfactory',
        'tempting',
        'toothsome',
        'A-OK',
        'aperitive',
        'cool',
        'copacetic',
        'delectable',
        'delightful',
        'divine',
        'fair',
        'flavorsome',
        'heavenly',
        'luscious',
        'mellow',
        'mouthwatering',
        'peachy',
        'relishing',
        'sapid',
        'saporific',
        'saporous',
        'savory',
        'scrumptious',
        'sugar-coated',
        'sweetened',
        'tasteful',
        'tasty',
        'toothy',
        'yummy ',
      ],
    }
  },
  methods: {
    getCategory: function (text) {
      const c = text.charAt(0).toLowerCase()
      const d = text.slice(1)
      for (let i = 0; i < 36; i++) {
        fetch(`https://foodish-api.herokuapp.com/api/images/${c + d}`)
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            const a = this.adjetives[i].charAt(0).toUpperCase()
            const b = this.adjetives[i].slice(1)
            this.foods.push({
              text: a + b + ' ' + text,
              img: data.image,
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
      this.pushnewarray()
    },
    pushnewarray: function () {
      this.$emit('pushnewarray', this.foods)
    },
  },
})

Vue.component('Navbar', {
  template:
    '<div><nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar"><a class="navbar-brand"><img src="images/Logo_dark-removebg-preview.png" width="200" height="38"     class="d-inline-block align-top" alt="ERROR" /></a> <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li ><a href="Home.html"><h4 class="px-4">Home</h4></a></li><li ><a href="Account.html"><h4 class="px-4">Account</h4></a></li>   <li ><a href="Cart.html"><h4 class="px-4">My Cart</h4></a></li><li ><li ><a href="user.html"><h4 class="px-4">My Account</h4></a></li><a href="About.html"><h4 class="px-4">About us</h4></a></li></ul></div></nav></div>',
})

var app = new Vue({
  el: '#app',
  data: {
    user: '',
    passwrd: '',
    foods: [],
    categories: [],
    categories_name: [
      'biryani',
      'burger',
      'butter-chicken',
      'dessert',
      'dosa',
      'idly',
      'pasta',
      'pizza',
      'rice',
      'samosa',
    ],
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
    signup: function () {
      this.users.push({
        username: this.user,
        password: this.passwrd,
      })
      console.log()
    },
    getCategories: function () {
      for (let i = 0; i < this.categories_name.length; i++) {
        fetch(
          `https://foodish-api.herokuapp.com/api/images/${this.categories_name[i]}`
        )
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            const a = this.categories_name[i].charAt(0).toUpperCase()
            const b = this.categories_name[i].slice(1)
            this.categories.push({
              text: a + b,
              img: data.image,
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    updateFoods: function (updatedFoods) {
      this.foods = updatedFoods
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getCategories()
    })
  },
})

//!THINGS TO FIX RECIVE NAME OF CATEGORY THE FUNCTION IT'S NOT WORKING
