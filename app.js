'USE STRICT';
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
        id: 1
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
        id: 2
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
        id: 3
      },
      {
        name: 'pizza',
        img: 'images/pizza.png',
        id: 4
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png',
        id: 5
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png',
        id: 6
      },
      {
        name: 'fries',
        img: 'images/fries.png',
        id: 1
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
        id: 2
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
        id: 3
      },
      {
        name: 'pizza',
        img: 'images/pizza.png',
        id: 4
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png',
        id: 5
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png',
        id: 6
      }
];

var buttons = document.querySelectorAll('button');
buttons[0].addEventListener('click', background);

buttons[1].addEventListener('click', refreshPage);

function refreshPage (){
  location.reload();
}

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');

function background(){
    buttons[0].classList.toggle('cardHidden');
    for(let i =0;i<cardArray.length; i++)
    {
        const backgroundCard = document.createElement('img');
        backgroundCard.classList.toggle('freezeItem');
        backgroundCard.setAttribute('cardId', i);
        backgroundCard.setAttribute('src', cardArray[i].img);
        setTimeout(() => {
        backgroundCard.setAttribute('src','images/blank.png');
        backgroundCard.classList.toggle('freezeItem');
        }, 1500);

        grid.appendChild(backgroundCard);
        backgroundCard.addEventListener('click',flipcard);
    }
}

let chosenCard = [];
let chosenCardId = [];
let cardsFound = [];
const score = document.getElementById('score');
const failedAttempt = document.getElementById('fail');

function flipcard() {
    const currentCardId = this.getAttribute('cardId');
    chosenCardId.push(currentCardId);
    console.log(currentCardId);

    this.setAttribute('src', cardArray[currentCardId].img);
    chosenCard.push(cardArray[currentCardId].img);
    this.classList.toggle('freezeItem');
    if(chosenCard.length == 2){
      const firstCardId = chosenCardId[0];
      
        if(chosenCard[0] === chosenCard[1])
        {
            setTimeout(() => { 
              const imageNodes = document.querySelectorAll('img');
              console.log(imageNodes);
              imageNodes[firstCardId].setAttribute('src','images/white.png');
              //imageNodes[firstCardId].setAttribute('class','freezeItem');
              this.setAttribute('src','images/white.png');
              //this.setAttribute('class','freezeItem');
              cardsFound.push(imageNodes);
              score.textContent = cardsFound.length;
              if(cardsFound.length == cardArray.length/2){
                alert("Congo!!! You found it all.");
                buttons[1].classList.toggle('cardHidden');
              }
            }, 500);
        } else {
            setTimeout(() => {
              const imageNodes = document.querySelectorAll('img');
              console.log(imageNodes);
              imageNodes[firstCardId].setAttribute('src','images/blank.png');
              this.setAttribute('src','images/blank.png');
              imageNodes[firstCardId].classList.toggle('freezeItem');
              this.classList.toggle('freezeItem');
              failedAttempt.textContent = parseInt(failedAttempt.textContent) + 1;
            }, 500);
        }
        chosenCard.length = 0;
        chosenCardId.length = 0;
             
    }
    
    console.log(chosenCard);
}