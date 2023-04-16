const btn_confirm= document.querySelector(".confirm");
const container_confirm= document.querySelector(".container-check__confirm");
const formu = document.querySelector('.form');
const input= document.querySelectorAll('input');
const card_number=document.querySelector('.Cards__front--number');
const card_number_input=document.querySelector('.input_card_front');
const defaultValue = card_number.innerHTML;
const numberWrong=document.querySelector('.form__numberWrong');
const input_cardFront=document.querySelector('.input_card_front');
const nameUser=document.querySelector('.name');
const CardsFrontname=document.querySelector('.Cards__front--data-name');
const defaultUser=CardsFrontname.innerHTML;
const CardsFrontDate=document.querySelector('.Cards__front--date')
const dataMonth=document.querySelector('.month');
const dataYear=document.querySelector('.year')
const CardsNumberBack=document.querySelector('.Cards__back--number');
const defaultNumberBack=CardsNumberBack.innerHTML;

const dateWrong=document.getElementsByClassName('complete')
const dateWrongMonth=document.querySelector('.expmonth')
const dateWrongYear=document.querySelector('.expYear')
const dateWrongCvc=document.querySelector('.expCvc')
const dataWrongUser=document.querySelector('.user')

const spanMonth=document.querySelector('.span_month');
const defaultMonth=spanMonth.innerHTML;
const spanYear=document.querySelector('.span_year');
const defaultYear=spanYear.innerHTML;
const inputCvc=document.querySelector('.cvc');

let valid = true;

console.log(dateWrong);

card_number_input.addEventListener('input',()=>{
  cardNumber()

})

nameUser.addEventListener('input',()=>{
  cardName()
  
})

dataMonth.addEventListener('input',()=>{
  monthDate()
})

dataYear.addEventListener('input',()=>{
  yearDate()
})

inputCvc.addEventListener('input',()=>{
  numbeBack()
})



btn_confirm.addEventListener("click",(e)=>{
  e.preventDefault();

  

  if(nameUser.value=="" || cardName()){
    dateWrong[0].textContent=`can't be blank`;
    valid=false
  }
  
  if(input_cardFront.value=='' || cardNumber()){
    dateWrong[1].textContent=`can't be blank`;
    valid=false;
  }

  if(dataMonth.value=='' ||  monthDate()){
    dateWrong[2].textContent=`can't be blank`;
    valid=false;
  }
  if(inputCvc.value=='' || numbeBack()){
    dateWrong[4].textContent=`can't be blank`;
    valid=false;
  }
  if(dataYear.value=='' || yearDate()){
    dateWrong[3].textContent=`can't be blank`;
    valid=false;
  }

  
  
  if(valid){
    formu.classList.toggle('invisible');
    container_confirm.classList.toggle('invisible');
    
  }
  

})  



// funciones


function cardNumber(){
  
  const val =card_number_input.value;
  const valReplace=val.replace(/\s+/g,"");
  if(!isNaN(valReplace)){
  card_number.textContent=valReplace.replace(/(.{4})/g, '$1 ');
  valid=true;
  }

  if(isNaN(valReplace)){
    numberWrong.textContent='wrong format,number only';
    input_cardFront.style.border = "1px solid red";
    valid=false;
  }if(val.length==0){
    card_number.textContent=defaultValue;
    numberWrong.textContent='';
    input_cardFront.style.border = "1px solid hsl(270, 3%, 87%)";
    valid=false;
  }
  

}

function cardName(){

  const name = nameUser.value;
  

  if(name.length==0){
    dataWrongUser.textContent='';
    CardsFrontname.textContent=defaultUser;
    valid=false;
  }else{
    CardsFrontname.textContent=name.toUpperCase();
    dataWrongUser.textContent='';
    valid=true;
  }
  

}

function monthDate(){
  const date = dataMonth.value;

  if(!isNaN(date)){
    spanMonth.textContent=date;
    dateWrongMonth.textContent='';
    valid=true;
  }
  if(isNaN(date)){
    spanMonth.textContent=defaultMonth;
    dateWrongMonth.textContent="number only";
    dataMonth.style.border = "1px solid red";
    valid=false;
  }
  if(date.length==0){
    spanMonth.textContent=defaultMonth;
    dataMonth.style.border = "1px solid hsl(270, 3%, 87%)";
    valid=false;
  }

}


function yearDate(){
  const date = dataYear.value;

  if(!isNaN(date)){
    spanYear.textContent=date;
    dateWrongYear.textContent='';
    valid=true;
  }
  if(isNaN(date)){
    spanYear.textContent=defaultYear;
    dateWrongYear.textContent="number only";
    dataYear.style.border = "1px solid red";
    valid=false;
  }
  if(date.length==0){
    spanYear.textContent=defaultYear;
    dataYear.style.border = "1px solid hsl(270, 3%, 87%)";
    valid=false;
  }

}


function numbeBack(){
  const date = inputCvc.value;

  if(!isNaN(date)){
    CardsNumberBack.textContent=date
    dateWrongCvc.textContent='';
    valid=true;
  }
  if(isNaN(date)){
    CardsNumberBack.textContent=defaultNumberBack;
    dateWrongCvc.textContent="number only";
    inputCvc.style.border = "1px solid red";
    valid=false;

  }
  if(date.length==0){
    CardsNumberBack.textContent=defaultNumberBack;
    inputCvc.style.border = "1px solid hsl(270, 3%, 87%)";
    valid=false;
  }
}




