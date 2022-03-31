
// 1:formu seç
// 2:input bilgisini ul içerisine ekle
// 3:form içindeki bilgiyi sıfırla
// 4:eğer forma bilgi girilmezse kullanıcıyı uyar


let userFormDom=document.querySelector("#userForm")

userFormDom.addEventListener("submit",formHandler)
 const alertDOM = document.querySelector('#alert')

 const alertFuntion = (tittle,massage,clasName="warning")=>`<div class="alert alert-${clasName} alert-dismissible fade show" role="alert">
 <strong>${tittle}</strong> ${massage}
 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`



function formHandler(event){
    event.preventDefault()
    const USER_NAME=document.querySelector("#username")
    const SCORE=document.querySelector("#score")
    
    if(USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value,SCORE.value) //gönderiden sonra sıfırladık
        USER_NAME.value =""
        SCORE.value=""

    }else{
        alertDOM.innerHTML=alertFuntion(
            "Başlık",
            "Eksik bilgi Girdiniz",
            "danger"
            )
    }
   
}


let userListDom=document.querySelector("#userList")

const addItem=(username,score)=>{
    let liDom=document.createElement("li")
    liDom.innerHTML =`
        ${username} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDom.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDom.append(liDom)
}