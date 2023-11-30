import axios from "axios";

export const ApiRapidCar = () => {
  return axios.create({
    baseURL: "https://car-api2.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": "918f778a09msh80e4b2b08736d3dp17dccdjsn706e66c767b0",
      "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
    },
  });
};
