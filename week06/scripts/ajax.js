function getRandomUser() {
    let xhttp = new XMLHttpRequest(); //create request obj

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementById("firstName");
            let elLastName = document.getElementById("lastName");
            let elJsonResult = document.getElementById("jsonResult");
            let elUserImage = document.getElementById("userImage");
            let elPhone = document.getElementById("phone");
            let elAddress = document.getElementById("address");
            let elEmail = document.getElementById("email");

            elFirstName.innerHTML = "First Name: " + data.results[0].name.first;
            elLastName.innerHTML = "Last Name: " + data.results[0].name.last;
            elUserImage.src = data.results[0].picture.large;
            elUserImage.title = data.results[0].name.first + " " + data.results[0].name.last;
            elPhone.innerHTML = "Phone Num.:" + data.results[0].phone + " / " + data.results[0].cell;
            elAddress.innerHTML = "Address:- <br> " + data.results[0].location.street.number
                + ", " + data.results[0].location.street.name
                + ", <br> " + data.results[0].location.city
                + " " + data.results[0].location.postcode
                + " " + data.results[0].location.state
                + ", <br> " + data.results[0].location.country + ".";
            elEmail.innerHTML = "Email:" + data.results[0].email;

            elJsonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
}

let elGetRandomUser = document.getElementById("getRandomUserBtn");
elGetRandomUser.addEventListener("click", function () {
    getRandomUser();
})