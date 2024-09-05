const Key = 'DG6qe6lGDHco41V8qlfSgnYbIS6Zs6cK';

const getWeather = async (id) => {
  
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${Key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${Key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};