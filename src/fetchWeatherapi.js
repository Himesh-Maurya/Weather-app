import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (find) => {
  const { data } = await axios.get(URL, {
    params: {
      q: find,
      units: "matric",
      lat: 40.863372,
      lon: -74.113181,

      AppID: process.env.REACT_APP_KEY,
    },
  });

  return data;
};
