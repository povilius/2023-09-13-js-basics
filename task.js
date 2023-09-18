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

console.groupCollapsed(`Dėstytojo`)

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

console.groupEnd()

console.groupCollapsed(`Pirmas lygis`)


let correctAnswer11 = `sun`
let correctAnswer12 = 123

let playerAnswer11 = `moon`
let playerAnswer12 = 123

console.log(correctAnswer11 === playerAnswer11)
console.log(correctAnswer12 === playerAnswer12)

console.log(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12)
console.log(correctAnswer11 === playerAnswer11 || correctAnswer12 === playerAnswer12)

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log(`Abu atsakymai teisingi`)
} else if (correctAnswer11 === playerAnswer11 || correctAnswer12 !== playerAnswer12) {
  console.log(`Patekai į kitą lygį: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.`)
} else if (correctAnswer11 !== playerAnswer11 || correctAnswer12 === playerAnswer12) {
  console.log(`Patekai į kitą lygį: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.`)
} else {
  console.log(`Nepatekai į kitą lygį: abu atsakymai buvo neteisingi.`)
}

console.groupEnd()

console.groupCollapsed(`Antras lygis`)

let correctAnswer21 = `sun`
let correctAnswer22 = 123

let playerAnswer21 = `moon`
let playerAnswer22 = 123

console.log(correctAnswer11 === playerAnswer11)
console.log(correctAnswer12 === playerAnswer12)

console.log(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12)
console.log(correctAnswer11 === playerAnswer11 || correctAnswer12 === playerAnswer12)

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log(`Abu atsakymai teisingi, patekote į kitą lygį.`)
} else if (correctAnswer21 !== playerAnswer21) {
  console.log(`Nepatekai į kitą lygį: pirmas atsakymas buvo neteisingas.`)
} else if (correctAnswer22 !== playerAnswer22) {
  console.log(`Nepatekai į kitą lygį: antras atsakymas buvo neteisingas.`)
} else {
  console.log(`Nepatekai į kitą lygį: abu atsakymai buvo neteisingi.`)
}

console.groupEnd()

console.groupCollapsed(`Trečias lygis`)


let correctAnswer31 = `sun`
let correctAnswer32 = 123
let correctAnswer33 = 456

let playerAnswer31 = `sund`
let playerAnswer32 = 1233
let playerAnswer33 = 4564

console.log(correctAnswer31 === playerAnswer31)
console.log(correctAnswer32 === playerAnswer32)
console.log(correctAnswer33 === playerAnswer33)

console.log(correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33)
console.log(correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33)
console.log(correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33)

if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
  console.log(`Visi atsakymai teisingi, patekote į kitą lygį.`)
} else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
  console.log(`Patekote į kitą lygį: Trečias atsakymas buvo neteisingas.`)
} else if (correctAnswer32 !== playerAnswer32 && correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
  console.log(`Patekote į kitą lygį: Antras atsakymas buvo neteisingas.`)
} else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
  console.log(`Patekote į kitą lygį: Pirmas atsakymas buvo neteisingas.`)
} 

else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
  console.log(`Nepatekai į kitą lygį: Tik pirmas atsakymas atsakytas teisingai.`)
} else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
  console.log(`Nepatekai į kitą lygį: Tik antras atsakymas atsakytas teisingai.`)
} else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
  console.log(`Nepatekai į kitą lygį: Tik trečias atsakymas atsakytas teisingai.`)
} else {
  console.log(`Nepatekai į kitą lygį: visi atsakymai buvo neteisingi.`)
}

console.groupEnd()


let isLoggedIn = true
let userName = `John`
let time = 5
let isBirthday = false

if (isLoggedIn = true) {
  if (isBirthday = true) {
    console.log(`${time}, ${userName} and have a great birthday!`)
  } else {
    console.log(`${time}, ${userName}!`)
  }
} else {
  console.log(`${time}!`)
}


if (time > 5 && time < 12) {
  console.log(`Good Morning`)
} else if (time > 13 && time < 18) {
  console.log(`Good Afternoon`)
} else if (time > 19 && time < 4) {
  console.log(`Good Evening`)
}