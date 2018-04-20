/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var szer = canvasElem.width, wys = canvasElem.height;

// kolor wypełnienia
ctx.fillStyle = "#20bf81";
// rysujemy prostokąt/kwadraty
// x, y, width, height
ctx.fillRect(25, 25, 100, 100);

// kolor obrysu
ctx.fillStroke = "#130216";
// drugi obrys prostokąta
ctx.strokeRect(30, 30, 100, 100);

// czyszczenia obszaru
ctx.clearRect(45, 45, 60, 60);

// rysowanie linii
// ctx.clearRect(0, 0, 400, 400);
ctx.fillStroke = "gray";
// console.log(canvasElem.width / 2, canvasElem.height / 2);
ctx.moveTo(0, 0);
ctx.lineTo(szer, wys);
ctx.moveTo(0, wys);
ctx.lineTo(szer, 0);
ctx.stroke();

// rysowanie koła
ctx.beginPath();
// x, y, radius, start, stop, true/false
ctx.arc(szer / 2, wys / 2, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(szer / 2, wys / 2, 90, 0, Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(200, 100, 70, 0, 2 * Math.PI);
ctx.stroke();


// tekst
ctx.lineWidth = 1;
ctx.font = "normal 20px Arial";
ctx.textBaseline = "middle";
ctx.textAlign = "left";
ctx.strokeText('Grafika w canvas', 70, 180);
