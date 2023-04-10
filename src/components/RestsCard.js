import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export default function RestsCard({chief}) {
    return(
        <div className="chief-card">
            <img src={chief.img} alt="" />
           <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Open Time: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="chief-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                </p>
           </div>
        </div>
    )
}