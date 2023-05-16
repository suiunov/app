import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import RestsCard from './RestsCard';

function Breakfast() {

    const [breakfast , setBreakfast] = useState()

    useEffect(() => {
        axios.get('http://localhost:6060/api/v1/restaurants/find/breakfast')
            .then((response) => {
                setBreakfast(response.data?.restaurants);
            });


           
    }, [ ])
    return (
         <Fragment> 
             <div className="section rests">
            <h1 className="title">Breakfast</h1>
            <div className="lists-rests-container">
                { breakfast?.map((chief, idx) => <RestsCard key={idx} chief={chief} />) }  
            </div> 
        </div> 
         </Fragment>
    )
}

export default Breakfast
