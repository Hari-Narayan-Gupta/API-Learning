import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar'; // Import Navbar
// import Banner from './components/Banner';
import ApiFeature from './components/ApiFeature';
import Footer from './components/Footer'; // Import Footer
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Banner /> */}
      <div className="content">
        <ApiFeature />
      </div>
      <Footer />
    </div>
  );
}

export default App;
