function fetchCountryData() {
  const apiUrl = "https://restcountries.com/v3.1/name/";

  const countryName = prompt("Enter a country name:");

  if (!countryName) {
    return; 
  }
  const fullApiUrl = `${apiUrl}${countryName}`;

  fetch(fullApiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Country not found!");
      }
      return response.json();
    })
    .then((data) => {
      const countryInfo = data[0];

      const currencies = Object.values(countryInfo.currencies).map(
        (currency) => currency.name
      );

      const htmlContent = `
        <h2>${countryInfo.name.common}</h2>
        <p>Capital: ${countryInfo.capital.join(", ")}</p>
        <p>Population: ${countryInfo.population}</p>
        <p>Region: ${countryInfo.region}</p>
        <p>Subregion: ${countryInfo.subregion}</p>
        <p>Language: ${Object.values(countryInfo.languages).join(", ")}</p>
        <p>Currency: ${currencies.join(", ")}</p>
        <img src="${countryInfo.flags.png}" alt="${countryInfo.name.common} Flag" />
      `;

      const countryInfoElement = document.querySelector(".country-info");
      countryInfoElement.innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error(error);
      alert("Country information could not be retrieved.");
    });
}

window.addEventListener("load", fetchCountryData);
