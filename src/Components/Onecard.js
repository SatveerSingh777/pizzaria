import React from 'react'
function Onecard(props) {
  return (
    
    <div className="card" style={{width: "18rem" ,margin:"10px 0px"}}>
        <img src={props.photo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title fw-bolder">{props.name}</h5>
                <p className="card-text">{props.disc}</p>
                <a href="/" className="btn btn-primary my-3" style={{backgroundColor:"brown", border:"none"}}>Go somewhere</a>
            </div>
    </div>

  )
}

export default Onecard
