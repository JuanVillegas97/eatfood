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
    foods: [
      {
        id: 1,
        text: 'Burger',
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/V2H33FRBZBB6FDSJLP2IDHLQYA.jpg',
      },
      {
        id: 2,
        text: 'Pizza',
        img: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
      },
      {
        id: 3,
        text: 'Sushi',
        img: 'https://www.eltiempo.com/files/image_640_428/uploads/2020/06/17/5eeac3162ff67.png',
      },
    ],
    items: [
      {
        id: -1,
        text: '',
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
    addCarrito: function (text) {
      this.items.push({
        text: text,
      })
    },
  },
})
