// items

const item = document.querySelector(".item-list")

let arr = [
  {imgName : "X7 MCB FP.png",
  imgContent : "X7 MCB FP"},
  {imgName : "WIPEO FIANZA 63Z.webp",
  imgContent : "WIPEO FIANZA 63Z"},
  {imgName : "WIPRO FIANZE 25Z.webp",
  imgContent : "WIPRO FIANZE 25"},
  {imgName : "WIPRO MCB.webp",
  imgContent : "WIPRO MCB"},
  {imgName : "3TF30 SIEMENS CONTACTOR.webp",
  imgContent : "3TF30 SIEMENS CONTACTOR"},
  {imgName : "ABB and Legrand MCB.jpg",
  imgContent : "ABB and Legrand MCB"},
  {imgName : "BLACK MCCB 100 AMP.webp",
  imgContent : "BLACK MCCB 100 AMP"},
  {imgName : "CHINA MCB.webp",
  imgContent : "CHINA MCB"},
  {imgName : "EuroControls Din Type 25 Amps 2 Pole-2NO Polypropylene Modular Power.jpg",
  imgContent : "Pole-2NO Polypropylene"},
  {imgName : "EuroControls Din Type 32 Amps 2 Pole Modular Power Contactor 220 volt.jpg",
  imgContent : "Pole Modular Power"},
  {imgName : "HAVELLS DHM MCB.jpg",
  imgContent : "HAVELLS DHM MCB"},
  {imgName : "Legrand MCB.webp",
  imgContent : "Legrand MCB"},
  {imgName : "Legrand MCCB.webp",
  imgContent : "Legrand MCCB"},
  {imgName : "MCB FP D CURVE.png",
  imgContent : "MCB FP D CURVE"},
  {imgName : "MCB pad.webp",
  imgContent : "MCB pad"},
  {imgName : "MCB SP D CURVE.png",
  imgContent : "MCB SP D CURVE"},
  {imgName : "MCCB 100 AMP 3 POLE.webp",
  imgContent : "MCCB 100 AMP 3 POLE"},
  {imgName : "MCD DP D CURVE.png",
  imgContent : "MCD DP D CURVE"},
  {imgName : "Miniature circuit breaker 2.webp",
  imgContent : "Miniature circuit breaker 2"},
  {imgName : "Miniature circuit breaker 3.JPG",
  imgContent : "Miniature circuit breaker 3"},
  {imgName : "miniature circuit breaker.PNG",
  imgContent : "miniature circuit breaker"},
  {imgName : "MNK Type 3 pole.webp",
  imgContent : "MNK Type 3 pole.webp"},
  {imgName : "MNX 18 Contactors.webp",
  imgContent : "MNX 18 Contactors.webp"},
  {imgName : "MPCB  CIRCUIT BREAKER.webp",
  imgContent : "MPCB  CIRCUIT BREAKER"},
  {imgName : "MPCB TCMS32S.webp",
  imgContent : "MPCB TCMS32S"},
  {imgName : "Schneider Electric 8A contractor 3.webp",
  imgContent : "Schneider Electric 8A"},
  {imgName : "SCHNEIDER MCB.webp",
  imgContent : "SCHNEIDER MCB"},
  {imgName : "SIEMENS 0.6-1A.jpg",
  imgContent : "SIEMENS 0.6-1A"},
  {imgName : "SIEMENS MPCB.jpg",
  imgContent : "SIEMENS MPCB"},
  {imgName : "SIEMENS SIRIUS 3RV1 MPCB.webp",
  imgContent : "SIEMENS SIRIUS 3RV1 MPCB"}
]

window.addEventListener("load",()=>{
item.innerHTML += arr.map(d => `<div class="col">
<div class="card h-100 p-0">
<img src="./assets/products/MCB/${d.imgName}" class="card-img-top itimg" alt="product" />
<div class="card-body">
    <h5 class="card-title"><b>${d.imgContent}</b></h5>
</div>
</div>
</div>`).join("")
})