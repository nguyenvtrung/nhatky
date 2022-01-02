// Star
function star() {
    let soLuong = 100;
    let body = document.querySelector("#hieuung");
    let i = 1;
    while (i < soLuong) {
      let trung = document.createElement("i");
      let sizeWidth =  2;
      let posLeft = Math.floor(Math.random() * window.innerWidth);
      let posTop = Math.floor(Math.random() * window.innerHeight);
      let delay = Math.random() * -20;
  
      trung.style.left = posLeft + "px";
      trung.style.top = posTop + "px";
      trung.style.background =  "#fff";
      trung.style.animationDelay = delay + "s";
      trung.style.width = sizeWidth + "px";
      trung.style.height =  sizeWidth + "px";
      body.appendChild(trung)
      i++;
    }
}
star() 