/**
 * given one array of integers and one number
 * find totol number of pairs who's sum is the second param(number)
 * there is no duplatate values 
 * return total number of pairs 
 */
// add whatever parameters you deem necessary
function countPairs(arr, num) {
    // sorts based on positive or negative result a-b
    // so numbers will be sorted properly
    arr.sort((a,b)=>a-b);
    // create variables for left, right, and total pairs 
    let total = 0;
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx < rightIdx){
        let sum = arr[leftIdx] + arr[rightIdx];
        if(sum === num){
            total ++;
            leftIdx ++;
            rightIdx --;
        // becuase the array is sorted we know that the smallest 
        // values will be first on the left 
        }else if(sum<num){
            leftIdx ++;
        }else{
            rightIdx --;
        }
    }
    return total;
}

module.exports = countPairs;
