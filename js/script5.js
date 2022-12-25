#!/c/PROGRA~1/nodejs/node

//Splitting strings on a space
let string = "ant bat cat"
console.log(string.split(" "))

string = "ant,bat,cat"
console.log(string.split(","))

string = "antheybatheycat"
console.log(string.split("hey"))

string = "antbatcat"
console.log(string.split(""))

let b = "badger"
let a = b.split("")
for (let i = 0; i < b.length; i++) {
    console.log(a[i])
}