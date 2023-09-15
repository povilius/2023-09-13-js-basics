// Pirma užduotis

let password = `#passwordpasswor`

console.log(password)
console.log(password.length)

if (!password.includes(`#`)) {
  console.log(`Slaptažodis privalo turėti grotažymes`)
} else if (password.length < 16) {
  console.log(`Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.`)
} else if (password.length <= 20) {
  console.log(`Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.`)
} else {
  console.log(`Slaptažodis tinkamas`)
}

// Antra užduotis

let personsAge = prompt(`Įveskite savo amžių:`)

if (personsAge < 0) {
  console.log(`Įvestas amžius yra per mažas`)
} else if (personsAge > 110) {
  console.log(`Įvestas amžius yra per didelis`)
} else if (personsAge < 6) {
  console.log(`Į mokyklą neina`)
} else if (personsAge >= 7 && personsAge <= 10) {
  console.log(`Eina į pradinę klasę`)
} else if (personsAge >= 11 && personsAge <= 14) {
  console.log(`Eina į pagrindinę klasę`)
} else if (personsAge >= 15 && personsAge <= 18) {
  console.log(`Eina į gimnaziją`)
} else {
  console.log(`Mokyklą baigė`)
}

if (personsAge === 6) {
  console.log(`Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.`)
} else if (personsAge === 10) {
  console.log(`Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.`)
} else if (personsAge === 14) {
  console.log(`Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.`)
} else if (personsAge === 18) {
  console.log(`Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.`)
}