let data;
const inputBox=document.getElementById("inputBox");
const country=document.getElementById("country");
const state=document.getElementById("statename");
const city=document.getElementById("cityname");
const humanidity=document.getElementById("humanidity");
const wind=document.getElementById("wind");
const temp=document.getElementById("tempreture");
const logo=document.getElementById("logoimg");
const wheather=document.getElementById("wheatherstatus");
const getData=async (event)=>{
   event.preventDefault();
   if(!inputBox.value){
    alert("You have not Enter any CityName:");
    return;
   }
   const citu=inputBox.value;
   const fetchdata=await fetch(`http://api.weatherapi.com/v1/current.json?key=bbe1153c32e74e2aaa5145728232102&q=${citu}`);
   const orgData=await fetchdata.json();
   data=orgData;
   console.log(data);
   country.innerHTML=data.location.country;
   state.innerHTML=data.location.region;
   city.innerHTML=data.location.name;
   wheather.innerHTML=data.current.condition.text;
   humanidity.innerHTML=data.current.humidity;
   wind.innerHTML=data.current.wind_kph;
   temp.innerHTML=data.current.temp_c;
   logo.src=data.current.condition.icon;
}