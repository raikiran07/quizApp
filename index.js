'use-strict';
const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");
const count = document.querySelector("#count");
const ul = document.querySelector("#list");
let num = 0;

//increment function
function increment(){
    num++;
    count.innerHTML = num;
    //creating element using js
    const li = document.createElement("li");
    li.innerHTML = '<b>Sentence</b>' + ' ' + num;
    // const text = document.createTextNode('Sentence' + ' ' + num);
    //appending element using js
    // li.appendChild(text);
    ul.appendChild(li);
    if(num%2==0){
        li.style.background = 'red';
    }
    else{
        li.style.background = 'yellow';
    }
}


//decrement function
function decrement(){
    num--;
    count.innerHTML = num;
}


btnIncrement.addEventListener("click",increment);
btnDecrement.addEventListener("click",decrement);

//creating an element using js

const arr = [['penny',1],['dollar',5]];
const arrObject = {};

//converting array into object
arr.forEach((unit)=>{
    arrObject[unit[0]] = unit[1];
})



//CASH REGISTER PROBLEM

const DENOMINATION = [
    ['PENNY', 1],
	['NICKEL', 5],
	['DIME', 10],
	['QUARTER', 25],
	['ONE', 100],
	['FIVE', 500],
	['TEN', 1000],
	['TWENTY', 2000],
	['ONE HUNDRED', 10000]
];

function checkCashRegister(price, cash, cid) {
	let amountToReturn = Math.round(cash*100)-Math.round(price*100);
    let cashOnHand = {};
    let cashToReturn = {};

    cid.forEach((amount)=>{
        cashOnHand[amount[0]]=Math.round(amount[1]*100);
    })

    let index = DENOMINATION.length - 1;

    while(index>=0){
       
        // let denomination = DENOMINATION[index];
        let moneyValue = DENOMINATION[index][1];
        let moneyName = DENOMINATION[index][0];
        

        if(amountToReturn - moneyValue > 0){
            // console.log(denomination[1]);
            // cashToReturn[denomination[0]]=denomination[1];
           cashToReturn[moneyName] = 0; 
           while(cashOnHand[moneyName]>0 && amountToReturn - moneyValue >= 0){
               
            // console.log(amountToReturn,cashToReturn,cashOnHand[moneyName]);
               cashOnHand[moneyName] -= moneyValue;
               amountToReturn -= moneyValue;
               cashToReturn[moneyName] += moneyValue;

           }
        }

        // console.log(amountToReturn,cashToReturn);
      
        index -= 1;
        
        
        
    }
    
    // console.log(amountToReturn);

    if(amountToReturn===0){
        let isRegisterEmpty = true;
        Object.keys(cashOnHand).forEach(function(moneyType){
            if(cashOnHand[moneyType] > 0){
                isRegisterEmpty = false;
            }
        })

        if(isRegisterEmpty){
            return {status:"closed",change:cid};
        }
        else{
            
        let changeArray = [];
        Object.keys(cashToReturn).map(function(moneyType){
            if(cashToReturn[moneyType]>0){
                changeArray.push([moneyType,cashToReturn[moneyType]/100]);
            }
           
            // console.log(moneyType);
        })
        // console.log({status:"OPEN",change : changeArray});
        return {status:"OPEN",change : changeArray};
        }


    }

    return {status:"INSUFFICIENT_FUNDS",change : []};
    
   
    // console.log(cashOnHand);
    // console.log(amountToReturn);
	
}

const cid =  [
    ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

console.log(checkCashRegister(19.5, 20,cid));

//challenge 2 pallindrom of string

let answer = '1 eye for of 1 eye.';
answer = answer.replace(/[^a-z]/gi, '');
answer = answer.toLowerCase();

console.log(answer);
// [^a-z] matches everything but a-z
// the flag `g` means it should match multiple occasions
// the flag `i` is in case sensitive which means that `A` and `a` is treated as the same character ( and `B,b`, `C,c` etc ) 




function isPallindrom(str){
    let reverse = "";
    let index = str.length-1;
    
    for(let i=index;i>=0;i--){
        reverse += str[i];
        
    }
    // console.log(reverse);
    if(str===reverse){
        return true;
    }

    return false;
    
}


// console.log(`original = ${answer}, reverse = ${reverse}`);
console.log(isPallindrom(answer));


// console.log(cid);

//pallindrome using regular expression javascript
function palindrome(str) {
	const regex = /[W.,_\-\\:()/ ]/g;
    const dummyStr = str.toLowerCase().replace(regex,'');
    const reverseStr = dummyStr.split('').reverse().join('');
    console.log(reverseStr);
    if(reverseStr===dummyStr) return true;

    return false;
}

console.log(palindrome('0_0 (: /-\ :) 0-0'));

//challenge 3 - ROT13 encoding

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
console.log(str.length);

const cipherStr = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
console.log(cipherStr.length);

//challenge 4 - ceaser cipher ROT13 encoding

function cipher(userInput){
    const originalAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const cipherAlpha = 'OPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    return userInput.replace(/[a-z]/gi, letter => cipherAlpha[originalAlpha.indexOf(letter)])
}


console.log(cipher("Kiran"));


let userName = 'aA';
console.log(userName.replace(/a/gi,"b"));


//challenge - 5 interger to roman number conversion



const intNumber = 10;
function convertToRoman(num){
    const romanNumber = [
        ['X',10],
        ['IX',9],
        ['v',5],
        ['IV',4],
        ['I',1]
    ]
    let roman = "";
    for(x of romanNumber){
        while(num>=x[1]){
            roman += x[0];
            num -= x[1];
        }
       
    }

    return roman;
}


console.log(convertToRoman(14));

// function convertToRoman(num) {
// 	var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
//   for ( i in lookup ) {
//     // while ( num >= lookup[i] ) {
//     //   roman += i;
//     //   num -= lookup[i];
      
//     // }
//     console.log(i);
//   }
//   return roman;
// }

// console.log(convertToRoman(8));