//Data section
const rawUsers = [
  { name: "emily dickinson", age: 30, isActive: true, email: "Emily.D@poet.com" },
  { name: "JOHN DOE", age: 17, isActive: true, email: "jdoe99@test.com" },
  { name: "alice cooper", age: 25, isActive: false, email: "AliceC@music.net" },
  { name: "robert BRUCE", age: 45, isActive: true, email: "RobBruce_1@scotland.uk" },
  { name: "samantha smith", age: 16, isActive: true, email: "sammy.s@school.edu" },
  { name: "MICHAEL johnson", age: 22, isActive: true, email: "MikeJ@company.org" },
  { name: "linda williams", age: 34, isActive: false, email: "L.Williams@webmail.com" },
  { name: "david BROWN", age: 19, isActive: true, email: "David.B@domain.co" },
  { name: "jessica taylor", age: 28, isActive: true, email: "Jess_T@tech.io" },
  { name: "CHRIS evans", age: 15, isActive: false, email: "chrisevans@kids.com" },
  { name: "william shakespear", age: 52, isActive: true, email: "Will.S@globe.com" },
  { name: "olivia WILDE", age: 21, isActive: true, email: "Olivia_W@cinema.net" }
];
//---------------------------------------------------------------// 
//                  Function Section; Start
//---------------------------------------------------------------//

// toTitleCase Function; Start
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
// toTitleCase Function; End
//===============================================================//
// User Treatmet Function; Start
function processUsers(Data){
    let process = Data //chain process 
        .filter(function(member){ // for choose users +18
            return member.age >= 18;
        })
        .filter(function(member){ // for choose an active user
            return member.isActive == true;
        })
        .map(function(member){ // makes a user name for each user
            return{
                ...member,
                userName: (member.email).split("@")[0].toLowerCase()           
            }
        })
        .map(({email, ...member}) => member)
        .map(function(member){
            return {
                ...member,
                name: toTitleCase(member.name, " ")
            }
        })
    
        return process
}
// User Treatmet Function; End
//===============================================================//

//---------------------------------------------------------------//
//                  Function Section; End
//---------------------------------------------------------------//


// Program Section; Start
console.log(processUsers(rawUsers))
