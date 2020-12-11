function getRandomUser(){
    let xhttp = new XMLHttpRequest(); //create request obj
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementById("firstName");
            let elLastName = document.getElementById("lastName");
            let elJasonResult = document.getElementById("jsonResult");
            let elUserImage = document.getElementById("userImage");
            let elPhone = document.getElementById("phone");
            let elAdress = document.getElementById("adress");
            let elEmail = document.getElementById("email");
            
            elJasonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET","https://randomuser.me/api/", true);
    xhttp.send();
}

let elGetRandomUser = document.getElementById("getRandomUserBtn");
elGetRandomUser.addEventListener("click", function(){
    getRandomUser();
})