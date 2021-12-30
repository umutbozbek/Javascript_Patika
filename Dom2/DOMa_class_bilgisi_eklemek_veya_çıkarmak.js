// ****css class eklemek veya çıkarmak


let greeting =document.querySelector("#greeting");
greeting.classList.add("text-primary");
greeting.classList.add("tittle");
greeting.classList.add("first-info","second-class"); //aynı anda birden fazla class ekelemek


greeting.classList.remove("tittle","second-class"); //birden fazla class silmek


console.log(greeting.classList);