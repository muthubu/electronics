const bar = document.querySelector(".bar")
const loading = document.querySelectorAll(".loading");
const span = document.querySelectorAll(".loading span");

window.addEventListener("scroll",()=>{
  if(bar.getBoundingClientRect().top <= 700){
    for(let i=0;i<loading.length;i++){
      let per = span[i].getAttribute("data-percent")
      loading[i].style.width = per
    }
  }
})