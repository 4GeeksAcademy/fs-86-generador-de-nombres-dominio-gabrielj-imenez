/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'raccon'];

for( let g of pronoun){
  for( let m of adj){
    for(let h of noun){
      console.log(`${g}${m}${h}.com`);
    }
  }
}


let pronoun1 = ['the', 'our', 'your'];
let adj1 = ['great', 'big', 'amazing'];
let noun1 = ['jogger', 'raccon', 'fox'];
let dominio1 = ['.com', '.es', '.co', '.net'];

const newpronoun1 =  pronoun1.map( (pronoun2) => {
  adj1.map( (adj2) => {
    noun1.map( (noun2) => { 
     dominio1.map( (dominio2) => {
      console.log(`${pronoun2}${adj2}${noun2}${dominio2}`);   
     });
    });
  } );
});
