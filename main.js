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

const nestedArr = [1, 2, [3, 4, 5, [6, [7]]]];

function flatten(arr, depth) {
  return function () {
    if (depth > 0) {
      return flatten(arr.flat(1), depth - 1);
    } else {
      return arr;
    }
  };
}

console.log(flatten(nestedArr, 5))

function trampoline(fn) {
  let result = fn;

  while (typeof result === "function") {
    result = result();
  }

  return result;
}

console.log(trampoline(flatten(nestedArr, 5)));



