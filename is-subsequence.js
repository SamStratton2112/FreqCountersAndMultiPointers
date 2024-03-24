/**
 * take two strings 
 * are string 1 characters in string 2 
 */

// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // create variables for each string's index
    let str1Idx = 0;
    let str2Idx = 0;
    // if str1 is longer than str2 return false 
    while(str2Idx<str2.length){
        if(str2[str2Idx] === str1[str1Idx]){
            // add one to str1Idx if match
            str1Idx ++;
        }
        // check to see if we've gone through all of str1
        if(str1Idx === str1.length) return true;
        // add one to str2 
        str2Idx ++;
    }
    return false;
}

module.exports = isSubsequence;
