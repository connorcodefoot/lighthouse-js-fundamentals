function isOdd(number) {
  if (number % 2 !== 0) {
    return true
  } else if (number % 2 === 0) {
    return false
  }
}
console.log(isOdd(6))