import React from 'react';
import Slider from 'react-slick';
import '../styles/AdvertisementCarousel.css'; // Custom CSS for the carousel
import advertisementVideo from '../images/Selenium.mp4'; // Import the MP4 video file

const AdvertisementCarousel = () => {
  const courses = [
    {
      title: 'Learn Selenium with Udemy!',
      description: 'Master Selenium for web automation with hands-on projects.',
      video: advertisementVideo,
      link: 'https://www.udemy.com/course/zero-to-hero-in-selenium-webdriver-java-basics-to-advance/?referralCode=CE1EB90EDF90EFA3D6D5',
    },
    {
      title: 'Cucumber BDD course',
      description: 'Master Cucumber BDD and streamline Agile testing with clear, automated scenarios. By Shelendra.',
      video: advertisementVideo,
      link: 'https://www.udemy.com/course/cucumber-java-tutorial/?referralCode=A29218DAF04EF769F1AA',
    },
    {
      title: 'Learn React from Scratch',
      description: 'Master React and become a pro frontend developer from basic to advance.',
      video: advertisementVideo,
      link: 'https://www.udemy.com/react-course/',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-slide" onClick={() => window.open(course.link, '_blank')}>
            <video className="course-video" controls autoPlay loop muted>
              <source src={course.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <div className="course-info"> */}
              {/* <h3>{course.title}</h3> */}
              {/* <p>{course.description}</p> */}
            {/* </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertisementCarousel;
