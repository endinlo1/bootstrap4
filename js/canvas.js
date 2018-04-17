/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

//rysujemy niebieski kwadrat
//x, y, width, height
ctx.fillRect(25,25,100,100);

//wycinamy jego srodek
ctx.clearRect(45,45,60,60);

//rysujemy obramowanie drugiego kwadratu
//x, y, width, height
ctx.strokeRect(50,50,50,50);
