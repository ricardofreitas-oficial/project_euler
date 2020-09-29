/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b² = c²
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
 */

const pythagoreanTriplet = (result) => {
  let a = 3
  let b = 4
  let c = Math.sqrt(a * a + b * b)
  let sum = a + b + c

  while (sum !== result) {

    if (sum > result) {
      a++
      b = a + 1
    } else {
      b++
    }

    c = Math.sqrt(a * a + b * b)
    sum = a + b + c
  }

  return a * b * c
}

const result = pythagoreanTriplet(1000)
console.log(result) // response 31875000