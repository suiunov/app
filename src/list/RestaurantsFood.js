import { Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../components/RecipeCard"
import './index.css'

export default function RestaurantsFood() {
    const [isRecipes, setRecipes]= useState([])
    const [sort, setSort]= useState('all')
    const {id}= useParams()


    useEffect(() => { 
        axios.get(`http://localhost:6060/api/v1/products/sort/${sort}/${id}`)
        .then((response) => {
            setRecipes(response.data?.food);
        });

}, [sort])
    
     
 
    return (
        <div> 
            <div className="d-flex-start "> 
            <button className="button-sort" id={sort === 'all' && 'button-sort-now'}  onClick={(e)=>(setSort("all"))}> All Foods</button>
                <button className="button-sort" id={sort === 'Burger' && 'button-sort-now'} onClick={(e)=>(setSort("Burger"))}> Burger</button>
                <button className="button-sort" id={sort === 'Sandwich' && 'button-sort-now'} onClick={(e)=>(setSort("Sandwich"))}>Sandwich</button>
                <button className="button-sort" id={sort === 'Scallion Pancake' && 'button-sort-now'} onClick={(e)=>(setSort("Scalion Panceke"))}>Scallion Pancake</button>
                <button className="button-sort" id={sort === 'Pancake Roll' && 'button-sort-now'} onClick={(e)=>(setSort("Pancake Roll"))}>Pancake Roll</button>
                <button className="button-sort" id={sort === 'Toast' && 'button-sort-now'} onClick={(e)=>(setSort("Toast"))}>Toast</button>
                <button className="button-sort" id={sort === 'Dessert' && 'button-sort-now'} onClick={(e)=>(setSort("Dessert"))}>Dessert</button>
                <button className="button-sort" id={sort === 'Drinks' && 'button-sort-now'} onClick={(e)=>(setSort("Drinks"))}>Drinks</button>
            </div>
            <div className="recipes-container">
                {/* <Recipecard />*/}
                {isRecipes?.map((recipe, index) =>
                    <Grid container className="pt-2">
                         <RecipeCard key={index} recipe={recipe} />
                    </Grid>
                )}
            </div> 
        </div>
    )
}