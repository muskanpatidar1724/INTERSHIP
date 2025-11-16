async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = "<p>Please enter a city name!</p>";
        return;
    }

    weatherResult.innerHTML = "<p>Loading...</p>";

    const apiKey = "b2cbb871df85fb33a6952c88d07352ef"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherResult.innerHTML = `
            <div class="weather-box">
                <h3>${data.name}</h3>
                <img src="${iconUrl}">
                <p><strong>${data.main.temp}°C</strong></p>
                <p>${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} m/s</p>
            </div>
        `;

    } catch (error) {
        weatherResult.innerHTML = "<p>City not found, please try again!</p>";
    }
}
