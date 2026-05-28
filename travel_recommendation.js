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
    if(input === "countries" || input === "country")
    {
        for(const country of data.countries)
        {
            for(const city of country.cities)
            {
                const card = document.createElement("div");
                card.innerHTML += `<img src="${city.imageUrl}">`;
                card.innerHTML +=`<h3>${city.name}</h3>`;
                card.innerHTML +=`<p>${city.description}</p>`;
                info.appendChild(card);
            }
        }

    }
    else if(input === "beach" || input === "beaches")
    {
        for(const beach of data.beaches)
        {
             const card = document.createElement("div");
                card.innerHTML += `<img src="${beach.imageUrl}">`;
                card.innerHTML +=`<h3>${beach.name}</h3>`;
                card.innerHTML +=`<p>${beach.description}</p>`;
                info.appendChild(card);
        }
    }
    else if(input === "temple" || input === "temples")
    {
        for(const temple of data.temples)
        {
             const card = document.createElement("div");
                card.innerHTML += `<img src="${temple.imageUrl}">`;
                card.innerHTML +=`<h3>${temple.name}</h3>`;
                card.innerHTML +=`<p>${temple.description}</p>`;
                info.appendChild(card);
        }
    }
    else
    {
        alert("nothing was found");
    }
    })
    .catch(error =>{
    console.error('Error:', error);
			console.log("error");
    });
}
searchBtn.addEventListener('click', Search);
input.addEventListener('keydown', function(event){

}
