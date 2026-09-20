
const bmiGuidelines = [
  {
    category: "Underweight",
    minbmi: null,
    maxbmi: 18.49,
    rangeLabel: "< 18.5",
    recommendations: {
      nutrition: "Clean caloric surplus using nutrient-dense foods (nuts, avocados, olive oil, quality proteins). Avoid empty calories.",
      exercise: "Focus on resistance and strength training (3–4 days/week) to build muscle; limit long cardio sessions.",
      medical: "Screen for underlying conditions like hyperthyroidism or gastrointestinal malabsorption."
    }
  },
  {
    category: "Normal Weight",
    minbmi: 18.5,
    maxbmi: 24.99,
    rangeLabel: "18.5 - 24.9",
    recommendations: {
      nutrition: "Maintain balanced whole-food diet with adequate fiber and protein (80/20 rule).",
      exercise: "150+ minutes of moderate aerobic activity weekly + 2 strength-training sessions.",
      medical: "Monitor body composition (prevent 'skinny fat') and maintain Waist-to-Height Ratio (WHtR) < 0.5."
    }
  },
  {
    category: "Overweight",
    minbmi: 25.0,
    maxbmi: 29.99,
    rangeLabel: "25.0 - 29.9",
    recommendations: {
      nutrition: "Moderate, sustainable caloric deficit; reduce refined carbs and increase protein/fiber for satiety.",
      exercise: "Increase daily NEAT (steps/movement) and cobmine cardio with resistance training.",
      medical: "Annual check-up for blood pressure, fasting blood glucose, and lipid panel."
    }
  },
  {
    category: "Obesity",
    minbmi: 30.0,
    maxbmi: null,
    rangeLabel: "≥ 30.0",
    recommendations: {
      nutrition: "Structured dietary plan with professional guidance; avoid extreme/yo-yo diets.",
      exercise: "Low-impact cardio (swimming, stationary cycling, walking) to protect joints.",
      medical: "Screening for metabolic syndrome, fatty liver, and sleep apnea; discuss medical/bariatric options if needed."
    }
  }
];



function bmi(){
    let hight = document.getElementById("hight").value 
    let weight = document.getElementById("weight").value
    let hight2 = hight/100;
    let bmiCalculated = weight / (hight2 * hight2);
    return bmiCalculated
}

function bmiInterpret(bmi){
    if(bmi > 0 && bmi < 18.5){
        return 'Underweight'
    }else if (bmi >= 18.5 && bmi < 25){
        return 'Normal Weight'
    }else if (bmi >= 25 && bmi < 30){
        return 'Overweight'
    }else if(bmi >= 30){
        return 'Obesity'
    }else{
        return '[Error]: False Entry; do it again'
    }
}

function doer(){
    let value =  bmiInterpret(bmi());
    let showAnswer = document.getElementById('answerbox');
    let bmiCategory = document.getElementById('bmi-category');
    showAnswer.classList.replace('answerbox','showAnswerBox')
    bmiCategory.classList.replace('bmi-category','bmi-category-show')


    for (let i = 0; i < bmiGuidelines.length; i++){
    if(bmiGuidelines[i].category ==  value){
        document.getElementById('bmi-category').innerHTML = value
        document.getElementById('nutrition').innerHTML = bmiGuidelines[i].recommendations.nutrition
        document.getElementById('exercise').innerHTML = bmiGuidelines[i].recommendations.exercise
        document.getElementById('medical').innerHTML = bmiGuidelines[i].recommendations.medical
        break;
    }
}  
}

let copyBtn = document.querySelector('#copy-btn')

let bmiCategory = document.getElementById('bmi-category');
let bmiRecom = document.getElementById('answerbox');


copyBtn.addEventListener('click', async () => {
  copyBtn.innerText = 'Copied!'

  let copyText = `${bmiCategory.innerText}\n${bmiRecom.innerText}`
  await navigator.clipboard.writeText(copyText)
}) 