// function max(arr) {
//     let largest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// let number = [56,45,100,44,152,1];
// let result = max(number); 
// console.log(result);


function getEvenNumber(arr) {

    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }

    }

    return evenNumbers;
}

let number = [1,2,3,4,5,6];
let result = getEvenNumber(number);

console.log(result);