import { Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../components/RecipeCard"
import './index.css'

export default function LunchFoods() {
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
                <button className="button-sort" id={sort === 'Dessert' && 'button-sort-now'} onClick={(e)=>(setSort("Dessert"))}>Dessert</button>
                <button className="button-sort" id={sort === 'Pizza' && 'button-sort-now'} onClick={(e)=>(setSort("Pizza"))}>Pizza</button>
                <button className="button-sort" id={sort === 'Fried' && 'button-sort-now'} onClick={(e)=>(setSort("Fried"))}>Fried</button>
                <button className="button-sort" id={sort === 'Vegeterian' && 'button-sort-now'} onClick={(e)=>(setSort("Vegeterian"))}>Vegeterian</button>
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