function BookNow(guestName, guestPhone, guestCourt, guestDate, guestTime, guestRemarks) {
    let url = 'https://api.sheety.co/fabb7f1c61164decd1b0092f71c7786d/courtBooking/courtbookings';
    let body = {
        courtbooking: {
            name: guestName,
            phone: guestPhone,
            court: guestCourt,
            date: guestDate,
            time: guestTime,
            remarks: guestRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.courtbooking.name + " added!")
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userPhone = document.getElementById("userPhone").value;
        let userCourt = document.getElementById("userCourt").value;
        let userDate = document.getElementById("userDate").value;
        let userTime = document.getElementById("userTime").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userPhone, userCourt, userDate, userTime, userRemarks)
    })
});