Vue.component('food-card', {
  props: ['text', 'img'],
  template:
    '<div><article id="food"><img :src="img" :alt="food-card"/><div><h3>{{text}}</h3></div><button>ADD</button></artcile></div>',
})

var app = new Vue({
  el: '#app',
  data: {
    img: '',
    foods: [],
    sections: [
      {
        id: 1,
        name: 'Menu',
        visible: true,
      },
      {
        id: 2,
        name: 'Mi Cuenta',
        visible: false,
      },
      {
        id: 3,
        name: 'Mi carrito',
        visible: false,
      },
      {
        id: 4,
        name: 'Quienes Somos',
        visible: false,
      },
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
