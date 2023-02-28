// // Episode 1 


// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

// // Output = 'The murderer is Miss Scarlet'
// // scenario.murderer = 'Miss Scarlet' 
// // calling the declareMurderer function returns scenario.murderer using string concatenation. 
// // 'verdict' is set to call the declareMurderer function.




// //Episode 2


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // Will not run - since const variable 'murderer' is defined as 'Professor Plum', it can't be redefined as 'Mrs. Peacock'. 



// // Episode 3 

// let murderer = 'Professor Plum';    // murderer = professor plum - let variable can be reassigned - not in a variable - GLOBAL SCOPE

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';   //murderer re-defined as Mrs Peacock - inside a function (LOCAL/FUNCTION SCOPE)
//   return `The murderer is ${murderer}.`;  //The murderer is Mrs Peacock
// }

// const firstVerdict = declareMurderer();        //Call declareMurderer function - murderer is Mrs Peacock inside this function. 
// console.log('First Verdict: ', firstVerdict);  //First verdict: The murderer is Mrs. Peacock 

// const secondVerdict = `The murderer is ${murderer}.`; //Murderer is called outside of a function - refers to 'global scope'
// console.log('Second Verdict: ', secondVerdict); //Second verdict: The murderer is Professor Plum 

// //Output:
// //First Verdict:  The murderer is Mrs. Peacock - because declareMurderer function is called - containing murderer = Mrs. Peacock. 
// // Second Verdict:  The murderer is Professor Plum. - because there is no function called - 'murderer' is professor plum - global scope. 




// // Episode 4 

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock'; //global variables 

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard'; //re-assign suspectThree locally 
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`; //output: Miss Scarlet, Prof Plum, Colenel Mustard (susthree is now locally defined)
// }

// const suspects = declareAllSuspects();
// console.log(suspects);   //output: Miss Scarlet, Prof Plum, Colonel Mustard  
// console.log(`Suspect three is ${suspectThree}.`);  //Mrs. Peacock 

// // Output: 
// // The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// // Suspect three is Mrs. Peacock



// // Episode 5 

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'            //defined within block - local to 'scenario' 
// };

// const changeWeapon = function(newWeapon) {    //create function 'newWeapon', called by variable 'changeWeapon'.
//   scenario.weapon = newWeapon;                // Function accesses and replaces scenario.weapon - can do since it access 'scenario'. 
// }                                    

// const declareWeapon = function() {          //Create function 'declareWeapon' - returns weapon provided in scenario variable 
//   return `The weapon is the ${scenario.weapon}.`;    //'The weapon is the cadle stick' 
// }                                 

// //console.log(scenario.weapon);

// changeWeapon('Revolver');  //call changeWeapon - replace scenario.weapon with 'revolver' 
// const verdict = declareWeapon();  // create variable called 'verdict' that calls declareWeapon 
// console.log(verdict); 

// //Output: 
// //The Weapon is the Revolver. 



// // Episode 6 

// let murderer = 'Colonel Mustard';   //declare variable 'murderer' -  changeable since this is 'let' rather than 'const'

// const changeMurderer = function() {   //function changeMurderer - changes initial 'murderer' since 'let' is used - murderer = Mr Green 
//   murderer = 'Mr. Green';

//   const plotTwist = function() {      //function within function - plotTwist - murderer changed to 'Mrs White'. Allowed since within 'changeMurderer' function. 
//     murderer = 'Mrs. White';
//   }

//   plotTwist();                    //call plotTwist - murderer = 'Mrs White' 
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;   //the murderer is currently Colonel Mustard - accessing global scope. 
// }      

// //console.log(declareMurderer())

// changeMurderer();    //change murderer function is invoked - murderer is now Mrs White 
// const verdict = declareMurderer();   
// console.log(verdict);

// //Output:
// //'The murderer is Mrs White' 




//Episode 7 

let murderer = 'Professor Plum';    //declare variable 'murderer' -  changeable since this is 'let' rather than 'const'

const changeMurderer = function() {  //create function changeMurderer, murderer is now Mr Green - const variable. 
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`; //murderer here currently Professor Plum
}

//console.log(declareMurderer()); output: murderer is Proffessor Plum 

changeMurderer();                 //let murderer = professor plum now updated to const murderer Mr Green. Colonel Mustard/Miss Scarlet are 'let' - block scoped, doesn't exist outside the block. 
const verdict = declareMurderer();
console.log(verdict);

//Output: 
//The murderer is Mr. Green


// // Episode 8

// const scenario = {            //set up initial scenario 
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {         //change scenario - accessing scenario. - so can update -scenario.room now = Dining room.
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) { //if room === room, change murderer to colonel mustard. 'dining room' === 'dining room' - scenario.murder update to Colonel Mustard
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {    //if murderer === murderer, change scenario.weapon to 'candle stick' - applies - scenario.weapon = 'candle stick' 
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');   
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.` //output currently 'The weapon is Lead Pipe. 
// }

// //console.log(declareWeapon());

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// // Output: 
// //The weapon is Candle Stick



// //Episode 9 

// let murderer = 'Professor Plum';    //changeable variable - murderer currently = Prof Plums 

// if (murderer === 'Professor Plum') {    //murderer does currently = prof plum, changed to Mrs Peacock - but that only exists within the if statement.
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {    //murderer is still Professor Plum - as Mrs Peacock only exists in the above if statement. 
//   return `The murderer is ${murderer}.`;    
// }

// const verdict = declareMurderer();
// console.log(verdict);

// // Output: 
// // The murderer is Professor Plum. 

