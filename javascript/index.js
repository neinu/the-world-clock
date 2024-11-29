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


    updateTime();
    setInterval(updateTime, 1);

 }