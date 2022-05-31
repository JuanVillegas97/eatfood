var mysql = require('mysql')

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'parcial2_a0826615',
  user: 'root',
  password: '',
})

conexion.connect(function (error) {
  if (error) {
    throw error
  } else {
    console.log('Conexion exitosa')
  }
})

//*INSERT
//!Check THIS WITH VUE-MODEL
function INSERT(value) {
  conexion.query(
    `INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES (${value},"A00826615","A00826615@tec.mx","ITC"),("Pedro", "A00826620","A00826620","IDM")`,
    function (error, results) {
      if (error) {
        throw error
      } else {
        console.log('Registro agregado', results)
      }
    }
  )
}

//*SELECT
conexion.query('SELECT * FROM alumnos', function (error, results, fields) {
  if (error) {
    throw error
  }
  results.forEach((result) => {
    console.log(result)
  })
})

//*UPDATE
conexion.query(
  'UPDATE alumnos SET Nombre = "PACO" WHERE Id = 8',
  function (error, results) {
    if (error) {
      throw error
    } else {
      console.log('Update agregado', results)
    }
  }
)

//*DELETE
conexion.query('DELETE FROM alumnos WHERE Id = 8', function (error, results) {
  if (error) {
    throw error
  } else {
    console.log('Update agregado', results)
  }
})

conexion.end()
