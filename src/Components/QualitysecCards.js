import React from 'react'

function QualitysecCards(props) {
    return (
        <div className="card" style={{ width: "18rem", margin: "10px 0px" , border:"none"}}>
            <img src={props.photo} className="card-img-top" alt="..." style={{height:"100px"}}/>
            <div className="card-body text-center">
                <h5 className="card-title fw-bolder" style={{fontSize: "1.2em"}}>{props.name} </h5>
                <p className="card-text"style={{fontSize: "1em",fontWeight:"30%"}}>{props.disc}</p>
            </div>
        </div>
    )
}

export default QualitysecCards
