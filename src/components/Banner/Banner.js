import { Container, makeStyles ,Typography} from '@material-ui/core';
import React from 'react'
import Corousels from './Corousels';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: 'url(./banner.jpeg)',
  },
  bannerContent: {
    height: 710,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around"
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  textGradient: {
    background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography 
            variant='h2' 
            className={classes.textGradient}  // Applying the gradient class here
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: 'white'
            }}
          >
           Welcome to Wealthy Wise 
           Crypto Dashboard! 
          </Typography>
          <Typography 
            variant='subtitle2' 
            style={{
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              color: 'darkgrey'
            }}
          >
            Get all Info regarding your favourite Crypto Currency
          </Typography>
        </div>
        <Corousels />
      </Container>
    </div>
  );
}

export default Banner;
