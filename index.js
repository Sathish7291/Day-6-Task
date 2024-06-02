
// a. Get all the countries from Asia continent /region using Filter method

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
 let countries = result.filter((e)=> e.continents === "Asia" || e.region === "Asia")
console.log(countries)
}

// b. Get all the countries with a population of less than 2 lakhs using Filter method

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    var population = result1.filter((e)=>{
        return e.population<200000;
    })
console.log(population);
}

// c.Print the following details name, capital, flag, using forEach method

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all");
request2.send();
request2.onload=function(){
    var details=JSON.parse(request2.response);
   details.forEach(element => {
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flag); 

   });
}

// d.Print the total population of countries using reduce method

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all");
request3.send();
request3.onload=function(){
    var Total_Population=JSON.parse(request3.response);
  let Total = Total_Population.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue.population
  },0)
  console.log(Total)
}

// e. Print the country that uses US dollars as currency.

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all");
request4.send();
request4.onload=function(){
    var rest_countries_data=JSON.parse(request4.response);
var currency = rest_countries_data.filter((element) => {
  for(let i in element.currencies){
     if(element.currencies[i].name === "United States dollar"){
         return element;
     }
  }
})
     console.log(currency);
}