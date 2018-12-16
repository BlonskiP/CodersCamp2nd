function active()
{
    var SearchBar = document.getElementById("SearchBar");

    if (SearchBar.value == "Szukaj miasta..."){
        SearchBar.value = ""
        SearchBar.placeholder = "Szukaj miasta..."
    }
}

var SearchBar = document.querySelector('input');
var SearchButton = document.querySelector('button');
var city;

const currentweather = `http://api.openweathermap.org/data/2.5/weather?q=(city),pl&APPID=0b72f178992e5ddc7fa93b511b4a5dff`;
SearchBar.addEventListener('change', function () {
sessionStorage.setItem('city', this.value);
console.log(SearchBar.value);

function ChangeInput() {
    searchbar.addEventListener('change', function () {
        sessionStorage.setItem('city', this.value);
    })
}

function Search() {
city = sessionStorage.getItem('city');
console.log(city);
}