const principal = document.querySelector("#principalValue")
const interestRate = document.querySelector("#intRateValue")
const numOfComp = document.querySelector("#numOfCompValue")
const numOfYears = document.querySelector("#yearsValue")
const resultSpan = document.querySelector("#outCome")

function calcComp(){
  const principalCalc = principal.value;
  const interestRateCalc = interestRate.value;
  const numOfCompCalc = numOfComp.value;
  const numOfYearsCalc = numOfYears.value;

  const outComeCalc = 
    principalCalc * (1 + (interestRateCalc / numOfCompCalc)) ** (numOfCompCalc * numOfYearsCalc);
  
  resultSpan.textContent = outComeCalc;
}

function haveNum(){
  
}

function duringCalcu() {

}

principal.addEventListener('input', calcComp);
interestRate.addEventListener('input', calcComp);
numOfComp.addEventListener('input', calcComp);
numOfYears.addEventListener('input', calcComp);