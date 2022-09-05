
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
console.log(JSON.stringify(searchHistory));
pageLoad(searchHistory[searchHistory.length - 1] || "columbus");

    for (var i = 0; i < searchHistory.length; i++) {
    lsList(searchHistory[i]);

}


function search() {

    var queryinput = document.getElementById("search-button").value;
    searchHistory.push(queryinput);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    pageLoad(queryinput);
    lsList();
}





function pageLoad(queryinput) {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + queryinput + "&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var city = data.name;
            // var date = new Date(data.dt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
            var windspeed = data.wind.speed;
            var temp = data.main.temp;
            var icon = data.weather[0].icon;
            var humidity = data.main.humidity;
            // var currenttime = moment().hour();
            var currentDay = moment().format("LLLL");
            console.log(currentDay);
            
            document.getElementById("currentDay").innerText = currentDay;

            // document.getElementById("date").innerText = date;
            document.getElementById("city").textContent = city;
            document.getElementById("temp").innerText = "TEMP: " + temp + String.fromCharCode(176) + "Windspeed: " + windspeed + " mph" + "Humidity: " + humidity + "%";
            // document.getElementById("windspeed").textContent = ;
            // document.getElementById("humidity").textContent = 
            document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(data);
        
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            fetch("https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" +
                lat +
                "&lon=" +
                lon +
                "&appid=d143de80350b7aaab11bcd65acbca5c0" + "&cnt=1")
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    
                    var UVIndex = data[0].value;
                    document.getElementById("UVI").innerText = "UV Index = " + UVIndex;
                    console.log(UVIndex);

                });
            console.log(data);
        })
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + queryinput + "&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            for (var i = 0; i < data.list.length; i += 8) {
                var day = data.list[i];
                var temp = day.main.temp;
                var city = data.city.name;
                var date = new Date(data.list[i].dt_txt).toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" });
                var windspeed = data.list[i].wind.speed;
                var icon = data.list[i].weather[0].icon;
                var humidity = data.list[i].main.humidity;
                // var description = day.weather[0].description;

                // document.getElementById("description").innerText = description;
                // console.log(data.list[i].weather[0].description);
                document.getElementById("date" + i).innerText = date;
                document.getElementById("city").innerText = city;
                document.getElementById("temp" + i).innerText = "TEMP: " + temp + String.fromCharCode(176);
                document.getElementById("windspeed" + i).innerText = "Windspeed: " + windspeed + " mph";
                document.getElementById("humidity" + i).innerText = "Humidity: " + humidity + "%";
                document.getElementById("icon" + i).src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                console.log(icon);
            }
            console.log(data);
        })


}

function lsList(city) {
    var citybutton = document.createElement("button");
    citybutton.textContent = city;
    citybutton.setAttribute("value", city);
    citybutton.addEventListener("click", function () { pageLoad(city)});
    document.getElementById("cityHistory").appendChild(citybutton);
    citybutton.className = "dropdown-item";
}

