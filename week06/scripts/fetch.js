function GetBookings() {
    let url = 'https://api.sheety.co/fabb7f1c61164decd1b0092f71c7786d/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});