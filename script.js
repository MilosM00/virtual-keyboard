"use strict";


const buttonBackSpace = document.querySelector(`.backspace`);
const buttonEnter = document.querySelector(`.enter`);
const buttonSpace = document.querySelector(`.space`);
const shiftButton = document.querySelector(`.shift`);
const letterButton = document.querySelectorAll(`.letter`);
const displayText = document.querySelector(`.text`);

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

class Keyboard{
    constructor(displayText){
        this.displayText = displayText;
        this.clear();
    }

    clear(){
        this.text = ``;
    }

    delete(){
        this.text = this.text.slice(0, -1);
    }

    type(type){
        this.text = this.text + type;
    }

    updateAll(){
        this.displayText.textContent = this.text;
    }
}

const keyboard = new Keyboard(displayText);

let shift = true;

//////////////////////////////////////////////////
shiftButton.addEventListener(`click`, () =>{
    shift = !shift; // FIX THIS!
});
/////////////////////////////////////////////////

if(shift === true){
    letterButton.forEach(letter => {
        letter.textContent = letter.textContent.toLowerCase();

        letter.addEventListener(`click`, () =>{
            keyboard.type(letter.textContent);
            keyboard.updateAll();
        });
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

    buttonNumberOne.addEventListener(`click`, () =>{
        keyboard.type(`1`);
        keyboard.updateAll();
    });

    buttonNumberTwo.addEventListener(`click`, () =>{
        keyboard.type(`2`);
        keyboard.updateAll();
    });

    buttonNumberThree.addEventListener(`click`, () =>{
        keyboard.type(`3`);
        keyboard.updateAll();
    });

    buttonNumberFour.addEventListener(`click`, () =>{
        keyboard.type(`4`);
        keyboard.updateAll();
    });

    buttonNumberFive.addEventListener(`click`, () =>{
        keyboard.type(`5`);
        keyboard.updateAll();
    });

    buttonNumberSix.addEventListener(`click`, () =>{
        keyboard.type(`6`);
        keyboard.updateAll();
    });

    buttonNumberSeven.addEventListener(`click`, () =>{
        keyboard.type(`7`);
        keyboard.updateAll();
    });

    buttonNumberEight.addEventListener(`click`, () =>{
        keyboard.type(`8`);
        keyboard.updateAll();
    });

    buttonNumberNine.addEventListener(`click`, () =>{
        keyboard.type(`9`);
        keyboard.updateAll();
    });

    buttonNumberZero.addEventListener(`click`, () =>{
        keyboard.type(`0`);
        keyboard.updateAll();
    });

    buttonSymbolMinus.addEventListener(`click`, () =>{
        keyboard.type(`-`);
        keyboard.updateAll();
    });

    buttonSymbolEqual.addEventListener(`click`, () =>{
        keyboard.type(`=`);
        keyboard.updateAll();
    });

    buttonSymbolAngleOne.addEventListener(`click`, () =>{
        keyboard.type(`[`);
        keyboard.updateAll();
    });

    buttonSymbolAngleTwo.addEventListener(`click`, () =>{
        keyboard.type(`]`);
        keyboard.updateAll();
    });

    buttonSymbolCommaDot.addEventListener(`click`, () =>{
        keyboard.type(`;`);
        keyboard.updateAll();
    });

    buttonSymbolQuotes.addEventListener(`click`, () =>{
        keyboard.type(`'`);
        keyboard.updateAll();
    });

    buttonSymbolSlashOne.addEventListener(`click`, () =>{
        keyboard.type(`\\`);
        keyboard.updateAll();
    });

    buttonSymbolComma.addEventListener(`click`, () =>{
        keyboard.type(`,`);
        keyboard.updateAll();
    });

    buttonSymbolDot.addEventListener(`click`, () =>{
        keyboard.type(`.`);
        keyboard.updateAll();
    });

    buttonSymbolSlashTwo.addEventListener(`click`, () =>{
        keyboard.type(`/`);
        keyboard.updateAll();
    });
}

else if(shift === false){
    letterButton.forEach(letter => {
        letter.textContent = letter.textContent.toUpperCase();

        letter.addEventListener(`click`, () =>{
            keyboard.type(letter.textContent);
            keyboard.updateAll();
        });
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

    buttonNumberOne.addEventListener(`click`, () =>{
        keyboard.type(`!`);
        keyboard.updateAll();
    });

    buttonNumberTwo.addEventListener(`click`, () =>{
        keyboard.type(`@`);
        keyboard.updateAll();
    });

    buttonNumberThree.addEventListener(`click`, () =>{
        keyboard.type(`#`);
        keyboard.updateAll();
    });

    buttonNumberFour.addEventListener(`click`, () =>{
        keyboard.type(`$`);
        keyboard.updateAll();
    });

    buttonNumberFive.addEventListener(`click`, () =>{
        keyboard.type(`%`);
        keyboard.updateAll();
    });

    buttonNumberSix.addEventListener(`click`, () =>{
        keyboard.type(`^`);
        keyboard.updateAll();
    });

    buttonNumberSeven.addEventListener(`click`, () =>{
        keyboard.type(`&`);
        keyboard.updateAll();
    });

    buttonNumberEight.addEventListener(`click`, () =>{
        keyboard.type(`*`);
        keyboard.updateAll();
    });

    buttonNumberNine.addEventListener(`click`, () =>{
        keyboard.type(`(`);
        keyboard.updateAll();
    });

    buttonNumberZero.addEventListener(`click`, () =>{
        keyboard.type(`)`);
        keyboard.updateAll();
    });

    buttonSymbolMinus.addEventListener(`click`, () =>{
        keyboard.type(`_`);
        keyboard.updateAll();
    });

    buttonSymbolEqual.addEventListener(`click`, () =>{
        keyboard.type(`+`);
        keyboard.updateAll();
    });

    buttonSymbolAngleOne.addEventListener(`click`, () =>{
        keyboard.type(`{`);
        keyboard.updateAll();
    });

    buttonSymbolAngleTwo.addEventListener(`click`, () =>{
        keyboard.type(`}`);
        keyboard.updateAll();
    });

    buttonSymbolCommaDot.addEventListener(`click`, () =>{
        keyboard.type(`:`);
        keyboard.updateAll();
    });

    buttonSymbolQuotes.addEventListener(`click`, () =>{
        keyboard.type(`"`);
        keyboard.updateAll();
    });

    buttonSymbolSlashOne.addEventListener(`click`, () =>{
        keyboard.type(`|`);
        keyboard.updateAll();
    });

    buttonSymbolComma.addEventListener(`click`, () =>{
        keyboard.type(`<`);
        keyboard.updateAll();
    });

    buttonSymbolDot.addEventListener(`click`, () =>{
        keyboard.type(`>`);
        keyboard.updateAll();
    });

    buttonSymbolSlashTwo.addEventListener(`click`, () =>{
        keyboard.type(`?`);
        keyboard.updateAll();
    });
}

buttonBackSpace.addEventListener(`click`, () =>{
    keyboard.delete();
    keyboard.updateAll();
});

buttonSpace.addEventListener(`click`, () =>{
    keyboard.type(` `);
    keyboard.updateAll();
});

buttonEnter.addEventListener(`click`, () =>{
    keyboard.type(`\n`);
    keyboard.updateAll();
});