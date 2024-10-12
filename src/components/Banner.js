import React from 'react';
import '../styles/Banner.css';
import BannerImage from '../images/Banner.webp'; // Import the banner image

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="API Learning Banner" className="banner-image" />
      <div className="banner-content">
        {/* <h1>API Learning Platform</h1>
        <p>Learn how to interact with APIs easily</p> */}
      </div>
    </div>
  );
};

export default Banner;
