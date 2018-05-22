function initMap() {
    // 2.yntrum enq ayn elementy vortex stexcelu enq map-y
    var element = document.getElementById('map');
    // 3.stexcum enq object ,kazmvac parametreric
    var options = {
        zoom: 8,
        // nshum enq laynutyunn u erkarutyuny
        center: {lat:40.177200, lng:44.503490},


        // style
        gestureHandling: 'cooperative',
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ]

        // style
    }
    // stexcum enq map -i object
    var myMap = new google.maps.Map(element, options);



    /*        // nshum enq information nshvac texi veraberyal
            var InfoWindow = new google.maps.InfoWindow({
                // contentum karox enq grel html code
                content:'<span>Hey there</span>'
            })

            // avelacnum enq listenery ,vory kashxati click-i jamanak, vorpeszi x-ov pakeluc heto clicki depqum noric
            // infon show lini
            marker.addListener('click',function () {
                //infon show anelu hamar ogtagorcum enq open-y
                InfoWindow.open(myMap, marker);
            })*/



// mi qani marker unenalu hamar karox enq grel function
    function addMarker(properties) {
        // avelacnum enq marker
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap,
        });

        // ete defaultic tarber icon enq dnum, aysinqn ka haytararvac image ,apa
        if(properties.image){
            marker.setIcon(properties.image)
        }

        // ete defaultic tarber info enq grum, aysinqn ka haytararvac info ,apa
        if (properties.info){
            // nshum enq information nshvac texi veraberyal
            var InfoWindow = new google.maps.InfoWindow({
                // contentum karox enq grel html code
                content:properties.info
            });

            // avelacnum enq listenery ,vory kashxati click-i jamanak, vorpeszi x-ov pakeluc heto clicki depqum noric
            // infon show lini
            marker.addListener('click',function () {
                //infon show anelu hamar ogtagorcum enq open-y
                InfoWindow.open(myMap, marker);
            })
        }
    }

    // functiony kanchelu jamanak arden vorpes coordinate kpoxancenq texanqi coordinatnery ,
    // aysinqn karox enq aveli parz exanakov mi qani coordinate nshel
    // https://www.latlong.net/

    //aranc cikli ognutyan , hertov , qani angam anhrajesht e karox enq kanchel addMarkery


    // addMarker({
    //     coordinates:{lat:40.185822, lng:44.515067},
    //     image:'images/marker.png'
    // });
    // addMarker({
    //     coordinates:{lat:40.7942, lng:43.84528},
    //     image:'images/marker.png',
    //     info: '<span>hello</span>'
    //
    // });


    // stexcum enq masiv ,vortex kunenanq bolor markernery , ev cikli mijocov kkanchenq addMarker,
    //     inchqan vor anhrajesht lini
    var markers = [
        {
            coordinates:{lat:40.185822, lng:44.515067},
            image:'images/marker.png'
        },
        {
            coordinates:{lat:40.7942, lng:43.84528},
            image:'images/marker.png',
            info: '<span>hello</span>'

        }
    ];

    for (var i = 0; i<markers.length;i++){
        addMarker(markers[i])
    }

}
