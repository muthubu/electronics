// items

const item = document.querySelector(".item-list")

let arr = [
  {imgName : "25A Socket.png",
  imgContent : "25A Socket"},
  {imgName : "3 Set pin.jpg",
  imgContent : "3 Set pin"},
  {imgName : "6A - 16A socket.png",
  imgContent : "6A - 16A socket"},
  {imgName : "6A 3 PIN socket.png",
  imgContent : "6A 3 PIN socket"},
  {imgName : "6A Combo Black.png",
  imgContent : "6A Combo Black"},
  {imgName : "6A Combo.png",
  imgContent : "6A Combo"},
  {imgName : "6A multi Black.png",
  imgContent : "6A multi Black"},
  {imgName : "6A multi.png",
  imgContent : "6A multi"},
  {imgName : "6A Round pin.png",
  imgContent : "6A Round pin"},
  {imgName : "6A with shutter.png",
  imgContent : "6A with shutter"},
  {imgName : "6A with Switch.png",
  imgContent : "6A with Switch"},
  {imgName : "aaky210.webp",
  imgContent : "aaky210"},
  {imgName : "Art Double USB.jpg",
  imgContent : "Art Double USB"},
  {imgName : "Art USB.jpg",
  imgContent : "Art USB"},
  {imgName : "avatar soc.webp",
  imgContent : "avatar soc"},
  {imgName : "cpxshave.webp",
  imgContent : "cpxshave"},
  {imgName : "in8431tv.webp",
  imgContent : "in8431tv"},
  {imgName : "panel.webp",
  imgContent : "panel"},
  {imgName : "RJ 11 telephone Black.png",
  imgContent : "RJ 11 telephone Black"},
  {imgName : "RJ 11 telephone.png",
  imgContent : "RJ 11 telephone"},
  {imgName : "shutter.webp",
  imgContent : "shutter"},
  {imgName : "tv opale.webp",
  imgContent : "tv opale"},
  {imgName : "tv socket.webp",
  imgContent : "tv socket"},
  {imgName : "uns616.webp",
  imgContent : "uns616"},
  {imgName : "uns616w.webp",
  imgContent : "uns616w"},
  {imgName : "unsshaver.webp",
  imgContent : "unsshaver"},
  {imgName : "avator soc w.webp",
  imgContent : "avator soc w"},
  {imgName : "cpxshaver.webp",
  imgContent : "cpxshaver"},
  {imgName : "6A with shutter.png",
  imgContent : "6A with shutter"}
]

window.addEventListener("load",()=>{
item.innerHTML += arr.map(d => `<div class="col">
<div class="card h-100 p-0">
<img src="./assets/products/sockets/${d.imgName}" class="card-img-top itimg" alt="product" />
<div class="card-body">
    <h5 class="card-title"><b>${d.imgContent}</b></h5>
</div>
</div>
</div>`).join("")
})