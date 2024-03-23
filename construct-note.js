// add whatever parameters you deem necessary
function frequencyCounter(str){
    let counts = new Map();
    for(let ltr of str.split('')){
        // either get current value with key of ltr or create key with value pair of 0
        let ltrCount = counts.get(ltr) || 0;
        counts.set(ltr, ltrCount + 1);
    }
    return counts;
}

function constructNote(msg, letters) {
    // if there aren't at least as long as msg then return false 
    if(!letters.length >= msg.length) return false;
    // create map of both msg and letters
    let msgMap = frequencyCounter(msg);
    let ltrsMap = frequencyCounter(letters);
    // compare msgMap letters to ltrsMap letters if there are more
    //  of one letter in the msgMap than in the ltrsMap return false
    for(let ltr of msgMap){
        if(msgMap.get(ltr) > ltrsMap.get(ltr)) return false;
    }
    return true;
}
/**Accepts 
 * - 2 strings
 *      - 1 msg
 *      - letters
 * 
 * if letters match msg return true 
 * 
 * we need to compare the strings to see if anagram (additional letters ok)
 * 
 * create frequency counter helper function 
 * establish new map
 * loop over array and add to map 
 * return map
 * 
 * construct note
 * ensure the letters are greater than the msg length 
 * use helper func on msg and letters 
 * compare msg letters to letters return false if letters count < msg requirements
*/

