var app = new Vue({
  el: '#app',
  data: {
    sections: [
      {
        id: 1,
        name: 'Menu',
        visible: true,
      },
      {
        id: 2,
        name: 'MiCuenta',
        visible: false,
      },
      {
        id: 3,
        name: 'Mi carrito',
        visible: false,
      },
      {
        id: 4,
        name: 'QuienesSomos',
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
      this.sections.forEach((section) => {
        console.log(section.id + ' ' + section.visible)
      })
    },
  },
})
