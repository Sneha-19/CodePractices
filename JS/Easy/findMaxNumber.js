// Write a function findMaxNumber that takes an array of numbers as input and returns the largest number in the array. If the array is empty, return null.

function findMaxNumber(arr) {
    // Your implementation
    if (arr.length <= 0) return null;
    let max = arr[0];
    arr.map((val) => {
        if (val > max) {
            max = val
        }
    })
    return max;
}

findMaxNumber([2,6,1,3,9,10]);