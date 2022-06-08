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




class Cuenta { constructor(ID,Nombre,Contraseña,Fecha,Dinero,desc1) {
    this.ID = ID;
    this.Nombre = Nombre;
		this.Contraseña = Contraseña;
		this.Fecha = Fecha;
		this.Dinero = Dinero;
    this.desc1 = desc1;
  }
							
}

const C1 = new Cuenta(1,'Luis',1234,2021,1000,'N/A');


var cuentas =new Vue({
  el: '#cuentas',
  data: {reactive: true,
    object: {
      a: JSON.stringify(C1.Nombre),
      b: JSON.stringify(C1.Fecha),
      c: JSON.stringify(C1.Dinero),
			d: JSON.stringify(C1.desc1)
      }
  }
})

function checkValue(usuario,contraseña, arr) {
    var status = 'No hay cuenta';

    for (var i = 0; i < arr.length; i++) {
        var name = arr[i][2];
			  var name2 = arr[i][3];
			;
        if (name == usuario) {
            status = 'Exist';
					  
            break;
        }
    }

    return status;
}


