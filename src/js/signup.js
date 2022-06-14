import { saveUser } from './firebase.js'

const userAnnouncement = document.getElementById('users-announcement')
const usersForm = document.getElementById('users-form')

usersForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = usersForm['users-username']
  const password = usersForm['users-password']
  const email = usersForm['users-email']
  saveUser(username.value, password.value, email.value)
  userAnnouncement.innerHTML = `<div><h4>Your user has been created, please go to login</h4></div><br /><br />`
  usersForm.reset()
})
