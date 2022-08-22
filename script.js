// fetch("https://api.openweathermap.org/data/2.5/weather?q=columbus&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0")
//   .then(function (response) {
//             return response.json()
//         })
//     .then(function (data) {
//         console.log(data);
//     })

// fetch('https://api.openweathermap.org/data/2.5/forecast?q=Columbus&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0')
// .then(function (response) {
//     return response.json()
// })
// .then(function (data) {
// console.log(data);
// })
        
function populateWeather() {

    var queryinput = document.getElementById("search-button").value;

    console.log(queryinput);

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + (queryinput) + '&exclude=minutely,hourly&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.list.length; i += 8) {
                var day = data.list[i];
                var temp = day.main.temp;
                var city = data.city.name;
                var date = new Date(data.list[i].dt_txt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
                var windspeed = data.list[i].wind.speed;
                var icon = data.list[i].weather[0].icon;
                var humidity = data.list[i].main.humidity;
                var description = day.weather[0].description;
                 

                // document.getElementById("description").innerText = description;
                console.log(data.list[i].weather[0].description);
                document.getElementById("date" + i).innerText = date;
                document.getElementById("city").innerText = city;
                document.getElementById("temp" + i).innerText = "TEMP:" + " " + temp;
                document.getElementById("windspeed" + i).innerText = "Windspeed:" + " " + windspeed;
                document.getElementById("humidity" + i).innerText = "Humidity:" + " " + humidity;
                document.getElementById("icon" + i).src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                console.log(icon);
            }
        })
        .catch(function (error) {
            
            console.log(error)
        })

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + (queryinput) + "&exclude=minutely,hourly&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
        console.log(data);

    })
}
