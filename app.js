const results = document.querySelector(".results");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six");
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const zero = document.querySelector(".zero")
const dot = document.querySelector(".dot");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const doubleZero = document.querySelector(".doublezero");
const percent = document.querySelector(".percent");


let answers = undefined;
let array = [];
let coin = true;
results.textContent = "";


const isNumber = (e) => {
  if(!isNaN(answers) === true){
    results.textContent = "";
  }
}


const numberOne = () => {
  isNumber()
  answers = undefined;
  results.textContent += one.value;  
  array.push(one.value); 
  
}

const numberTwo = () => {
  isNumber()
  answers = undefined;
  results.textContent += two.value; 
  array.push(two.value);
}

const numberThree = () => {
  isNumber()
  answers = undefined;
  results.textContent += three.value;
  array.push(three.value);
}

const numberFour = () => {
  isNumber()
  answers = undefined;
  results.textContent += four.value;  
  array.push(four.value);
 }

const numberFive = () => {
  isNumber()
  answers = undefined;
  results.textContent += five.value;  
  array.push(five.value);
}

const numberSix = () => {
  isNumber()
  answers = undefined;
  results.textContent += six.value;  
  array.push(six.value);
}

const numberSeven = () => {
   isNumber()
   answers = undefined;
   results.textContent += seven.value;
   array.push(seven.value);
}

const numberEight = () => {
  isNumber()
  answers = undefined;
  results.textContent += eight.value; 
  array.push(eight.value);
} 

const numberNine = () => {
  isNumber()
  answers = undefined;
  results.textContent += nine.value; 
  array.push(nine.value);
}

const numberZero = () => {
  isNumber()
  answers = undefined;
  results.textContent += zero.value; 
  array.push(zero.value);  
}


const addition = () => {
  answers = undefined;
    if(array.length !== 0){
      if((array.slice(-1) != '+') && (array.slice(-1) != '%') && (array.slice(-1) != '-') && (array.slice(-1) != '*') && (array.slice(-1) != '/')){
      results.textContent += plus.value;
      array.push(plus.value);
      coin = true;
     }
   }  
 }
  
const subtraction = () => {
  answers = undefined;
  if((array.slice(-1) != '-') && (array.slice(-1) != '.')){
     results.textContent += minus.value;
     array.push(minus.value);
     coin = true;
  }
}

const multiplication = () => {
  answers = undefined
  if(array.length !== 0){
    if((array.slice(-1) != '+') && (array.slice(-1) != '%') && (array.slice(-1) != '-') && (array.slice(-1) != '*') && (array.slice(-1) != '/')){
       results.textContent += multiply.value; 
       array.push(multiply.value);
       coin = true;
     }
   }
 }

const division = () => {
  answers = undefined;
  if(array.length !== 0){
    if((array.slice(-1) != '+') && (array.slice(-1) != '%')  && (array.slice(-1) != '-') && (array.slice(-1) != '*') && (array.slice(-1) != '/')){
      results.textContent += divide.value;
      array.push(divide.value);
      coin = true;
    }
  } 
}

const numberDot = () => {
  if(coin === true){
    coin = false;
    isNumber();
    answers = undefined;
    results.textContent += dot.value;
    array.push(dot.value);
  }
}

const equalsTo = () => {
  if(array.length !== 0){
    if((array.slice(-1) != '+') && (array.slice(-1) != '%') && (array.slice(-1) != '-') && (array.slice(-1) != '*') && (array.slice(-1) != '/')){
     answers = eval(results.textContent);
     results.textContent = answers;
     coin = true;
     if(isNaN(answers) === true || answers === undefined){
       results.textContent = "Expression Error";
       
      }
      
    }
  }
}

const clearAll = () => {
  results.textContent = "";
  array = [];
  coin = true;
}


const percentage = () => {
  answers = undefined;
   if(array.length !== 0){
    if((array.slice(-1) != '+') && (array.slice(-1) != '%') && (array.slice(-1) != '-') && (array.slice(-1) != '*') && (array.slice(-1) != '/')){
      results.textContent += percent.value;
      array.push(percent.value);
      coin = true;
    }
  }
}

const twoZeroes = () => {
  isNumber()
  answers = undefined;
  results.textContent += doubleZero.value; 
  array.push(doubleZero.value);
}



doubleZero.addEventListener('click', twoZeroes);
percent.addEventListener('click' , percentage);
one.addEventListener('click', numberOne);
two.addEventListener('click', numberTwo);
three.addEventListener('click', numberThree);
four.addEventListener('click', numberFour);
five.addEventListener('click', numberFive);
six.addEventListener('click', numberSix);
seven.addEventListener('click', numberSeven);
eight.addEventListener('click', numberEight);
nine.addEventListener('click', numberNine);
zero.addEventListener('click', numberZero);
plus.addEventListener('click', addition);
minus.addEventListener('click', subtraction);
multiply.addEventListener('click', multiplication);
divide.addEventListener('click', division);
equals.addEventListener('click', equalsTo);
dot.addEventListener('click', numberDot);
clear.addEventListener('click', clearAll);