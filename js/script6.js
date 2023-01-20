#!/c/PROGRA~1/nodejs/node

// Array slicing woo
a = [42, 33, 45, 4]
console.log(a.slice(1))

// From 1 to 3, will give #1, #2 but NOT #3
console.log(a.slice(1, 3))

// Finding Last Element
console.log(a[a.length-1])

// Taking Element 0 from a.slice(-1) to give last element
console.log(a.slice(-1)[0])