const API_KEY = `a612ecd27c207949334e20a7a16007d4
`;

const searchTemperature = () => {
    const searchCityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => searchDisplayName(data))
}


const setInnerText =(id, text) => {
    document.getElementById(id).innerText = text;
}


const searchDisplayName = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)

    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url);
}