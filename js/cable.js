    // items

    const item = document.querySelector(".item-list")

    let arr = [
    {imgName : "FR LS and hologen.png",
    imgContent : "FR LS and hologen"},
    {imgName : "Halogen FR.png",
    imgContent : "Halogen FR"},
    {imgName : "halogen.png",
    imgContent : "halogen"},
    {imgName : "HR FR lifeline.png",
    imgContent : "HR FR lifeline"},
    {imgName : "HR.png",
    imgContent : "HR cable"},
    {imgName : "insulation res.png",
    imgContent : "insulation res"},
    {imgName : "lt-cable.webp",
    imgContent : "lt cable"},
    {imgName : "lt-flexible-cable.webp",
    imgContent : "lt flexible cable"},
    {imgName : "LV-Control-cable.png",
    imgContent : "LV Control cable"},
    {imgName : "Instrumentation-cable.png",
    imgContent : "Instrumentation cable"},
    {imgName : "L&T FLAT CABLE.jpg",
    imgContent : "L&T FLAT CABLE"},
    {imgName : "LV Power Cables.jpg",
    imgContent : "LV Power Cables"},
    {imgName : "LV CONTROL CABLE.png",
    imgContent : "LV CONTROL CABLE"},
    {imgName : "multi-strand-wire.webp",
    imgContent : "multi strand wire"},
    {imgName : "multicore round.png",
    imgContent : "multicore round"},
    {imgName : "MV Power Cable.png",
    imgContent : "MV Power Cable"},
    {imgName : "MV-Single-Core-Power-Cable.png",
    imgContent : "MV-SingleCore PowerCable"},
    {imgName : "newFour Pair UTP LAN CABLE.png",
    imgContent : "UTP LAN CABLE"},
    {imgName : "power-cords.jpg",
    imgContent : "power cords"},
    {imgName : "TELEPHONE POLYHELENE 0.4MM.png",
    imgContent : "TELEPHONE POLYHELENE 0.4MM"},
    {imgName : "TRANSPARENT GRADE Speaker Cable PVC.png",
    imgContent : "TRANSPARENT GRADE Speaker Cable PVC"},
    {imgName : "wire-harness.jpg",
    imgContent : "wire harness"}
    ]

    window.addEventListener("load",()=>{
    item.innerHTML += arr.map(d => `<div class="col">
    <div class="card h-100 p-0">
    <img src="./assets/products/cable/${d.imgName}" class="card-img-top itimg" alt="product" />
    <div class="card-body">
        <h5 class="card-title"><b>${d.imgContent}</b></h5>
    </div>
    </div>
    </div>`).join("")
    })