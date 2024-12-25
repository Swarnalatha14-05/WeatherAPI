const apiKey="3055401b77e64aa592060316242911";
const apiUrl="http://api.weatherapi.com/v1/current.json";

async function fetchWeather(city) {
    try{
        const fullUrl=`${apiUrl}?key ${apiKey} &q=${encodeURIComponent(city)}`;

        const response = await fetch(fullUrl);
        if(!response.ok){
            throw new Error(`Error:${response.status} ${response.statusText}`);
        }
        const data= await response.json();
        console.log("Weather Data:",data);
        return data;
    }catch(error){
        console.error("failed to fetch weather data:",error)
    }
}
fetchWeather("new york");