'use strict'

let words = ['Lorem', 'ipsum,', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Commodi', 'at', 'aliquid', 'est', 'perspiciatis', 'porro', 'deleniti', 'recusandae', 'quis', 'ex', 'ab', 'iste', 'quasi', 'odio', 'ad,', 'eius', 'soluta', 'excepturi', 'illo', 'similique', 'magnam', 'fugiat.', 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur,', 'adipisicing', 'elit.', 'Suscipit,', 'dolores', 'ipsum', 'dignissimos', 'perspiciatis', 'nostrum', 'molestias,', 'eius', 'quam', 'quasi', 'commodi', 'sint', 'labore', 'mollitia', 'beatae', 'corporis', 'animi,', 'excepturi', 'aspernatur', 'exercitationem', 'rem!', 'Ex?'];

let wrapperForWords = document.querySelector('.wordsWrapper');

for(let i = 0; i < words[0].length; i++) {
    wrapperForWords.innerHTML += `<letter>${words[0][i]}</letter>`
}
let letterTags = document.querySelectorAll('letter');
let letterNum = 0;
let letter = words[0][letterNum];

let randomWNum = 0;
document.addEventListener('keydown', (e) => {
    if(e.key === ' ') {
        SwitchWord();
    } else if(e.keyCode <= 47) {
        null;
    }else {
        watchLetter(e);
    }
});


const watchLetter = (ki) => {
    if (ki.key == letter) {
        letterTags[letterNum].classList.add('letterRight');
        letterNum += 1;
        letter = words[randomWNum][letterNum];
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