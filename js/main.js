const bar = document.querySelector(".bar")
const loading = document.querySelectorAll(".loading");
const span = document.querySelectorAll(".loading span");

let op = document.querySelectorAll(".op")

window.addEventListener("scroll",()=>{
    for(let i=0;i<op.length;i++){
        if(op[i].getBoundingClientRect().top <= 500){ 
            op[i].classList.replace("op","bottomani")
        }
    }
})

window.addEventListener("scroll",()=>{
  if(bar.getBoundingClientRect().top <= 700){
    for(let i=0;i<loading.length;i++){
      let per = span[i].getAttribute("data-percent")
      loading[i].style.width = per
    }
  }
})