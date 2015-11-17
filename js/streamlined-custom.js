$(document).ready(function () {
    //$('#dynamolove').child().width('');





    /*---- MAP ----*/
    $("#map").gMap({
        controls: false,
        scrollwheel: false,
        draggable: true,
        markers: [{
            latitude: 44.47698,
            longitude: 1006.8,
            icon: {
                image: "img/pin.png",
                iconsize: [32, 47],
                iconanchor: [32, 47],
                infowindowanchor: [12, 0]
            }
        }
        ],
        icon: {
            image: "img/pin.png",
            iconsize: [26, 46],
            iconanchor: [12, 46],
            infowindowanchor: [12, 0]
        },
        latitude: 39.130,
        longitude: -84.512,
        zoom: 10,
    });

});