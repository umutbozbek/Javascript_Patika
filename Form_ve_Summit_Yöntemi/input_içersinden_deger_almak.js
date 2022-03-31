


let formDom=document.querySelector("#userForm")
formDom.addEventListener("submit",formSubmit);



function formSubmit(event) {
    event.preventDefault() //default işlemi engelledik.
    console.log("islem gerçekleşti")
    let scoreInputDom=document.querySelector("#score")
    console.log(scoreInputDom.value)
    localStorage.setItem("score",scoreInputDom.value)
}