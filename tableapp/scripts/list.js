function GetBookings() {
    let url = 'https://api.sheety.co/fabb7f1c61164decd1b0092f71c7786d/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            // console.log(json.bookings);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;
                let gRemarks = json.bookings[i].remarks;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPax;
                row.insertCell(4).innerHTML = gRemarks;
                row.insertCell(5).innerHTML = "<button id= '" + buttonId + "'class='btn btn-danger'>Delete</button>";

                bookingIds.push(buutonId);

            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    alert(theId);
                })
            }
        });
}