// Write a function countVowels that takes a string as input and returns the number of vowels in that string. Vowels include both lowercase and uppercase characters

function countVowels(str) {
    // Your implementation
    var res = str.toLowerCase();
    var count = 0;
    var vowels = ["a", "e", "i", "o", "u"]
    if (res.length == 0) return 0;
    for (var i = 0; i < res.length; i++){
        if (vowels.includes(res[i])) {
            count++
        }
    }
    return(count)
}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));