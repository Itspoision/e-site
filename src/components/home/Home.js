import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import BottomNav from '../layout/BottomNav';

// Women's images
import home1 from '../assets/home7.jpg';
import home2 from '../assets/home6.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';
import home5 from '../assets/home5.jpg';
import home6 from '../assets/home2.jpg';
import home7 from '../assets/home1.jpg';
// ... other women's images

// Men's images
import menImage1 from '../assets/men1.jpg';
import menImage2 from '../assets/men2.jpg';
import menImage3 from '../assets/men3.jpg';
import menImage4 from '../assets/men4.jpg';
import menImage5 from '../assets/men5.jpg';
import menImage6 from '../assets/men6.jpg';
import menImage7 from '../assets/men7.jpg';
// ... other men's images

// Kids' images
import kidsImage1 from '../assets/kid1.jpg';
import kidsImage2 from '../assets/kid2.jpg';
import kidsImage3 from '../assets/kid3.jpg';
import kidsImage4 from '../assets/kid4.jpg';
import kidsImage5 from '../assets/kid5.jpg';
import kidsImage6 from '../assets/kid6.jpg';
import kidsImage7 from '../assets/kid7.jpg';


import './home.css';

const Home = () => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(2);
  const [visibleThumbnails, setVisibleThumbnails] = useState([0, 1, 2]);

  // Define content for both sections
  const contentData = {
    women: [
      {
        image: home1,
        title: "Women's Collection 2024",
        subtitle: "Check out our latest collection",
        buttonText: "Shop Now"
      },
      {
        image: home2,
        title: "New Arrivals",
        subtitle: "Discover our spring essentials",
        buttonText: "Explore"
      },
      {
        image: home3,
        title: "New Arrivals",
        subtitle: "Discover our spring essentials",
        buttonText: "Explore"
      },
      {
        image: home4,
        title: "New Arrivals",
        subtitle: "Discover our spring essentials",
        buttonText: "Explore"
      },
      {
        image: home5,
        title: "New Arrivals",
        subtitle: "Discover our spring essentials",
        buttonText: "Explore"
      },
      {
        image: home6,
        title: "New Arrivals",
        subtitle: "Discover our spring essentials",
        buttonText: "Explore"
      },
      {
        image: home7,
        title: "New Arrivals",
        subtitle: "Discover our spring essentials",
        buttonText: "Explore"
      },

      // ... other women's slides
    ],
    men: [
      {
        image: menImage1,
        title: "Men's Collection 2024",
        subtitle: "Discover our latest men's styles",
        buttonText: "Shop Now"
      },
      {
        image: menImage2,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: menImage3,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: menImage4,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: menImage5,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: menImage6,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: menImage7,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      }, // ... other men's slides
    ],
    kids: [
      // ... other kids' slides
      {
        image: kidsImage1,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: kidsImage2,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: kidsImage3,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: kidsImage4,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: kidsImage5,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: kidsImage6,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
      {
        image: kidsImage7,
        title: "New Arrivals",
        subtitle: "Fresh styles for the modern man",
        buttonText: "Explore"
      },
    ]
  };

  // Determine which content to show based on current path
  const isWomenSection = location.pathname === '/women';
  const isMenSection = location.pathname === '/men';
  const isKidsSection = location.pathname === '/kids';
  const slides = isWomenSection ? contentData.women : isMenSection ? contentData.men : isKidsSection ? contentData.kids : []  ;

  const handleSlideChange = React.useCallback((index) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
    
    let newVisibleThumbnails;
    if (index === 0) {
      newVisibleThumbnails = [0, 1, 2];
    } else if (index === slides.length - 1) {
      newVisibleThumbnails = [slides.length - 3, slides.length - 2, slides.length - 1];
    } else {
      newVisibleThumbnails = [index - 1, index, index + 1];
    }
    
    newVisibleThumbnails = newVisibleThumbnails.filter(idx => idx >= 0 && idx < slides.length);
    setVisibleThumbnails(newVisibleThumbnails);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    // Reset current slide when switching sections
    setCurrentSlide(0);
    setPrevSlide(2);
    setVisibleThumbnails([0, 1, 2]);
  }, [location.pathname]);

  // Update the auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      handleSlideChange(nextIndex);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length, handleSlideChange]);

  return (
    <div className="home-container">
      <Navbar />
      
      <div className="hero-slider">
        {/* Main Hero Background */}
        <div className="hero-background">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${
                index === currentSlide 
                  ? 'active' 
                  : index === prevSlide 
                    ? 'previous' 
                    : ''
              }`}
            >
              <img src={slide.image} alt={slide.title} className="hero-image" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`content-slide ${currentSlide === index ? 'active' : ''}`}
            >
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.buttonText}</button>
            </div>
          ))}
        </div>

        {/* Preview Thumbnails */}
        <div className="preview-thumbnails">
          {slides
            .filter((_, index) => visibleThumbnails.includes(index))
            .map((slide, index) => (
              <div 
                key={visibleThumbnails[index]}
                className={`preview-thumb ${visibleThumbnails[index] === currentSlide ? 'active' : ''}`}
                onClick={() => handleSlideChange(visibleThumbnails[index])}
              >
                <div className="preview-wrapper">
                  <img 
                    src={slide.image} 
                    alt={`Preview ${visibleThumbnails[index] + 1}`}
                    className="preview-image"
                  />
                  <div className="preview-overlay"></div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;