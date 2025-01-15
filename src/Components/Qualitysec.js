import React from 'react'
import QualitysecCards from './QualitysecCards'
import photo1 from './Assests/Cards/finest-ingredients.svg'
import photo2 from './Assests/Cards/fresh-dough.svg'
import photo3 from './Assests/Cards/safety-and-quality-standards.svg'

function Qualitysec() {
    return (
        <><div className="container" style={{ borderRadius:"40px", marginTop:"90px",marginBottom:"50px",width:"90%"}}>
            <div className="container" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "20%", fontSize: "1.7em" }}>
                <p>Quality Assured</p>
            </div>
            <div className='row' style={{ width: "100%", justifyContent: "space-evenly",marginTop:"20px" }}>


                <QualitysecCards disc=" Our pizzas are crafted from the finest ingredients, giving you an authentic Italian taste with every bite." name="Finest Ingredients" photo={photo1} />


                <QualitysecCards disc="Our pizza dough is mixed on demand, so that pizza served to you is always fresh and hot" name="Fresh Dough" photo={photo2} />


                <QualitysecCards disc=" Our kitchens follow the highest safety and quality standards, fully compliant with FSSAI guidelines." name="Safety and Quality" photo={photo3} />


            </div>
        </div>
        </>
    )
}

export default Qualitysec
