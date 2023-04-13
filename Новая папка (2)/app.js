// let a = 40;
// let b = 50;
// let g = 30;

// let c = a - b + g;

// console.log(c)

// let a = 10;
// let b = a;
// a = 20
// console.log(a, b)
// const fruits = ["Banana", "Orange", "Apricot", "Mango"];

// let fruit = fruits.at(2);

// console.log(fruit)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);

// console.log(children)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin4444444"];
// console.log(  arr1.concat(arr2, arr3));
// -------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const typeFru = fruits.copyWithin(4, 0);

// console.log(typeFru)
// -----------------

// const ages = [32, 33, 16, 40];

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }
// -------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");

// console.log(fruits)
// ----------------
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

// send JSON:
window.location = "demo_json.php?x=" + myJSON;

'{"name":"John", "age":30, "car":null}'


document.getElementById("demo").innerHTML = xhttp.responseText;
