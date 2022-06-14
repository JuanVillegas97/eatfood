import { onGetUsers } from './firebase.js'

const usersForm = document.getElementById('users-form')
const container = document.getElementById('users-container')

usersForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const username = usersForm['users-username']
  const password = usersForm['users-password']

  onGetUsers((querySnapshot) => {
    querySnapshot.forEach((snapshot) => {
      const user = snapshot.data()
      if (
        user.username === username.value &&
        user.password === password.value
      ) {
        container.innerHTML =
          '<div><h3>You have been completly logged</h3><br/></div>'
      }
    })
  })
})
