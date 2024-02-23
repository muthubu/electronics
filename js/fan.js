// items

const item = document.querySelector(".item-list")

let arr = [
  {imgName : "3D.-BRK.png",
  imgContent : "3D-BRK"},
  {imgName : "Bakers-Brown-Brocade.png",
  imgContent : "Bakers Brown Brocade"},
  {imgName : "Bakers-Brown.png",
  imgContent : "Bakers Brown"},
  {imgName : "Charcoal-Grey.png",
  imgContent : "Charcoal Grey"},
  {imgName : "Chestnut-wood.png",
  imgContent : "Chestnut wood"},
  {imgName : "Cromair_Satin-Sand.jpg",
  imgContent : "Cromair Satin Sand"},
  {imgName : "Designer_Navy.png",
  imgContent : "Designer Navy"},
  {imgName : "Energion-roverr-non-underlight.png",
  imgContent : "Energion roverr non underlight"},
  {imgName : "groove anti dust.webp",
  imgContent : "groove anti dust"},
  {imgName : "groove plus.png",
  imgContent : "groove plus"},
  {imgName : "groove.jpg",
  imgContent : "Groove"},
  {imgName : "mini yo.png",
  imgContent : "mini yo"},
  {imgName : "Mist-White.png",
  imgContent : "Mist White"},
  {imgName : "Pearl-white.png",
  imgContent : "Pearl white"},
  {imgName : "personal fan.png",
  imgContent : "personal fan"},
  {imgName : "Prime_red-velvet.png",
  imgContent : "Prime red velvet"},
  {imgName : "Roverr-Non-Underlight.jpg",
  imgContent : "Roverr Non-Underlight"},
  {imgName : "Table-Fan-Front.png",
  imgContent : "Table Fan Front"},
  {imgName : "tower fan.png",
  imgContent : "tower fan"},
  {imgName : "vento jet auto.png",
  imgContent : "vento jet auto"},
  {imgName : "TF-Colour-Pastel.png",
  imgContent : "TF-Colour-Pastel"},
  {imgName : "Roverr-Smart-Shimmer.jpg",
  imgContent : "Roverr Smart-Shimmer"},
  {imgName : "SENOPRIME-COOL-GRAY.png",
  imgContent : "SENOPRIME COOL GRAY"},
  {imgName : "SilentPro_Blossom.jpg",
  imgContent : "SilentPro Blossom"},
  {imgName : "SilentPro_Blossom_Smart.jpg",
  imgContent : "SilentPro Blossom Smart"},
  {imgName : "stylus high.png",
  imgContent : "stylus high"},
  {imgName : "vento jet.png",
  imgContent : "vento jet"}
]

window.addEventListener("load",()=>{
item.innerHTML += arr.map(d => `<div class="col">
<div class="card h-100 p-0">
<img src="./assets/products/fan/${d.imgName}" class="card-img-top itimg" alt="product" />
<div class="card-body">
    <h5 class="card-title"><b>${d.imgContent}</b></h5>
</div>
</div>
</div>`).join("")
})