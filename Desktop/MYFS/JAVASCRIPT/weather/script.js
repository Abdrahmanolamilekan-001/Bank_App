document.getElementById("search-btn").addEventListener("click", check);

function check() {
  let city = document.getElementById("cityName").value;
  let display = document.getElementById("display");
  let keyApi = "3ac7370e1ab8f60627bdafddb88798af";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`;

  display.innerHTML = `<p style="color:white;">Loading weather data...</p>`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((result) => {
      let cityLocation = result.name;
      let temp = Math.round(result.main.temp - 273);
      let weather = result.weather[0].description;
      let iconCode = result.weather[0].icon;
      let windSpeed = result.wind.speed;
      let humidity = result.main.humidity;
      let pressure = result.main.pressure;

      display.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">
        <h2 style="color:white;">${temp}℃</h2>
        <p style="color:white;"><strong>${cityLocation}</strong></p>
        <p style="color:white;">${
          weather.charAt(0).toUpperCase() + weather.slice(1)
        }</p>

        <div class="additional-info">
          <div>
            <p><strong>${windSpeed} m/s</strong></p>
            <p>Wind</p>
          </div>
          <div>
            <p><strong>${humidity}%</strong></p>
            <p>Humidity</p>
          </div>
          <div>
            <p><strong>${pressure} hPa</strong></p>
            <p>Pressure</p>
          </div>
        </div>
      `;

      document.getElementById("cityName").value = "";
    })
    .catch((error) => {
      display.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// const check = () => {
//   let city = cityName.value;
//   let keyApi = "3ac7370e1ab8f60627bdafddb88798af";
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`;

//   display.innerHTML = `<p>Loading weather data...</p>`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       return response.json();
//     })
//     .then((result) => {
//       let cityLocation = result.name;
//       let temp = Math.round(result.main.temp - 273);
//       let weather = result.weather[0].description;
//       let iconCode = result.weather[0].icon;
//       let windSpeed = result.wind.speed;
//       let humidity = result.main.humidity;
//       let pressure = result.main.pressure;

//       let now = new Date();
//       let date = now.toDateString();
//       let time = now.toLocaleTimeString();

//       if (weather.includes("rain")) {
//         document.body.style.background = "#a4c6e5";
//       } else if (weather.includes("clear")) {
//         document.body.style.background = "#f7d774";
//       } else if (weather.includes("clouds")) {
//         document.body.style.background = "#b0c4de";
//       } else {
//         document.body.style.background = "#ececec";
//       }

//       display.innerHTML = `
//       <div class=" ">
//             <p><strong>${cityLocation}</strong></p>
//             <h2>${temp}℃</h2>
//             <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon">

//             </div>
//       <div class=" ">
//             <p>${weather}</p>
//             <p>Wind: ${windSpeed} m/s</p>
//             <p>Humidity: ${humidity}%</p>
//          </div>
//       <div class=" border: 1px solid green,">
//             <p>Pressure: ${pressure} hPa</p>
//             <p>Date: ${date}</p>
//             <p>Time: ${time}</p>
//       </div>
//          `;

//       cityName.value = "";
//     })
//     .catch((error) => {
//       display.innerHTML = `<p>Error: ${error.message}</p>`;
//     });
// };

// const check = () => {
//   let city = cityName.value;
//   let keyApi = "3ac7370e1ab8f60627bdafddb88798af";
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`;

//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       // console.log(result);
//       let cityLocation = result.name;
//       let temp = Math.round(result.main.temp - 273);
//       let weather = result.weather[0].description;
//       display.innerHTML = `
//     <p>${cityLocation}</p><h2>${temp}℃</h2><p>${weather}</p>
//     `;
//     });
// };
