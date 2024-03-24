
/** given 2 parameters
 *   Array
 *      - sorted integers
 *   Integer
 *      - a target avrg 
 * check array for pair of values who's average === the target 
 */

// add whatever parameters you deem necessary
function averagePair(nums, target) {
    // ensure there are at least 2 numbers 
    if (nums.length < 2) return false;
    // establish pointers 
    let left = 0;
    let right = nums.length - 1;
    // while right is greater than left there are still elements 
    // to go through in the array 
    while (left < right) {
        let average = (nums[left] + nums[right]) / 2;
        // compare avrg and trgt 
        if (average === target) {
            return true;
            // add one to left idx 
        } else if (average < target) {
            left++;
            // subtract one from right idx
        } else {
            right--;
        }
    }
    return false;
}

module.exports = averagePair;
