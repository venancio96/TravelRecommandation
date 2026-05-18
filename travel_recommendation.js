const searchBtn = document.getElementById("searchBtn");
function Search()
{
    console.log("hello");
    const input = document.getElementById("searchInput").value.toLowerCase();
    //const resultDiv = "";
    //resultDiv.innerHTML="";
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
       // const test = countires.cities[1].name;
      // console.log('test');
        const answer = data.countries.toLowerCase() === input;
        if(answer)
        {
            console.log(answer.cities.name);
        //const  name = country.cities.name.join(',');
        //resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        }
        else
        {
            console.log("no citiy found");
        }
    
    })
}
searchBtn.addEventListener('click', Search);
