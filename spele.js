let adrese = window.location.hash
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(',')
let vards = adrese[0]
let vecums = adrese[1]
let region = adrese[2]
console.log(adrese)

document.querySelector('.virsraksts').innerHTML = 'Sveiks/a '+vards+'!'