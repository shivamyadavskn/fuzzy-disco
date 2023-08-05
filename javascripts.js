const url = "https://api.openweathermap.org/data/2.5/weather?q=agra&APPID=5877846f0524ff38ab7a9e4bdc96a0fb";

const butt = document.getElementById("mybtn");

const htag = document.getElementsByTagName("h1")[0];
console.log(htag);


function fetching() {
    const response = fetch(url);
    const data = response.json();
    console.log(data);
    htag.innerHTML = data;
    htag.innerText = data;
}

butt.addEventListener("click", ()=>{
    fetching;
});




// const input=document.getElementById("form-datas");
// console.log(input);