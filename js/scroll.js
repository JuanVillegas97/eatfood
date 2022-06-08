var lastpostitionY
var r, b
r = 222
b = 202
window.addEventListener('scroll', () => {
  lastpostitionY = window.scrollY
  console.log(lastpostitionY)
  if (lastpostitionY === 0) {
    document.getElementById('navbar').style.backgroundColor = '#deffca'
    r = 222
    b = 202
  } else {
    document.getElementById(
      'navbar'
    ).style.backgroundColor = `rgb(${r}, ${255}, ${b})`
    r++
    b++
  }
})
