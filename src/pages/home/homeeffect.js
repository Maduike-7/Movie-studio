import React, { useEffect } from 'react';
// import './styles.css'; // Make sure to include your CSS file with .monster and .hideme classes



const Homeeffect = ({projects}) => {



  useEffect(() => {
    // Equivalent of $(document).ready(function() { ... })
    // This code will run once the component is mounted

    // Fade in and out .monster elements
    const monsters = document.querySelectorAll('.monster');
    monsters.forEach((monster) => {
      monster.style.opacity = '0';
      fadeInOut(monster);
    });

    // Fade in .hideme elements when they come into view
    const hideMeElements = document.querySelectorAll('.hideme');
    hideMeElements.forEach((element) => {
      element.style.opacity = '0';
    });

    // Function to handle the fade in and out effect
    function fadeInOut(element) {
      setTimeout(() => {
        element.style.transition = 'opacity 1s';
        element.style.opacity = '1';
        setTimeout(() => {
          element.style.transition = 'opacity 1s';
          element.style.opacity = '0';
          fadeInOut(element); // Continue the loop
        }, 2000); // Change the fade duration here (in milliseconds)
      }, 2000); // Change the delay between fades here (in milliseconds)
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle the fade in effect for .hideme elements
    function fadeInVisibleElements() {
      hideMeElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.style.transition = 'opacity 1.5s';
          element.style.opacity = '1';
        }
      });
    }

    // Attach the fadeInVisibleElements function to the scroll event
    window.addEventListener('scroll', fadeInVisibleElements);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', fadeInVisibleElements);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
    {}
    </div>
  );
};

export default Homeeffect;
