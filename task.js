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

let personsAge = 5

if (personsAge <= 5) {
  console.log(`Į mokyklą neina`)
}