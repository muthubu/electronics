// items

const item = document.querySelector(".item-list")

let arr = [
  {imgName : "led-bulbs-hexa-bulb.png",
  imgContent : "Led-bulbs-hexa-bulb"},
  {imgName : "led-bulbs-inverter-bulb.png",
  imgContent : "led-bulbs-inverter-bulb"},
  {imgName : "led-bulbs-o-bulb.png",
  imgContent : "led-bulbs-o-bulb"},
  {imgName : "led-bulbs-t-bulb.png",
  imgContent : "led-bulbs-t-bulb"},
  {imgName : "LSDRLORD-10W.png",
  imgContent : "LSDRLORD-10W"},
  {imgName : "Red.png",
  imgContent : "Red"},
  {imgName : "Slim-Shakti-Front.png",
  imgContent : "Slim-Shakti-Front"},
  {imgName : "spotEco.png",
  imgContent : "spotEco"},
  {imgName : "star cosmos.png",
  imgContent : "star cosmos"},
  {imgName : "star miranda.png",
  imgContent : "star miranda"},
  {imgName : "Starlord-Circle-light.png",
  imgContent : "Starlord Circle light"},
  {imgName : "12W COB Spotlight_2.png",
  imgContent : "12W COB Spotlight"},
  {imgName : "2W LED Spotlight RGB.jpg",
  imgContent : "2W LED Spotlight RGB"},
  {imgName : "3W_mini_led_Spotlight.jpg",
  imgContent : "mini led Spotlight"},
  {imgName : "batten-light.png",
  imgContent : "Battenlight"},
  {imgName : "COMPACT-GOLD_0.png",
  imgContent : "COMPACT GOLD"},
  {imgName : "Immensa_2.png",
  imgContent : "Immensa"}
]

window.addEventListener("load",()=>{
item.innerHTML += arr.map(d => `<div class="col">
<div class="card h-100 p-0">
<img src="./assets/products/light/${d.imgName}" class="card-img-top itimg" alt="product" />
<div class="card-body">
    <h5 class="card-title"><b>${d.imgContent}</b></h5>
</div>
</div>
</div>`).join("")
})