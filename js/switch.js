// items

const item = document.querySelector(".item-list")

let arr = [
  {imgName : "./assets/products/switches/AvatarOn.JPG",
  imgContent : "Avatar"},
  {imgName : "./assets/products/switches/Clipsalx.JPG",
  imgContent : "Clipsalx"},
  {imgName : "./assets/products/switches/Livia.JPG",
  imgContent : "Livia"},
  {imgName : "./assets/products/switches/neo.JPG",
  imgContent : "neo"},
  {imgName : "./assets/products/switches/opale.JPG",
  imgContent : "Opale"},
  {imgName : "./assets/products/switches/PIO.JPG",
  imgContent : "Pio"},
  {imgName : "./assets/products/switches/unicapure.JPG",
  imgContent : "Unicapure"},
  {imgName : "./assets/products/switches/zen.JPG",
  imgContent : "Zen"}
]

window.addEventListener("load",()=>{
item.innerHTML += arr.map(d => `<div class="col">
<div class="card h-100 p-0">
<img src="${d.imgName}" class="card-img-top itimg" alt="product" />
<div class="card-body">
    <h5 class="card-title"><b>${d.imgContent}</b></h5>
</div>
</div>
</div>`).join("")
})