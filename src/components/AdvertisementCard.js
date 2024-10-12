import React from 'react';
import '../styles/AdvertisementCard.css';   
import advertisement2 from '../images/advertisement2.webp'; // Importing the image file

const AdvertisementCard = () => {
  const handleVideoClick = () => {
    window.open('https://learn-automation.com/', '_blank'); // Udemy course link
  };

  return (
    <div className="advertisement-card" onClick={handleVideoClick}>
      <div className="video-thumbnail">
        <img
          src={advertisement2}
          alt="Udemy Course Thumbnail"
          className="thumbnail-image"
        />
      </div>
      <div className="ad-content">
        <h3 className="ad-title">Learn Selenium with Udemy!</h3>
        <p className="ad-description">
          Master API development with this hands-on course from Udemy. Click to learn more and start today!
        </p>
      </div>
    </div>
  );
};

export default AdvertisementCard;
