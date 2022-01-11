


let greeting=document.querySelector("#greeting");

greeting.addEventListener("mouseover",domClick)

function domClick(){
   
        console.log("etkinlik denetlendi");
    //    console.log(this.innerHTML="tıklandığı için bilgi değişti");
        this.style.color=="red" ? this.style.color="black" : this.style.color="red"
    }


