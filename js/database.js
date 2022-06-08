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
function INSERT(username,uname,password) {
  conexion.query(
    `INSERT INTO Alumnos(Username, uname,Password) VALUES (${username},${uname},${password})`,
    function (error, results) {
      if (error) {
        throw error
      } else {
        console.log('Registro agregado', results)
      }
    }
  )
}

function LOG_IN(username, password) {
  conexion.query(
    `SELECT * FROM Alumnos WHERE username=${username} AND password= ${password})`,
    function (error, results) {
      if (error) {
        throw error
      } else {
        console.log('Consultaexitosa', userid )
      }
    }
  )
}

//*SELECT
conexion.query('SELECT * FROM alumnos', function (error, results, fields) {
  if (error) {
    throw error
  }
  results.forEach((result) =>  {
    console.log(result.uname," ",result.uname)
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
