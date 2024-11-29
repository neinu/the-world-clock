 function updateTime() {
    //Austin
    let austinElement = document.querySelector("#austin");
    let austinDateElement = austinElement.querySelector("date");
    let austinTimeElement = austinElement.querySelector("time");
    let austinTime = moment().tz("America/Austin");
    austinDateElement.innerHTML = austinTime.format("MMMM Do YYYY");
    austinTimeElement.innerHTML = austinTime.format("h:mm:ss [<small>A</small>");

    //Milan
    let milanElement = document.querySelector("#milan");
    let milanDateElement = milanElement.querySelector("date");
    let milanTimeElement = querySelector("time");
    let milanTime = moment().tz("Europe/Milan");
    milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
    milanTimeElement.innerHTML = milanTime.format("h:mm:ss [<small>A</small>");

    //Perth
    let perthElement = document.querySelector("#perth");
    let perthDateElement = perthElement.querySelector("date");
    let perthTimeElement = perthElement.querySelector("time");
    let perthTime = moment().tz("Australia/Perth");
    perthDateElement.innerHTML = perthTime.format("MMMM Do YYYY");
    perthTimeElement.innerHTML = perthTime.format("h:mm:ss [<small>A</small>");

 }

 function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}



    updateTime();
    setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

 