"use strict";

let map;

const infoLine = document.querySelector(".info");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        const coords = [latitude, longitude];

        map = L.map("map").setView(coords, 17);

        L.tileLayer(
            "https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}",
            {
                attribution:
                    '<a href="http://jawg.io" title="Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy;',
                minZoom: 0,
                maxZoom: 22,
                subdomains: "abcd",
                accessToken:
                    "VSMYJoLANC0QI2V4TS4B8wGyqgqaw2UHcP93FWce2KjM0Hl9Ujc55dHX9lES5dzc",
            }
        ).addTo(map);

        L.marker(coords)
            .addTo(map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: "location-popup",
                })
            )
            .setPopupContent("You Are Here")
            .openPopup();
    });
} else {
    alert("Could not get your position");
}

setTimeout(function () {
    infoLine.textContent = "Tap here to open the action menu";
}, 8000);

setTimeout(function () {
    infoLine.textContent = "";
}, 20000);
