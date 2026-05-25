const searchBtn = document.getElementById("searchBtn");
function Search()
{
    const input = document.getElementById("searchInput").value.toLowerCase();
    const info = document.getElementById("infoDiv");
    info.innerHTML = "";
    //resultDiv.innerHTML="";
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    if(input === "countries")
    {
        for(const country of data.countries)
        {
            for(const city of country.cities)
            {
                info.innerHTML += `<img src="${city.imageUrl}">`;
                info.innerHTML +=`<h3>${city.name}</h3>`;
                info.innerHTML +=`<p>${city.description}</p>`;
            }
        }

    }
    else if(input === "beach")
    {
        console.log("beach")
    }
    else if(input === "temple")
    {
        console.log("temple");
    }
    else
    {
        console.log("nothingfound");
    }
    })
    .catch(error =>{
    console.error('Error:', error);
			console.log("error");
    });
}
searchBtn.addEventListener('click', Search);
