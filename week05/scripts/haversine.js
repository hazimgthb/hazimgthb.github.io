function haversine(lat1, lon1, lat2, lon2){
    let R = 6371; //earth radius in KM
    let dLat = (lat2-lat1).toRad();
    let dLon = (lon2-lon1).toRad();
    lat1 = lat.toRad();
    lat2 = lat.toRad();

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.co(lat1) * Math.con(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    let d = R *c;

    return roundVal;
}

if(typeof Number.prototype.toRad == " undefined"){
    Number.prototype.toRad = function(){
        return this * Math.PI/180;        
    }
}

function roundVal(Val){
    let dec 2;
    let result = Math.round (val * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}

function calculateDistance(lat,lon){
    let d1 = haversine(lat,lon, 2.922562, 101.650965); // Depulze cyberjaya
    let d2 = haversine(lat,lon, 3.073065, 101.607787); // Sunway pyramid
    let d3 = haversine(lat,lon, 3.158761, 101.714524); //KLCC

    return[d1, d2, d3];
}

let elLocate = document.getElementById("locate");
elLocate.addEventListener("click",function()({
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = documant.getElementById("lat");
            let elLong = documant.getElementById("long");
            let elDepulze = documant.getElementById("Depulze");
            let elSunway = documant.getElementById("Sunway");
            let elKlcc = document.getElementById("KLCC");

            let userLat = position.coords.latitude;
            let userlong = position.coords.longitude;

            let distance = calculateDistance(userLat, UserLong);

            elLat.innerHTML = "Your Latitude: " + userLat;
            elLong.innerHTML = "Your Longitude: " + userLong;
            elDepulze.innerHTML = "Distance to Depulze, Cyberjaya is: " + distance[0];
            elSunway.innerHTML = "Distance to Sunway Pyramid is: " + distance[1];
            elKlcc.innerHTML = "Distance to KLCC (Twin Tower) is: " + distance[2];

        });
    }else {
        alert("Geolocation is not supported");
    }
});