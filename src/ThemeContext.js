import React, { createContext, useEffect, useState } from 'react';
import DataService from './services/dataset.service';
export const ThemeContext = createContext();
var momenttz = require('moment-timezone');
const AppId = '42e71e59565f7fb3c2d02af7772a6db5';

const ThemeContextProvider = ({ children }) => {
  const [city, setCity] = useState('Downtown Toronto');
  const [initialCoordinates, setInitialCoordinates] = useState(false);
  const [initialCity, setInitialCity] = useState(false);
  const [isCoordinatesChanged, setIsCoordinatesChanged] = useState(false);
  const [isCityChanged, setIsCityChanged] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(43.65);
  const [lon, setLon] = useState(-79.38);
  const [value, setValue] = useState('toronto');


  const request = {
    lat: lat,
    lon: lon,
    appid: AppId,
    units: 'metric'
  };
  const requestCity = {
    q: city,
    appid: AppId
  };
  // const requestJSON = JSON.stringify(request);
  // console.info(requestJSON);

  // const fetchData = async () => {
  //   const profile = await DataService.get(requestJSON);
  //   console.info('Profile Data', profile.data);
  //   setProfileData([...profile.data.Customer]);
  // };
  // console.log('moment testing', moment('2022-09-30 18:00:00').isSame('2022-09-29 18:00:00', 'HH'));
  const fetchData = async () => {
    const weather = await DataService.get(request);
    console.info('weather Data in axios call', weather.data);
    // setProfileData([...profile.data.Customer]);
    // const weather = await axios.get(
    //   'https://api.openweathermap.org/data/2.5/forecast?lat=43.65&lon=-79.38&appid=42e71e59565f7fb3c2d02af7772a6db5&units=metric'
    // );
    // console.log('weather data sample', weather.data.list);
    // setWeatherData([...weather.data.list]);
    // setWeatherData(weather.data.list);
    // console.log('weather data sample', weatherData);
    // console.log(
    //   'timezone calculator',
    //   new Date(weather.data.list[1].dt * 1000 - weather.data.city.timezone * 1000)
    // );
    const updatedWeatherData = weather.data.list.map((item) => {
      return {
        ...item,
        // dateTime: new Date(weather.data.list[0].dt * 1000 + weather.data.city.timezone * 1000)
        // dateTime: new Date(item.dt * 1000 + weather.data.city.timezone * 1000)
        // dateTime: moment.utc(item.dt_txt).tz('America/New_York').format()
        // dateTime: momenttz.utc(`${item.dt_txt}`).tz('America/Toronto')
        dateTime: momenttz.utc(item.dt_txt).tz('America/Toronto').format()
      };
    });
    console.log('updated', updatedWeatherData);
    // console.log(
    //   'timezone calculator',
    //   new Date(weather.data.list[0].dt * 1000 + weather.data.city.timezone * 1000)
    // );
    setWeatherData(updatedWeatherData);
    // console.log('add 1 day', moment(updatedWeatherData[0].dateTime).add(1, 'days')._d);
  };

  useEffect(() => {
    const path = window.location.pathname.split('/');
    console.info('pValue', path);
    switch (path[1]) {
      case '/':
        setValue('toronto');
        setCity('Downtown Toronto');
        setIsCityChanged((prev) => !prev);
        break;
      case 'ottawa':
        setValue('ottawa');
        setCity('ottawa');
        setIsCityChanged((prev) => !prev);
        break;
      case 'montreal':
        setValue('montreal');
        // console.log('city testing', city);
        setCity('montreal');
        setIsCityChanged((prev) => !prev);
        break;
      default:
        setValue(value);
        //Below setCity is for switching the tab
        setCity('Downtown Toronto');
        //Below setIscityChanged is for complete webpage reload use case
        setIsCityChanged((prev) => !prev);
        break;
    }
  }, []);
  useEffect(() => {
    // setCoordinatesChanged(true);

    // Below setStates are for avoiding api call calling twice
    setInitialCoordinates(true);
    setInitialCity(true);
    // setIsCityChanged(true);
  }, []);
  useEffect(() => {
    // console.log('isCityChanged value', isCityChanged);
    console.log('initialcity value', initialCity);
    const fetchCoordinates = async () => {
      const coordinates = await DataService.searchCoordinates(requestCity);
      setLat(coordinates.data.city.coord.lat);
      setLon(coordinates.data.city.coord.lon);
      setInitialCoordinates(true);
      setIsCoordinatesChanged((prev) => !prev);
    };
    if (initialCity) {
      fetchCoordinates();
    }
    // fetchCoordinates();

    // setTimeout(() => {
    //   fetchCoordinates();
    // }, 200);
  }, [isCityChanged, city]);
  useEffect(() => {
    console.log('initialCoordinates updated', initialCoordinates);

    // removed for testing
    if (initialCoordinates) {
      fetchData();
    }
    // removed for testing

    // fetchData();

    // setTimeout(() => {
    //   fetchData();
    // }, 200);
  }, [isCoordinatesChanged]);

  const handleChange = (event, newValue) => {
    console.info('event', event);
    console.info('newValue', newValue);
    setValue(newValue);
    if (newValue === 'toronto') {
      setCity('Downtown Toronto');
      return;
    }
    setCity(newValue);
  };

  return (
    <>
      <ThemeContext.Provider value={{ weatherData, value, handleChange }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeContextProvider;
