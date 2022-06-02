function iniciarMap() {
  var coord = { lat: -34.5956145, lng: -58.4431949 }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord,
  })
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  })
}

function locGet(city) {
  var apiLoc = 'http://api.openweathermap.org/geo/1.0/direct?q='
  var limit = '&limit=1'
  console.log(city)
  var url = apiLoc + city + limit + '&appid=38f879bd3e4f4e429fa88f546f36ed7d'
  sendLoc(url)
}

async function sendLoc(url) {
  const response = await fetch(url)
  const data = await response.json()
  const lat1 = parseFloat(data[0].lat)
  const lon2 = parseFloat(data[0].lon)
  iniciarMap2(lat1, lon2)
}

function iniciarMap2(lat1, lon2) {
  var coord = { lat1, lon2 }
  console.log(coord)
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {
      lat: lat1,
      lng: lon2
    },
  })
  var marker = new google.maps.Marker({
    position: {
      lat: lat1,
      lng: lon2
    },
    map: map,
  })
}
