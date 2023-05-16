import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"

function RestsCard({chief, path}) { 
   
    return(
        <div className="chief-card">
            <img src={chief?.image} alt="" />
           <div className="chief-card-info">
                <h3 className="chief-card-name">
                    <Link to={`/recipe/${path}/${chief?._id}`}>{chief?.name}</Link>
                </h3>
                <p className="chief-recipe-count">Time: <b>{chief?.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief?.cuisine}</b></p>
                <p className="chief-icon">
                 <a href={chief?.address} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt}/></a>
                </p>
           </div>
        </div>
    )
}

export default RestsCard;