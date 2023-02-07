import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";



export const fetchWeather = async (query) => {
 

  console.log(process.env.REACT_APP_KEY);
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "matric",
      lat: 40.863372,
      lon: -74.113181,

      AppID: process.env.REACT_APP_KEY,
    },
  });

  return data;
};
