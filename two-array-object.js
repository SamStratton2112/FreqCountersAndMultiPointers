/** accepts two arrays lengths vary
 *      keys array 
 *      values array 
 * return an object from the keys and values
 * if not enough values then extra keys set to null
 * if not enough keys then ignore remaining values 
 * 
 * create obj variable 
 * let i=0, while idx < array.length , add one to i 
 * get values from arrays in variable
 * let key = arr1[idx]
 * let val = arr2[idx]
 * add to object 
 * obj[key] = val || null
 * return object 
 */

// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};
    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        let value = values[i] || null;
        obj[key] = value;
    }
    return obj;
}

module.exports = twoArrayObject;