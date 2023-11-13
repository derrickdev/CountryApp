let searchBtn= document.getElementById("search_btn");
let countryInp = document.getElementById("country-inp");
let loading = document.querySelector(".loading");




searchBtn.addEventListener('click',()=>{
    // loading.style.display = "flex"
    let countryName = countryInp.value;
    let finalUrl=`https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `;
    console.log(finalUrl);
    fetch(finalUrl)
    .then((response => {
        if(response.ok){
          return response.json()
        }
    }))
    .then((data =>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(data[0].flags.svg);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
        console.log(data[0].population);
        console.log(Object.values(data[0].languages)
        .toString().split(";").join(", "));
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="countryFlag" />
        <h2>${data[0].name.common}</h2>
        <div class=data-box> 
            <div class="data">
            <h4>Continent : </h4>
            <span> ${data[0].continents[0]}</span>
            </div>
            
            <div class="data">
             <h4>Capital : </h4> 
             <span>${data[0].capital[0]}</span>
            </div>

            <div class="data">
            <h4>Currency : </h4> 
            <span>${Object.keys(data[0].currencies)[0]}  ${data[0]
                .currencies[Object.keys(data[0].currencies)[0]].name} </span>
            </div>

            <div class="data">
            <h4>Population : </h4><span>
             ${data[0].population}</span>
            </div>

            <div class="data">
            <h4>Continent : </h4>
             <span>${Object.values(data[0].languages)
                .toString().split(";").join(", ")}</span>
            </div>
        </div>
        `
    })).catch((error) => {
        if (countryName.length ==0) {
            result.innerHTML=`
            <h3>The input field cannot be empty</h3>`
            
        }
        else {
            result.innerHTML=`
            <h3> Please enter a valid country name</h3>   `
            
        }
        
    })
})
