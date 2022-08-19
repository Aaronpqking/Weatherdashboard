fetch('https://api.openweathermap.org/data/2.5/forecast?lat=39.961178&lon=-82.998795&exclude=alerts,minutely,hourly&units=imperial&appid=d143de80350b7aaab11bcd65acbca5c0')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.list.length; i += 8) {
            var day = data.list[i];
            var temp = day.main.temp;
            console.log(temp);
            console.log(day);
            document.getElementById("test").innerText = data.list[i].weather[0].description;
            console.log(data.list[i].weather[0].description);
        }

        document.getElementById("test").innerText = data.list[0].weather[0].description;
    })
    .catch(console.error);




//create lister events for buttons
//create API relationship and variables
//program each button to this city current info in placeholder and 5 day forecast in cards