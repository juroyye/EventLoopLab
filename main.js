// let count = 0

// try{

// function increment (){
//     count = count + 1
//     console.log(count)
//     increment()
// }

// increment()
// } catch(e){

//     console.log(e)
//     console.log(count)

// }

// const nestedArr = [1, 2, [3, 4, 5, [6, [7]]]];

// function flatten(arr, depth) {
//   return function () {
//     if (depth > 0) {
//       return flatten(arr.flat(1), depth - 1);
//     } else {
//       return arr;
//     }
//   };
// }

// console.log(flatten(nestedArr, 5))

// function trampoline(fn) {
//   let result = fn;

//   while (typeof result === "function") {
//     result = result();
//   }

//   return result;
// }

// console.log(trampoline(flatten(nestedArr, 5)));

let header = document.querySelector("h1")

function calculateIfPrime(n) {

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
    } 
    return true;
  }


let pushedArray = [];

function pushInArray(n) {
  for (let i = 2; i < n; i++) {
    if (calculateIfPrime(i)) {
      pushedArray.push(i.toString());
    }
  }
}

pushInArray(1000)


let newEl = document.createElement('h2')
newEl.textContent = pushedArray
header.appendChild(newEl)
alert("Calculations are complete!")




