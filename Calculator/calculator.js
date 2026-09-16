// calculatorScreen


function calculatorCore(num){
    let result= eval(num);
    document.getElementById('answer').innerText = result;
}

function capture(element){
    let data = element.innerText;
    document.getElementById('calculatorScreen').innerText += data;

}


function stepback(){
    let data = document.getElementById('calculatorScreen').innerText;

    document.getElementById('calculatorScreen').innerText = data.slice(0,-1);
    
}

function deleteAll(){
    document.getElementById('calculatorScreen').innerText = "";
    document.getElementById('answer').innerText = "";
}