function BookNow(guestName, guestPhone, guestCourt, guestDate, guestTime, guestRemarks) {
    let url = 'https://api.sheety.co/fabb7f1c61164decd1b0092f71c7786d/courtBooking/courtbookings';
    let body = {
        courtbookings: {
            name: guestName,
            tel: guestPhone,
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
            alert(json.courtbookings.name + " added!")
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userName = document.getElementById("userPhone").value;
        let userName = document.getElementById("userCourt").value;
        let userName = document.getElementById("userDate").value;
        let userName = document.getElementById("userTime").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userPhone, userCourt, userDate, userTime, userRemarks)
    })
});