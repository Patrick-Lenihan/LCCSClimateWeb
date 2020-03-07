// dublin = 2964574
// cork = 2965140
let url = 'https://api.weatherbit.io/v2.0/current?&city_id=2964574&key=d1c58a1d5779417ba991704ceddc2a8a';
let tempur = []
fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
  console.log(out.data[0].temp)
   document.getElementById("tempurature_out").innerHTML = "tempurature in cork is " + out.data[0].temp+" &#176;C right Now";
  document.getElementById("air_quality").innerHTML="the air quality in cork is "+ out.data[0].aqi+" (air quality index)";
  if (out.data[0].aqi < 51){
    document.getElementById("air_quality").innerHTMl += " this is good";
  }
  else if (out.data[0].aqi < 100){
    document.getElementById("air_quality").innerHTML  += "this is moderate quality"
  }
  else if (out.data[0].aqi < 150){
    document.getElementById("air_quality").innerHTML  += "this is unhealthy for sensetive groups"
  }
  else{
    document.getElementById("air_quality").innerHTML  += "unhealthy"
  }
})
.catch(err => { throw err });
