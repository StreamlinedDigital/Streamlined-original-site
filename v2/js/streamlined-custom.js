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



    /*Carousel----Start*/

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carousel-text').html($('#slide-content-0').html());

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length - 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
    });


    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });

    /*Carousel----End*/



});


