const url = "http://private-4945e-weather34.apiary-proxy.com/weather34/rain";

export const fetchData = () => {
  return fetch(url);
}