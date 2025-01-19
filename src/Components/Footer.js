import React from 'react'
import { Link } from 'react-router-dom'
// import Photo1 from './Assests/5842999aa6515b1e0ad75ae1.png'
function Footer() {
  return (
    <footer className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start" >
        <Link to="/"> <p  style={{fontFamily:"'Times New Roman', Times, serif",fontWeight:"bolder",fontSize:"20px",color:"red"}}>PIZZA ART</p></Link> 
        </div>
  
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer

 