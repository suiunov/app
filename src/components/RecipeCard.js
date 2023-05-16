import { Grid } from "@mui/material"
import { Link } from "react-router-dom"
import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return(
         <Grid item xs={12} md={6} lg={4} sx={{padding:"3px"}} className="recipe_card">
           <Link to={`/recipe/details/${recipe?._id}`} >
           <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.name}</p>
                <p className="recipe-title">{recipe.chname}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <p className="recipe-price">{recipe.price} NT$</p>
            </div>
            </div>
           </Link>
         </Grid>
    )
}