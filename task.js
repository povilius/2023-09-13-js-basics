// console.groupCollapsed(`Mano darytas`)

// // Pirma užduotis

// let password = `djdd`

// console.log(password)
// console.log(password.length)

// if (!password.includes(`#`)) {
//   console.log(`Slaptažodis privalo turėti grotažymes`)
// } else if (password.length < 16) {
//   console.log(`Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.`)
// } else if (password.length <= 20) {
//   console.log(`Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.`)
// } else {
//   console.log(`Slaptažodis tinkamas`)
// }

// // Antra užduotis

// let personsAge = prompt(`Įveskite savo amžių:`)

// if (personsAge < 0) {
//   console.log(`Įvestas amžius yra per mažas`)
// } else if (personsAge > 110) {
//   console.log(`Įvestas amžius yra per didelis`)
// } else if (personsAge < 7) {
//   console.log(`Į mokyklą neina`)
// } else if (personsAge < 11) {
//   console.log(`Eina į pradinę klasę`)
// } else if (personsAge < 15) {
//   console.log(`Eina į pagrindinę klasę`)
// } else if (personsAge < 19) {
//   console.log(`Eina į gimnaziją`)
// } else {
//   console.log(`Mokyklą baigė`)
// }

// if (personsAge === 6) {
//   console.log(`Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.`)
// } else if (personsAge === 10) {
//   console.log(`Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.`)
// } else if (personsAge === 14) {
//   console.log(`Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.`)
// } else if (personsAge === 18) {
//   console.log(`Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.`)
// }

// console.groupEnd()

let originalPassword = 'asdasdasgdfgdfgdg#'
let password = originalPassword.trim()
let passwordLength = password.length

console.log(password)
console.log(passwordLength)
console.log(password.includes('#'))

if (!password.includes('#')) {
  console.log('Slaptažodis privalo turėti grotažymes')
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passwordLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
  console.log('Slaptažodis tinkamas')
}



let age = 19
console.log(age)

age = 20

console.log(age)
console.log(typeof age)

if (isNaN(age)) {
  console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
  console.log('Nurodytas amžius yra per mažas, jis negali būti neigiamas skaičius.')
} else if (age < 6) {
  console.log('Į mokyklą neina')
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
  console.log('Pradinė')
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
  console.log('Pagrindinė')
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
  console.log('Gimnazija')
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
  console.log('Mokyklą baigė')
} else {
  console.log('Nurodytas amžius yra per didelis, jis negali būti didesnis už 120 metų.')
}