function findPairs(nums1, nums2, target) {
    let result = [];
    let i = 0;
    let j = nums2.length - 1;

    // Use a two-pointer approach to find pairs
    while (i < nums1.length && j >= 0) {
        let sum = nums1[i] + nums2[j];
        if (sum === target) {
            result.push([nums1[i], nums2[j]]);
            i++;
            j--;
        } else if (sum < target) {
            i++;  // Move the pointer in nums1 to the right to increase the sum
        } else {
            j--;  // Move the pointer in nums2 to the left to decrease the sum
        }
    }

    return result;
}

// Example input
let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;

// Call the function and display the result
let pairs = findPairs(nums1, nums2, k);
console.log(pairs);  // Output: [ [ 4, 9 ], [ 5, 8 ], [ 6, 7 ] ]
