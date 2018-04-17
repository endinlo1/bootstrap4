/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas1');
const ctx = canvasElem.getContext('2d');

//rysujemy niebieski kwadrat
//x, y, width, height
ctx.fillRect(25,25,100,100);

//wycinamy jego srodek
ctx.clearRect(45,45,60,60);

//rysujemy obramowanie drugiego kwadratu
//x, y, width, height
ctx.strokeRect(50,50,50,50);

//określenie czcionki
ctx.font = "italic bold 30px Arial";
// wyrównanie tekstu w pionie: top, hanging, middle, alphabetic, ideographic, bottom
ctx.textBaseline = "middle";
// wypełniony tekst w x, y
ctx.fillText('Ala ma kota 1', 0, 145);

ctx.font = "italic bold 20px Arial";
ctx.textBaseline = "bottom";
// wyrównannie tekstu w poziomie: start, end, left, right, center
ctx.textAlign = "center";
// obrsowany tekst w x, y
ctx.strokeText('Ala ma kota 2', 70, 180);

ctx.font = "normal 10px Arial";
ctx.textBaseline = "top";
ctx.textAlign = "right";
ctx.strokeText('Ala ma kota 3', 80, 190);

const canvasElem2 = document.getElementById('canvas2');
const ctx2 = canvasElem2.getContext('2d');

ctx2.beginPath();
ctx2.moveTo(50, 20); //rysowanie zaczynamy od punktów 50,20 - tam więc przesuwamy nasze piórko
ctx2.lineTo(90, 70);
ctx2.lineTo(10, 70);
ctx2.lineTo(50, 20);
ctx2.stroke();
ctx2.fillText('a', 15, 40);
ctx2.fillText('c', 80, 40);
ctx2.fillText('b', 50, 85);
