import React from 'react'
import "./Card.css"
import Photo1 from "./Assests/Cards/Margarita Pizza Margherita Italian Cuisine Tomato PNG - Free Download.jpeg"
import Photo2 from "./Assests/Cards/Download premium png of PNG Pizza food white background mozzarella_ by Ratcharin Noiruksa about pizza png, pizza, pepperoni pizza, pizza and pizza slice, and vegetables png 13245353.jpeg"
import Photo3 from "./Assests/Cards/Pizza BBQ Chicken PNG Transparente Sem Fundo.jpeg"
import Photo4 from "./Assests/Cards/9e4c7eb1-b26d-440a-ba88-0525f47e984f.jpeg"

import Onecard from './Onecard'

function Cards() {
    return (
        <div className='row' style={{ width: "100%", justifyContent: "space-evenly" }}>
            <Onecard name = {"Margherita"} disc={"Classic simplicity with tomato sauce, fresh mozzarella, and basil."} photo={Photo1} />
            <Onecard name = {"Pepperoni"} disc={"Loaded with pepperoni slices and gooey mozzarella cheese."} photo={Photo2} />
            <Onecard name = {"BBQ Chicken"} disc={"Grilled chicken, BBQ sauce, red onions, and cilantro."} photo={Photo3}/>
            <Onecard name = {"Hawaiian"} disc={"A tropical blend of ham, pineapple, and mozzarella."} photo={Photo4}/>
            <Onecard name = {"Veggie Supreme"} disc={"A garden of vegetables including bell peppers, onions, olives, and mushrooms."} photo={Photo2}/>
            <Onecard name = {"Meat Lovers"} disc={"A hearty combination of sausage, bacon, ham, and pepperoni."}photo={Photo2} />
            <Onecard name = {"Buffalo Chicken"} disc={"Spicy buffalo sauce, chicken, and a drizzle of ranch or blue cheese."} photo={Photo2}/>
            <Onecard name = {"Four Cheese"} disc={"A rich mix of mozzarella, parmesan, gorgonzola, and provolone."} photo={Photo2}/>
        </div>
    )
}

export default Cards
