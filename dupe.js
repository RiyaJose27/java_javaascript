
// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
                j = j - 1
            }
        }
    }
    return arr
}
console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))
console.log(removeDupe([1,2,1,3,4,2]))
console.log(removeDupe([5, 4, 6, 7, 7, 8, 9, 10, 10, 5, 2]))
console.log(removeDupe([5, 4, 6, 7, 7, 8, 9, 10, 10, 5, 2,44,2,3,1,7,85]))
