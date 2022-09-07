'use strict'

let words = ['Lorem', 'ipsum,', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Commodi', 'at', 'aliquid', 'est', 'perspiciatis', 'porro', 'deleniti', 'recusandae', 'quis', 'ex', 'ab', 'iste', 'quasi', 'odio', 'ad,', 'eius', 'soluta', 'excepturi', 'illo', 'similique', 'magnam', 'fugiat.', 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur,', 'adipisicing', 'elit.', 'Suscipit,', 'dolores', 'ipsum', 'dignissimos', 'perspiciatis', 'nostrum', 'molestias,', 'eius', 'quam', 'quasi', 'commodi', 'sint', 'labore', 'mollitia', 'beatae', 'corporis', 'animi,', 'excepturi', 'aspernatur', 'exercitationem', 'rem!', 'Ex?'];

let wrapperForWords = document.querySelector('.wordsWrapper');

for(let i = 0; i < words[0].length; i++) {
    wrapperForWords.innerHTML += `<letter>${words[0][i]}</letter>`
}
let letterTags = document.querySelectorAll('letter');
let letterNum = 0;
let letter = words[0][letterNum];
let letterType = true;
let typing = false;

let randomWNum = 0;

let timerId;
let timerIdOut;
let timer = document.querySelector('.timer');
let WPMres = document.querySelector('.WPMres');
let seconds;
let result = 0;
let correctLetter = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !typing) {
        SwitchWord();
        WPMres.textContent = '';
        timer.textContent = `60s`;
        typing = true;
        seconds = 59;
        timerId = setInterval(() => {timer.textContent = `${seconds}s`;seconds -= 1;}, 1000);
        timerIdOut = setTimeout(() => { 
            clearInterval(timerId); 
            typing = false;
            letterType=true;
            timer.textContent = '';
            WPMres.textContent = `${Math.ceil(result/5)} wpm | correct ${Math.round(correctLetter/result*100, 0)}%`;
            correctLetter = 0;
            result = 0;
        }, 60000);
    } else if (e.key === 'Escape') {
        typing = false;
        letterType=true;
        clearInterval(timerId);
        clearTimeout(timerIdOut);
    }

    if (typing) {
        if(e.key === ' ') {
            SwitchWord();
            letterType = true;
        } else if(e.keyCode <= 47) {
            null;
        }else if (letterType) {
            watchLetter(e);
            result+=1;
            if (words[randomWNum].length === letterNum) {
                letterType = false;
            }
        }
    }
});


const watchLetter = (ki) => {
    if (ki.key == letter) {
        letterTags[letterNum].classList.add('letterRight');
        letterNum += 1;
        letter = words[randomWNum][letterNum];
        correctLetter+=1;
    } else if(ki.key != letter) {
        letterTags[letterNum].classList.add('letterWorth');
        letterNum += 1;
        letter = words[randomWNum][letterNum];
    }
}

const SwitchWord = () => {
    randomWNum = Math.floor(Math.random() * (words.length - 1 + 1));
    wrapperForWords.innerHTML = ''
    for(let i = 0; i < words[randomWNum].length; i++) {
        wrapperForWords.innerHTML += `<letter>${words[randomWNum][i]}</letter>`
    }
    letterTags = document.querySelectorAll('letter');
    letterNum = 0;
    letter = words[randomWNum][letterNum];
}