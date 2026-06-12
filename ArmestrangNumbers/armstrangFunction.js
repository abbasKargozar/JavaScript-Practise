// Armestrang number

// data section; start
let userInput = parseInt(prompt())
// data section; end

// Function section; start
// rang() function takes an integer n and returns the start and end of the n‑digit number range. 
function rang(len){
    let rawNumber = 1;
    
    for (let i = 1; i < len; i++){
        rawNumber += "0"
    }
    let minNumber = parseInt(rawNumber)
    let maxNumber = parseInt(rawNumber) * 10

    return [minNumber, maxNumber]
}

function Armstrong(len = 3){
    userRange = rang(len);
    let armstrongNumber = [];
    for(let i = userRange[0]; i < userRange[1]; i++){

        let iString = String(i).split("")
        let arpower = parseInt(iString.length)
        let rawArmstrong = iString.map((number) => number ** arpower);
        let treatNumber = rawArmstrong.reduce((acc,total) => acc + total)
        //return `${treatNumber}: ${typeof treatNumber} and min: ${userRange[0]},max: ${userRange[1]}`
        if(treatNumber == i){
            armstrongNumber.push(i)
        }
    }
    return armstrongNumber
  
}

// Function section; end

// program section; start
Armstrong(userInput)
// program section; end