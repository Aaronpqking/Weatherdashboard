fetch('https://api.openweathermap.org/data/2.5/forecast?lat=39.961178&lon=-82.998795&appid=d143de80350b7aaab11bcd65acbca5c0')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        document.getElementById("test").innerText = data.list[0].weather[0].description;
    })
    .catch(console.error);





//create lister events for buttons
//create API relationship and variables
//program each button to this city current info in placeholder and 5 day forecast in cards