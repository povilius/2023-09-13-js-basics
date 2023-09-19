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


// if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log(`Abu atsakymai teisingi`)
// } else if (correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12) {
//   console.log(`Patekai į kitą lygį: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.`)
// } else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log(`Patekai į kitą lygį: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.`)
// } else {
//   console.log(`Nepatekai į kitą lygį: abu atsakymai buvo neteisingi.`)
// }

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log(`Abu atsakymai teisingi`)
} else if (correctAnswer11 === playerAnswer11) {
  console.log(`Patekai į kitą lygį: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.`)
} else if (correctAnswer12 === playerAnswer12) {
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


// let correctAnswer31 = `sun`
// let correctAnswer32 = 123
// let correctAnswer33 = 456

// let playerAnswer31 = `sund`
// let playerAnswer32 = 1233
// let playerAnswer33 = 4564

// let answer31 = correctAnswer31 === playerAnswer31

// let output = ``

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log(`Visi atsakymai teisingi, patekote į kitą lygį.`)
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32) {
//   console.log(`Patekote į kitą lygį: Trečias atsakymas buvo neteisingas.`)
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
//   console.log(`Patekote į kitą lygį: Antras atsakymas buvo neteisingas.`)
// } else if (correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log(`Patekote į kitą lygį: Pirmas atsakymas buvo neteisingas.`)
// } 

// else if (correctAnswer31 === playerAnswer31) {
//   console.log(`Nepatekai į kitą lygį: Tik pirmas atsakymas atsakytas teisingai.`)
// } else if (correctAnswer32 === playerAnswer32) {
//   console.log(`Nepatekai į kitą lygį: Tik antras atsakymas atsakytas teisingai.`)
// } else if (correctAnswer33 === playerAnswer33) {
//   console.log(`Nepatekai į kitą lygį: Tik trečias atsakymas atsakytas teisingai.`)
// } else {
//   console.log(`Nepatekai į kitą lygį: visi atsakymai buvo neteisingi.`)
// }

let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

let playerAnswer31 = 1
let playerAnswer32 = 1
let playerAnswer33 = 0

let answer31 = correctAnswer31 === playerAnswer31
let answer32 = correctAnswer32 === playerAnswer32
let answer33 = correctAnswer33 === playerAnswer33

let successMessage = 'Patekai i kita lygi: '
let failMessage = 'Nepatekai i kita lygi: '

let output = ''

if (answer31 && answer32 && answer33) {
  output = successMessage + 'visi atsakymai teisingi.'
} else if (answer31 && answer32) {
  output = successMessage + 'tačiau trečias atsakymas buvo neteisingas.'
} else if (answer31 && answer33) {
  output = successMessage + 'tačiau antras atsakymas buvo neteisingas.'
} else if (answer32 && answer33) {
  output = successMessage + 'tačiau pirmas atsakymas buvo neteisingas.'
} else if (answer31) {
  output = failMessage + 'tačiau pirmas atsakymas buvo teisingas.'
} else if (answer32) {
  output = failMessage + 'tačiau antras atsakymas buvo teisingas.'
} else if (answer33) {
  output = failMessage + 'tačiau trečias atsakymas buvo teisingas.'
} else {
  output = failMessage + 'visi atsakymai buvo neteisingi.'
}

console.log(output)


console.groupEnd()


// let isLoggedIn = true
// let userName = 'John'
// let time = 18
// let isBirthday = false

// if (isLoggedIn === true) {
  
//   if (time >= 5 && time < 13) {

//     if (isBirthday === true) {
//       console.log(`Good Morning, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Good Morning, ${userName}.`)
//     }

//   } else if (time >= 13 && time < 19) {

//     if (isBirthday === true) {
//       console.log(`Good Afternoon, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Good Afternoon, ${userName}.`)
//     }

//   } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

//     if (isBirthday === true) {
//       console.log(`Good Evening, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Good Evening, ${userName}.`)
//     }

//   } else {
    
//     if (isBirthday === true) {
//       console.log(`Hello, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Hello, ${userName}.`)
//     }

//   }

// } else {
  
//   if (time >= 5 && time < 13) {
//     console.log(`Good Morning`)
//   } else if (time >= 13 && time < 19) {
//     console.log(`Good Afternoon`)
//   } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
//     console.log(`Good Evening`)
//   } else {
//     console.log(`Hello`)
//   }

// }

// if (time >= 5 && time < 13) {
  
//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Good Morning, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Good Morning, ${userName}`)
//   } else {
//     console.log(`Good Morning`)
//   }

// } else if (time >= 13 && time < 19) {

//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Good Afternoon, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Good Afternoon, ${userName}`)
//   } else {
//     console.log(`Good Afternoon`)
//   }

// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Good Evening, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Good Evening, ${userName}`)
//   } else {
//     console.log(`Good Evening`)
//   }

// } else {

//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Hello, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Hello, ${userName}`)
//   } else {
//     console.log(`Hello`)
//   }

// }









// let isLoggedIn = true
// let userName = 'Steve'
// let time = 20
// let isBirthday = false

// let greetingText = ''
// let nameText = ''
// let birthdayText = ''

// if (time >= 5 && time < 13) {
//   greetingText = 'Good Morning'
// } else if (time >= 13 && time < 19) {
//   greetingText = 'Good Afternoon'
// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
//   greetingText = 'Good Evening'
// } else {
//   greetingText = 'Hello'
// }

// if (isLoggedIn && userName) {
//   nameText = ', ' + userName
// }

// if (isBirthday && isLoggedIn) {
//   birthdayText = ' and have a great birthday!'
// }

// let greetingOutput = greetingText + nameText + birthdayText

// console.log(greetingOutput)



let isLoggedIn = true
let userName = 'Steve'
let time = 20
let isBirthday = false

let greetingText = ''

// let nameText
// if (isLoggedIn && userName) {
//   nameText = ', ' + userName
// } else {
//   nameText = ''
// }

let nameText = (isLoggedIn && userName) ? ', ' + userName : ''

// let birthdayText
// if (isBirthday && isLoggedIn) {
//   birthdayText = ' and have a great birthday!'
// } else {
//   birthdayText = ''
// }

let birthdayText = (isBirthday && isLoggedIn) ? ' and have a great birthday!' : ''

if (time >= 5 && time < 13) {
  greetingText = 'Good Morning'
} else if (time >= 13 && time < 19) {
  greetingText = 'Good Afternoon'
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingText = 'Good Evening'
} else {
  greetingText = 'Hello'
}

let greetingOutput = greetingText + nameText + birthdayText

console.log(greetingOutput)