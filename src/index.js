var app = new Vue({
  el: '#app',
  data: {
    sections: [
      {
        id: 1,
        name: 'Home',
        visible: true,
      },
      {
        id: 2,
        name: 'Menu',
        visible: false,
      },
      {
        id: 3,
        name: 'Mi Cuenta',
        visible: false,
      },
      {
        id: 4,
        name: 'Mi carrito',
        visible: false,
      },
      {
        id: 5,
        name: 'Quienes Somos',
        visible: false,
      }
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
      this.sections.forEach((section) => {
        console.log(section.id + ' ' + section.visible)
      })
    },
  },
})
