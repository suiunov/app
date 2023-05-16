import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import RestsCard from './RestsCard';

function Lunchdinner() {

    const [lunchDinner, setLunchDinner] = useState()

    useEffect(() => {
        axios.get('http://localhost:6060/api/v1/restaurants/find/lunchdinner')
            .then((response) => {
                setLunchDinner(response.data?.restaurants);
            });

    }, [])
    return (
        <Fragment> 
            <div className="section rests">
                <h1 className="title">Lunch & Dinner</h1>
                <div className="lists-rests-container">
                    {lunchDinner?.map((chief, idx) => <RestsCard key={idx} chief={chief} />)}
                </div>
            </div> 
        </Fragment>
    )
}

export default Lunchdinner
