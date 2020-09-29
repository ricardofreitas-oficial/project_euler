/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const isPalindrome = (str) => {
  const a = str.toString()
  const b = a.split('').reverse().join('')

  if (a !== b) return false

  return true
}

let max = 0
let product = ''

for (let i = 100; i < 999; i++) {
  for (let j = 100; j < 999; j++) {
    const result = j * i
    if (isPalindrome(result)) {
      max = result
      product = `${i} x ${j}`
    }
  }
}

console.log(`${product} = ${max}`) // response = 995 x 583 = 580085