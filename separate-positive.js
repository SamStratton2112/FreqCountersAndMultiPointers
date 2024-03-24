/** Accepts array of integers - NO ZEROS
 * separate positive to left and negative to right of array 
 * No need to sort sides
 * done in place, no copies 
 * 
 * use multiple pointers 
 */

// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        if(nums[left] < 0 && nums[right] > 0){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right --;
        // close the while loop by making left > right 
        }else{
            if(nums[left] > 0){
                left ++;
            }else{
                right--;
            }
        }
    }
    return nums
}

module.exports = separatePositive;