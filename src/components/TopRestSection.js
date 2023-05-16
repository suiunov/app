import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import RestsCard from "./RestsCard";

function TopRestSection(){
    const [restaurants, setRestaurants] =  useState()

    useEffect(() => {
        axios.get('http://localhost:6060/api/v1/restaurants/find')
            .then((response) => {
                setRestaurants(response.data?.restaurants);
            });
    }, [])
        
    return(
        <div className="section rests">
            <h1 className="title">Top Restaurants</h1>
            <div className="top-rests-container">
                { restaurants?.slice(0,3).map((chief, idx) => <RestsCard key={idx} chief={chief} />) }
            </div>
            <div className="c-btn">
                <Link to="/restaurants">
                    <button className="btn">More...</button>
                </Link>
            </div>
        </div>
    )
}

export default TopRestSection;