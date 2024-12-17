/*
  Función que retorna los países de latinoamérica
  utilizando la URL:

  https://restcountries.com/v3.1/subregion/South%20America

  retorna una promesa usando el método fetch
*/
export function getCountries () {
  const endpointURL = 'https://restcountries.com/v3.1/subregion/South%20America'

  return fetch(endpointURL)
    .then(res => res.json())
    .then(data => data.map((country) => ({
      name: country.name.official,
      location: country.maps.googleMaps
    })))
    .catch((error) => {
      return null
    })
}
