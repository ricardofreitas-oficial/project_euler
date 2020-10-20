const isPrime = (num) => {
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

module.exports = isPrime