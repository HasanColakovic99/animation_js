let prviNaslov = document.querySelector('.section1 h1'); // ANIMIRANI TEKST

let prviNaslovSlovo = document.querySelector('.section1 h1').textContent;

prviNaslov.innerHTML = '';
// Želim dodati animaciju za svako slovo
let slovo = prviNaslovSlovo.split('');

for (let i = 0; i < slovo.length; i++) {
    if (slovo[i] == ' ') {
        slovo[i] = "&nbsp;";
    }
    prviNaslov.innerHTML += `<span>${slovo[i]}</span>`;
}

let span = prviNaslov.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {
    let pojedinacnoSlovo = span[k];

    pojedinacnoSlovo.classList.add('animacija');

    k++;


    if (k === span.length) {
        clearInterval(interval);
    }

}, 80);


let borderLinija = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {

    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1;
    }
    else {
        animationWidth += 1;
    }

    if (animationWidth >= 100) {
        animationWidth = 100;
    }

    if (animationWidth <= 0) {
        animationWidth = 0;
    }
    borderLinija.style.width = animationWidth + '%';

    this.oldScroll = this.scrollY;


    // let lijevaSlika = document.querySelector('.slideFromLeft');
    // let desnaSlika = document.querySelector('.slideFromRight');

    // lijevaSlika.classList.add('animated');
    // desnaSlika.classList.add('animated');
}