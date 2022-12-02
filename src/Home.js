import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="home__image d-block w-100 "
          // style={{height: 700}}
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt=""
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home__image d-block w-100"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt=""
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home__image d-block w-100"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home__image d-block w-100"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt=""
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"

          data-a-hires="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          <img alt="Shop the home store" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" class="_cropped-image-link_style_fluidLandscapeImage__3eTVC _cropped-image-link_style_fluidImage__iJ3aE" data-a-hires="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg">
          alt=""
        /> */}
        {/* <div className="home__fadeBottom" /> */}
        <div className="home__row">
          <Product
            id="4903850"
            title="POLAR Ignite 2 - Fitness Smartwatch with Integrated GPS - Wrist-Based Heart Monitor - Personalized Guidance for Workouts, Recovery and Sleep Tracking - Music Controls, Weather, Phone Notifications"
            price={207.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71yBYQfbU1S._AC_SL1080_.jpg"
          />
          <Product
            id="12321341"
            title="Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera, 2-Way Audio."
            price={105.50}
            rating={3}
            image="https://m.media-amazon.com/images/I/51FXUyvOI9L._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Robots: A Brave New World?"
            price={4.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61B7+-GM5XL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538095"
            title="Garmin GPSMAP 66i, GPS Handheld and Satellite Communicator, Featuring TopoActive mapping and inReach Tech"
            price={245.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51kExPhAj9L._AC_SL1000_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829333"
            title="Sian Metal FKP3 Model Car with Light and Sound Pull Back Toy Cars for 6 Year Old Boys and Up (Blue-1 24) …"
            price={15094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71QOeDYtzDL._AC_SL1500_.jpg"
          />
          <Product
            id="49538097"
            title="Top Race Hobby Grade Remote Control Hydraulic Excavator, All Included Battery, Hydraulic Oil."
            price={1799.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61sEEWe7zzS._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
