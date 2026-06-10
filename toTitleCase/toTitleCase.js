// This Function Does Something Like Title Method In Python
function toTitleCase(text, sep){
    // Chek if user entered seprator?
    if (sep == undefined){ 
        return "Error Section for missing or Valid option"
    }else if(String(text).includes(String(sep)) == false){// Check if seprator is valid?
        return "Error: Invalid seprator"
    }else{
        let textStr = String(text); // Make sure the input is string in all conditions.
        let sepStr = String(sep); // Seprator you can use for different types of data like cvs
        let toObj = textStr.split(sep); // make an object to seprat words and make  it iteratable for word
        let textTitled = ""; // Save final answer in this variable
        console.log (`This is sep: ${sep} and The type is:${typeof sep}`)
        for (let word of toObj){
            let lower = String(word).toLowerCase(); // turn every single object to string, so you can use string method.
            let upper = lower.replace(lower[0], lower[0].toUpperCase()); //select the first letter and replace it with upper case one.
            textTitled += upper + " "; //save every changes that loop do
    }
    return textTitled.trimEnd() // return the treated final result
    }
}
