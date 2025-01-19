import React from 'react'
import MenuSlider from './MenuSlider'
import MenuPizza from './menuFolder/MenuPizza'
import MenuBurger from './menuFolder/MenuBurger'
import { useState,useEffect } from 'react';

export default function Menu() {

  // const [StyleAll, setStyleAll] = useState("none")
  const [StyleB, setStyleB] = useState("none")
  const [StyleP, setStyleP] = useState("none")


    useEffect(() => {

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const targetPosition = 500; // Change this value to your desired scroll position 
        if (scrollPosition >= targetPosition) { // Perform your action here
          console.log('You have reached the target position!');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  const handleData = (value) => {
    if (value === 1) {
      if (StyleB || StyleP) {
        setStyleB(true);
        setStyleP(true);
      } else {
        setStyleB(false);
        setStyleP(false);
      }

    } else if (value === 2) {

      setStyleB(false);
      setStyleP(true);
      console.log(value)
    } else if (value === 3) {

      setStyleB(true);
      setStyleP(false);
    }
  }


      return (
        <div >
          <div  style={{ display: "flex" ,flexDirection:'column'}}>
            <div >
              <MenuSlider sendData={handleData} />
            </div>
            <div className='container' style={{ width: "100%", justifyContent: "space-evenly", flexDirection: "column" }}>
              <div className="container" style={{ width: "100%", display: StyleP ? "inline" : "none" }}>
                <MenuPizza />
              </div>
              <div className="container" style={{ width: "100%", display: StyleB ? "inline" : "none" }}>
                <MenuBurger />
              </div>
            </div>
          </div>
        </div>
      )
    }