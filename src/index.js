import { Domain } from "domain";

window.highlight = (element) => {
  element.style.background = 'black';
  element.style.color = 'white';
}

window.h = window.highlight;

window.toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

window.setPlayersStyle = () => {
  const players = document.querySelectorAll('li[data-type="player"]');
  const playersArr = Array.from(players);
  playersArr.forEach((el) => {
el.style.background = 'green';
el.style.color = 'white';
  });
}


window.setAliensStyle = () => {
  const aliens = document.querySelectorAll('li[data-type="alien"]');
  const aliensArr = Array.from(aliens);
  aliensArr.forEach((el) => {
el.style.background = 'orange';
el.style.color = 'red';
  });
}



window.setAllStyle = () => {
  window.setPlayersStyle();
  window.setAliensStyle();
}


window.setWantedBgColor = (type, background) => {
  // const elements = document.querySelectorAll('li[data-type="$(type)"]');
   const elements = document.querySelectorAll('li[data-type="' + type + '"]');
   const elementsArr = Array.from(elements);
   elementsArr.forEach((el) => {
     el.style.background = background;
   });
 }
 

 window.setAllTypesWantedBg= () => {
  window.setWantedBgColor('player', 'blue');
  window.setWantedBgColor('alien', 'brown');
  window.setWantedBgColor('predator', 'black');
  window.setWantedBgColor('other', 'red');
 }
 
  




 // dzien 10

 window.addSufixToHeaders = () => {
  const h1 = document.querySelector('.row h1');
  const h2 = document.querySelector('.row h2');
  const h3 = document.querySelector('.row h3');
  const h4 = document.querySelector('.row h4');

  h1.innerText = h1.innerText + ' SMTH';
  h2.innerText = h2.innerText + ' SMTH';
  h3.innerText = h3.innerText + ' SMTH';
  h4.innerText = h4.innerText + ' SMTH';
 }


 window.cloneHeared = () => {
  // document.querySelector() - znaleźć body
   // document.querySelector() - znaleźć h1
   //h1.cloneNode(true)
   //body.insertBefore(newh1, h1)

   const body = document.querySelector('body');
   const h1 = document.querySelector('h1');

   body.insertBefore(h1.cloneNode(true), h1);
   body.insertBefore(h1.cloneNode(true), h1);
   body.insertBefore(h1.cloneNode(true), h1);
 }