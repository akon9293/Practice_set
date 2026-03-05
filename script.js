function max(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let number = [56,45,100,44,152,1];
let result = max(number); 
console.log(result);