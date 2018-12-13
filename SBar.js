function active()
{
    var SearchBar = document.getElementById("SearchBar");

    if (SearchBar.value == "Szukaj miasta..."){
        SearchBar.value = ""
        SearchBar.placeholder = "Szukaj miasta..."
    }
}