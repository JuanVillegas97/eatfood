var app = new Vue({
  el: '#app',
  data: {
    img: [],
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
    // Creating function
    show: function (id) {
      this.sections.forEach((section) => {
        if (section.id === id) {
          section.visible = true
        } else {
          section.visible = false
        }
      })
    },
    getFood: function () {
      fetch(' https://spoonacular.com/recipeImages/')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          this.img = data
        })
        .catch((err) => {
          console.log(err)
        })

      console.log(this.img)
    },
  },
})
