// Write a function that splits an array into chunks (subarrays) of a given size navigator. If the array cannot be split evenly, the final chink should contain the remaining elements

// Example:
// Input: ([1,2,3,4], 2)
// Output: [[1,2], [3,4]]

// Input: ([1,2,3,4,5], 2)
// Output: [[1,2], [3,4], [5]]

// Input: ([], 2)
// Output: []

// Input: ([1,2,3,4], 5)
// Output: [[1,2,3,4]]

function chunkArray(arr, n) {
    // Your implementation
    var result = [];
    for (let i = 0; i < arr.length; i += n){
        result.push(arr.slice(i, i+n))
    }
    return result;
}

console.log(chunkArray([1, 2, 3], 3));