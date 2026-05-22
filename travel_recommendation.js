const searchBtn = document.getElementById("searchBtn");
function Search()
{
    const input = document.getElementById("searchInput").value.toLowerCase();
    //const resultDiv = "";
    //resultDiv.innerHTML="";
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    if(input === "countries")
    {
        console.log("countries");
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
