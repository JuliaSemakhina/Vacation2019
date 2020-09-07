let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
const temperatureSection = document.querySelector('.temperature');
const temperatureSpan = document.querySelector('.temperature span');

const proxy = 'https://cors-anywhere.herokuapp.com/';	
const api = `https://api.weatherbit.io/v2.0/current?lat=38.53816&lon=-0.13098&key=6450498818484b008e70dc92cde21971&lang=ru`;

fetch(api)
		.then(res => res.json())
		.then(data => {
			console.log(data);

			const temp = Math.round(data.data[0].temp);
			const description = data.data[0].weather.description;
			const location = data.data[0].city_name;
			const icon = data.data[0].weather.description;
	
			//Set DOM Elements
			temperatureDegree.textContent = temp;
			temperatureDescription.textContent = description;
			locationTimezone.textContent = location;

			//Weather icons
			var iconcode = data.data[0].weather.icon;

		   var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
		   document.getElementById('wicon').setAttribute('src', iconurl);

});