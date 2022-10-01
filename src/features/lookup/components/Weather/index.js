import { useContext } from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

import { ThemeContext } from '../../../../ThemeContext';
import moment from 'moment';
import { Image, ImageContainer, MainBox, SectionBox, TempBox } from './styled';

const Weather = () => {
  const { weatherData } = useContext(ThemeContext);
  const filteredWeather = [];
  const data = weatherData.map((item) => {
    for (let i = 1; i <= 4; i++) {
      if (moment(moment(weatherData[0].dateTime).add(i, 'days')._d).isSame(item.dateTime)) {
        filteredWeather.push(item);
      }
    }
  });

  const weekDays = filteredWeather.map((item) => {
    const day = moment(item.dateTime).format('dddd').slice(0, 3);
    // console.log(day);
    return (
      <Card
        key={item.dt}
        sx={{
          border: '0px solid green',
          width: '150px',
          height: '150px',
          m: 0.3,
          background: '#bbdefb',
          display: 'grid',
          justifyItems: 'center',
          alignItems: 'center'
        }}>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontSize: '1rem' }}>
          {day}
        </Typography>

        <Box sx={{ width: '60px', height: '60px', border: '0px solid blue' }}>
          <Image src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
        </Box>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
          {item.main.temp}&#xb0;
        </Typography>
      </Card>
    );
  });
  return (
    <>
      {weatherData.length > 0 && (
        <MainBox>
          <SectionBox>
            <Card sx={{ border: '0px solid blue', background: '#bbdefb' }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                  {/*Today*/}
                  {/*{moment(weatherData[0].dateTime).format('dddd')}*/}
                  {moment(weatherData[0].dateTime).calendar().slice(0, 5)}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    border: '0px solid red'
                  }}>
                  <ImageContainer>
                    <Image
                      src={`http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png`}
                    />
                  </ImageContainer>
                  <TempBox
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column'
                    }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontSize: '2.5rem', border: '0px solid blue' }}>
                      {weatherData[0].main.temp}&#xb0;
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {weatherData[0].weather[0].main}
                    </Typography>
                  </TempBox>
                </Box>
              </CardContent>
            </Card>
            <Box columnGap={1} sx={{ display: 'flex', mt: 1 }}>
              {weekDays}
            </Box>
          </SectionBox>
        </MainBox>
      )}
    </>
  );
};

export default Weather;
