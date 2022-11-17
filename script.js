const createButton = document.getElementById('createID')
const passwordOne = document.querySelector('.passwordone')
const passwordtwo = document.querySelector('.passwordtwo')
const acheUno = document.querySelector('.content')
const confirmP = document.getElementById('CPassword')

function comparation(e) {
  e.preventDefault()
  console.log('feo')
  if (passwordOne.value === passwordtwo.value) {
    return true
  } else {
    confirmP.innerHTML = 'Confirm password: PASSWORDS DO NOT MATCH'
  }
}

createButton.addEventListener('click', comparation)