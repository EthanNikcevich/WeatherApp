


function run() {
    F = undefined;
    icon = undefined;
    summary = undefined;
    cloudCover = undefined;
    humidity = undefined;
    precipProbability = undefined;
    visibility = undefined;
    windSpeed = undefined;

    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    var input2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + state + "&key=AIzaSyCq7C2oo_IggNRS6KKMYM0VrTH3Tt8J2Ag"
    $.ajax({
        // key = AIzaSyCq7C2oo_IggNRS6KKMYM0VrTH3Tt8J2Ag
        url: input2,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            getWeather(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng)
        },
        error: function () {
            alert('Failed!');
        }
    });


    function getWeather(lat, lng) {

        var url = "https://api.darksky.net/forecast/ad0a25918602e1d5ac8a98c6c9764da1/" + lat + "," + lng;

        $.ajax({
            //key = ad0a25918602e1d5ac8a98c6c9764da1
            url: url,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                console.log(result);
                getData(result);
                console.log("test");
            },
            error: function () {
                alert('Failed!');
            }
        });
    }

    function getData(result) {
        var F = result.currently.apparentTemperature;
        var icon = result.currently.icon;
        var summary = result.currently.summary;
        var cloudCover = result.currently.cloudCover;
        var humidity = result.currently.humidity;
        var precipProbability = result.currently.precipProbability;
        var visibility = result.currently.visibility;
        var windSpeed = result.currently.windSpeed;
        console.log(F);
        console.log(icon);
        console.log(summary);
        console.log(cloudCover);
        console.log(humidity);
        console.log(precipProbability);
        console.log(visibility);
        console.log(windSpeed);
    }

        if (F > 80) {
            if (icon == "clear-day") {

        } else if (icon == "clear-night") {

        } else if (icon == "rain") {

        } else if (icon == "snow") {

        } else if (icon == "sleet") {

        } else if (icon == "wind") {

        } else if (icon == "fog") {

        } else if (icon == "cloudy") {

        } else if (icon == "partly-cloudy-day") {

        } else if (icon == "partly-cloudy-night") {

        } else if (60 < F < 80) {
            if (icon == "clear-day") {

            } else if (icon == "clear-night") {

            } else if (icon == "rain") {

            } else if (icon == "snow") {

            } else if (icon == "sleet") {

            } else if (icon == "wind") {

            } else if (icon == "fog") {

            } else if (icon == "cloudy") {

            } else if (icon == "partly-cloudy-day") {

            } else if (icon == "partly-cloudy-night") {

            } else if (35 < F < 60) {
                if (icon == "clear-day") {

                } else if (icon == "clear-night") {

                } else if (icon == "rain") {

                } else if (icon == "snow") {

                } else if (icon == "sleet") {

                } else if (icon == "wind") {

                } else if (icon == "fog") {

                } else if (icon == "cloudy") {

                } else if (icon == "partly-cloudy-day") {

                } else if (icon == "partly-cloudy-night") {

                } else if (F < 35) {
                    if (icon == "clear-day") {

                    } else if (icon == "clear-night") {

                    } else if (icon == "rain") {

                    } else if (icon == "snow") {

                    } else if (icon == "sleet") {

                    } else if (icon == "wind") {

                    } else if (icon == "fog") {

                    } else if (icon == "cloudy") {

                    } else if (icon == "partly-cloudy-day") {

                    } else if (icon == "partly-cloudy-night") {

                    }
                }

            }
        }
    }
}




