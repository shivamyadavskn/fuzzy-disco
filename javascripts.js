const url = "https://api.openweathermap.org/data/2.5/weather?q=agra&APPID=5877846f0524ff38ab7a9e4bdc96a0fb";

const btnn = document.getElementsByTagName("button")[0];
console.log(btnn);

btnn.addEventListener("click",async()=>{
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
});