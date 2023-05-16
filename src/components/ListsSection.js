import { Button } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import RestsCard from "./RestsCard"

export default function ListsSection(){

    const [breakfast , setBreakfast] = useState()
    const [lunchDinner , setLunchDinner] = useState()


    useEffect(() => {
        axios.get('http://localhost:6060/api/v1/restaurants/find/breakfast')
            .then((response) => {
                setBreakfast(response.data?.restaurants);
            });


            axios.get('http://localhost:6060/api/v1/restaurants/find/lunchdinner')
            .then((response) => {
                setLunchDinner(response.data?.restaurants);
            });

    }, [ ])
        
    return(
        <div className="section rests">
            <h1 className="title">Breakfast</h1>
            <div className="lists-rests-container" style={{marginBottom:"10px"}}>
                { breakfast?.slice(0,4)?.map((chief, idx) => <RestsCard key={idx} chief={chief} path={'breakfast'} />) }  
            </div>
              <Link to="/breakfast">
              <Button size="small" color="error" variant="contained">More..</Button>
             </Link>
           
            <br/><br />
            <h1 className="title">Lunch & Dinner</h1>
            <div className="lists-rests-container" style={{marginBottom:"10px"}}>
                { lunchDinner?.slice(0,4)?.map ((chief, idx) => <RestsCard key={idx} chief={chief} path={'lunchdinner'} />) }
            </div>

            <Link to="/lunchdinner"  > 
                    <Button size="small" color="error" variant="contained">More..</Button>
             </Link>
        </div>
    )
}