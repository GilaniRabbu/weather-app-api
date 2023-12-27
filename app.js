const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${API_KEY}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }

    else {
        let data = await response.json();

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
        document.querySelector('.humidity').innerHTML = data.main.humidity;
        document.querySelector('.wind').innerHTML = data.wind.speed;

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'img/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'img/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'img/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'img/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'img/mist.png';
        }
        else if (data.weather[0].main == 'Haze') {
            weatherIcon.src = 'img/haze.png';
        }
        else if (data.weather[0].main == 'Fog') {
            weatherIcon.src = 'img/mist.png';
        }
        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'img/snow.png';
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
    searchInput.value = '';
});