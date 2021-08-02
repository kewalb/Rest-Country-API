// Code for accessing rest countries API and fetchinng necessary data

// Creating a new obev=ct for XMLHttpRequest
let con = new XMLHttpRequest();
// Opening a connection
con.open("GET", "https://restcountries.eu/rest/v2/all", true)
// Sending a request
con.send()

con.onload = function(){
    let data = JSON.parse(this.response)
    console.log(data)

    // Get all countries from Asia continent
    let countryAsia = data.filter((element) => element.region === "Asia" );
    console.log(countryAsia)

    // Get all countries with population less that 200000
    let populationCountry = data.filter((element) => element.population < 200000)
    console.log(populationCountry)

    // Get countries which uses USD as currency
    let currencyUSD = data.filter((x) => {
        for(var i in x.currencies){
            if(x.currencies[i].code === 'USD')
            return true
        }
    })
    console.log(currencyUSD)

    // Get total population
    let totalPopulaton = data.reduce((acc, ele) => acc+=ele.population , 0)
    console.log(totalPopulaton)
}