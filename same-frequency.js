// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // make helper function 
    function frequencyCounter(number){
        // create new Map 
        const counts = new Map();
        for(let num of number.toString().split('')){
            // update key value pair or add pair to count map
            let count = counts.get(num) || 0;
            // increment by 1 
            counts.set(num, count + 1);
        }
        return counts;
    }
    const num1Count = frequencyCounter(num1);
    const num2Count = frequencyCounter(num2);
    // maps will be same size if same frequency in numbers
    if(num1Count.size !== num2Count.size)return false;
    for(let num of num1Count.keys()){
        if(num1Count.get(num) !== num2Count.get(num)) return false;
    }
    return true;
}

module.exports = sameFrequency;