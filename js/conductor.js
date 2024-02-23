// items

const item = document.querySelector(".item-list")

let arr = [
  {imgName : "CONTACTOR FOR CAPACITOR SWITCHING.jpg",
  imgContent : "CAPACITOR SWITCHING"},
  {imgName : "CONTACTOR FOR DC SWITCHES.jpg",
  imgContent : "CONTACTOR FOR DC SWITCHES"},
  {imgName : "L&T CONTACTOR.jpg",
  imgContent : "L&T CONTACTOR"},
  {imgName : "L&T SPECIAL CONTACTER.jpg",
  imgContent : "L&T SPECIAL CONTACTER"},
  {imgName : "L&T-control-contactor.jpg",
  imgContent : "L&T control-contactor"},
  {imgName : "LC1D09BD.JPG",
  imgContent : "LC1D09BD"},
  {imgName : "LC1D09BD.PNG",
  imgContent : "LC1D09BD"},
  {imgName : "LC1D09M7.PNG",
  imgContent : "LC1D09M7"},
  {imgName : "LC1D18BD.PNG",
  imgContent : "LC1D18BD"},
  {imgName : "LC1D25BD.PNG",
  imgContent : "LC1D25BD"},
  {imgName : "LC1D25M7.PNG",
  imgContent : "LC1D25M7"},
  {imgName : "LC1D32BD.PNG",
  imgContent : "LC1D32BD"},
  {imgName : "LC1D40AM7.PNG",
  imgContent : "LC1D40AM7"},
  {imgName : "LC1D65AM7.PNG",
  imgContent : "LC1D65AM7"},
  {imgName : "LC1G115EHEN.PNG",
  imgContent : "LC1G115EHEN"},
  {imgName : "LC2D09P7.JPG",
  imgContent : "LC2D09P7"},
  {imgName : "level3_mdx-18-dc-coil-three-pole-power-contactor.jpg",
  imgContent : "threepole power contactor"},
  {imgName : "level3_mu-2p-power-contactor-with-relay.jpg",
  imgContent : "power-contactor-with-relay"},
  {imgName : "SIRIUS 3RT CONTACTOR,3-POLE, UPTO 250KW.webp",
  imgContent : "SIRIUS 3RT CONTACTOR,3-POLE"},
  {imgName : "SIRIUS 3RT25 CONTACTOR.webp",
  imgContent : "SIRIUS 3RT25 CONTACTOR"},
  {imgName : "SIRIUS 3RT12 AND 3TF6 VACCUM CONTACTOR.webp",
  imgContent : "SIRIUS 3RT12 AND 3TF6 VACCUM CONTACTOR"},
  {imgName : "SPECIAL CONTACTOR capacitor-duty-contactor.jpg",
  imgContent : "SPECIAL CONTACTOR capacitor"}
]

window.addEventListener("load",()=>{
item.innerHTML += arr.map(d => `<div class="col">
<div class="card h-100 p-0">
<img src="./assets/products/CONDUCTORS/${d.imgName}" class="card-img-top itimg" alt="product" />
<div class="card-body">
    <h5 class="card-title"><b>${d.imgContent}</b></h5>
</div>
</div>
</div>`).join("")
})