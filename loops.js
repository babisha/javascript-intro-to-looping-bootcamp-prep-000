function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }

  return array
}

let number = 100;



function mayBeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('bebo')
} while (mayBeTrue());