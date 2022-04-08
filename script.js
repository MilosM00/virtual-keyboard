"use strict";


const buttonBackSpace = document.querySelector(`.backspace`);
const buttonEnter = document.querySelector(`.enter`);
const buttonSpace = document.querySelector(`.space`);
const shiftButton = document.querySelector(`.shift`);
const letterButton = document.querySelectorAll(`.letter`);

const buttonNumberOne = document.querySelector(`.number1`);
const buttonNumberTwo = document.querySelector(`.number2`);
const buttonNumberThree = document.querySelector(`.number3`);
const buttonNumberFour = document.querySelector(`.number4`);
const buttonNumberFive = document.querySelector(`.number5`);
const buttonNumberSix = document.querySelector(`.number6`);
const buttonNumberSeven = document.querySelector(`.number7`);
const buttonNumberEight = document.querySelector(`.number8`);
const buttonNumberNine = document.querySelector(`.number9`);
const buttonNumberZero = document.querySelector(`.number0`);

const buttonSymbolAngleOne = document.querySelector(`.symbol-angle1`);
const buttonSymbolAngleTwo = document.querySelector(`.symbol-angle2`);
const buttonSymbolMinus = document.querySelector(`.symbol-minus`);
const buttonSymbolEqual = document.querySelector(`.symbol-equal`);
const buttonSymbolCommaDot = document.querySelector(`.symbol-comma-dot`);
const buttonSymbolQuotes = document.querySelector(`.symbol-quotes`);
const buttonSymbolComma = document.querySelector(`.symbol-comma`);
const buttonSymbolDot = document.querySelector(`.symbol-dot`);
const buttonSymbolSlashOne = document.querySelector(`.symbol-slash1`);
const buttonSymbolSlashTwo = document.querySelector(`.symbol-slash2`);

let shift = true;

shiftButton.addEventListener(`click`, () =>{
    if(shift === false){
        letterButton.forEach(letter => {
            letter.textContent = letter.textContent.toLowerCase();
        });

        buttonNumberOne.textContent = `1`;
        buttonNumberTwo.textContent = `2`;
        buttonNumberThree.textContent = `3`;
        buttonNumberFour.textContent = `4`;
        buttonNumberFive.textContent = `5`;
        buttonNumberSix.textContent = `6`;
        buttonNumberSeven.textContent = `7`;
        buttonNumberEight.textContent = `8`;
        buttonNumberNine.textContent = `9`;
        buttonNumberZero.textContent = `0`;

        buttonSymbolAngleOne.textContent = `[`;
        buttonSymbolAngleTwo.textContent = `]`;
        buttonSymbolMinus.textContent = `-`;
        buttonSymbolEqual.textContent = `=`
        buttonSymbolCommaDot.textContent = `;`;
        buttonSymbolQuotes.textContent = `'`;
        buttonSymbolComma.textContent = `,`;
        buttonSymbolDot.textContent = `.`;
        buttonSymbolSlashOne.textContent = `\\`;
        buttonSymbolSlashTwo.textContent = `/`;
    }
    
    else if(shift === true){
        letterButton.forEach(letter => {
            letter.textContent = letter.textContent.toUpperCase();
        });
        
        buttonNumberOne.textContent = `!`;
        buttonNumberTwo.textContent = `@`;
        buttonNumberThree.textContent = `#`;
        buttonNumberFour.textContent = `$`;
        buttonNumberFive.textContent = `%`;
        buttonNumberSix.textContent = `^`;
        buttonNumberSeven.textContent = `&`;
        buttonNumberEight.textContent = `*`;
        buttonNumberNine.textContent = `(`;
        buttonNumberZero.textContent = `)`;

        buttonSymbolAngleOne.textContent = `{`;
        buttonSymbolAngleTwo.textContent = `}`;
        buttonSymbolMinus.textContent = `_`;
        buttonSymbolEqual.textContent = `+`
        buttonSymbolCommaDot.textContent = `:`;
        buttonSymbolQuotes.textContent = `"`;
        buttonSymbolComma.textContent = `<`;
        buttonSymbolDot.textContent = `>`;
        buttonSymbolSlashOne.textContent = `|`;
        buttonSymbolSlashTwo.textContent = `?`;
    }

    shift = !shift;
});