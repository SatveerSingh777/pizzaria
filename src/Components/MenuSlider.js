import React from 'react'
import './Menu.css'
// import {  useState} from "react";

function MenuSlider(props) {
    const handleOnClick =(value)=>{
        props.sendData(value)
    }
    return (
        <div>
            <div className="bar">
                <ul>
                    <li onClick={()=>{handleOnClick(1)}}>All</li>
                    <li onClick={()=>{handleOnClick(2)}}>Pizza</li>
                    <li onClick={()=>{handleOnClick(3)}}>Burger</li>
                </ul>
            </div>
        </div>
    )
}

export default MenuSlider

