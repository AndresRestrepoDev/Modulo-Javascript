const apiKey = '5968dfd98722b3565b6655f3c93d6f87';  

async function getWeather() {
//   const city = document.getElementById('cityInput').value;
  const city = document.getElementById('city').value;
  const resultDiv = document.getElementById('result');

  if (!city) {
    resultDiv.innerText = 'Please enter city';
    return;
  }

  try {
    resultDiv.innerText = 'Searching...';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );

    if (!response.ok) throw new Error('City no found.');

    const data = await response.json();
    const { sys, name, main, weather } = data;

    console.log(data)
    // Example usage



const hora = sys.sunset;
var date = new Date(hora * 1000);
console.log(date)

    resultDiv.innerHTML = `
      <p><strong>Country:</strong> ${sys.country}</p>  
      <p><strong>City:</strong> ${name}</p>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Climate:</strong> ${weather[0].description}</p>  
      <p><strong>Sunrise:</strong> ${sys.sunrise}</p>  
      <p><strong>Sunset:</strong> ${sys.sunset}</p>  
      <p><strong>Sunset:</strong> ${date}</p>  
    `;
  } catch (error) {
    console.log(error)
    resultDiv.innerText = error.message;
  }
}

getWeather()