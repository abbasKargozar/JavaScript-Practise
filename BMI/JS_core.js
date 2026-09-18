
const mbiGuidelines = [
  {
    category: "Underweight",
    minmbi: null,
    maxmbi: 18.49,
    rangeLabel: "< 18.5",
    recommendations: {
      nutrition: "Clean caloric surplus using nutrient-dense foods (nuts, avocados, olive oil, quality proteins). Avoid empty calories.",
      exercise: "Focus on resistance and strength training (3–4 days/week) to build muscle; limit long cardio sessions.",
      medical: "Screen for underlying conditions like hyperthyroidism or gastrointestinal malabsorption."
    }
  },
  {
    category: "Normal Weight",
    minmbi: 18.5,
    maxmbi: 24.99,
    rangeLabel: "18.5 - 24.9",
    recommendations: {
      nutrition: "Maintain balanced whole-food diet with adequate fiber and protein (80/20 rule).",
      exercise: "150+ minutes of moderate aerobic activity weekly + 2 strength-training sessions.",
      medical: "Monitor body composition (prevent 'skinny fat') and maintain Waist-to-Height Ratio (WHtR) < 0.5."
    }
  },
  {
    category: "Overweight",
    minmbi: 25.0,
    maxmbi: 29.99,
    rangeLabel: "25.0 - 29.9",
    recommendations: {
      nutrition: "Moderate, sustainable caloric deficit; reduce refined carbs and increase protein/fiber for satiety.",
      exercise: "Increase daily NEAT (steps/movement) and combine cardio with resistance training.",
      medical: "Annual check-up for blood pressure, fasting blood glucose, and lipid panel."
    }
  },
  {
    category: "Obesity",
    minmbi: 30.0,
    maxmbi: null,
    rangeLabel: "≥ 30.0",
    recommendations: {
      nutrition: "Structured dietary plan with professional guidance; avoid extreme/yo-yo diets.",
      exercise: "Low-impact cardio (swimming, stationary cycling, walking) to protect joints.",
      medical: "Screening for metabolic syndrome, fatty liver, and sleep apnea; discuss medical/bariatric options if needed."
    }
  }
];



function mbi(){
    let hight = document.getElementById("hight").value 
    let wight = document.getElementById("wight").value
    let hight2 = hight/100;
    let mbiCalculated = 1.3 * (wight / (hight2 * hight2));
    return mbiCalculated
}

function mbiInterpret(mbi){
    if(mbi < 18.5){
        return 'Underweight'
    }else if (mbi >= 18.5 && mbi <= 24.9){
        return 'Normal Weight'
    }else if (mbi >= 25 && mbi <= 29.9){
        return 'Overweight'
    }else if(mbi >= 30){
        return 'Obesity'
    }else{
        return false
    }
}

function doer(){
    let value =  mbiInterpret(mbi());
    let showAnswer = document.getElementById('answerbox')
    showAnswer.classList.replace('answerbox','showAnswerBox')

    for (let i = 0; i < mbiGuidelines.length; i++){
    if(mbiGuidelines[i].category ==  value){
        document.getElementById('fast').innerHTML = value
        document.getElementById('nutrition').innerHTML = mbiGuidelines[i].recommendations.nutrition
        document.getElementById('exercise').innerHTML = mbiGuidelines[i].recommendations.exercise
        document.getElementById('medical').innerHTML = mbiGuidelines[i].recommendations.medical
        break;
    }
}  
}


