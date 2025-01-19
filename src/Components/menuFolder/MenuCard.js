import React from 'react'
import photo from '../Assests/Pizza PNG -.jpeg'

function MenuCard(props) {
  return (
    <>
      <div className="card" style={{width:" 18rem;"}}>
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body my-3">
          <h5 className="card-title my-3">Card title</h5>
          <p className="card-text my-3">$75/150/250</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default MenuCard