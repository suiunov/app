import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import PreviousSearches from "../components/PreviousSearches"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import React from 'react'
import ResRecipeCard from "../components/ResRecipeCard"
import '../styles/search.css'


export default function Recipes() {
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState()

    useEffect(() => {
        axios.get(`http://localhost:6060/api/v1/products/search?q=${search ? search : "all"}`)
            .then((response) => {
                setProduct(response.data?.search);
            });
    }, [search])


    return (
        <div> 
            <PreviousSearches setSearch={setSearch} product={product} /> 
            <Box sx={{ display: "flex", marginBottom: "10px" }} >
                <Stack spacing={2} sx={{ width: "100%" }} className="SearchBar">
                    <Autocomplete
                        sx={{ borderRadius: "0px" }}
                        freeSolo
                        id="free-solo-2-demo"
                        className='optionbar'
                        disableClearable
                        options={product?.map((option) => option.name)}
                        renderInput={(params) => (
                            <TextField
                                className='SearchBar'
                                placeholder="Search your product"
                                {...params}
                                onSelect={e => (setSearch(e.target.value))}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Stack>
                <Box className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </Box>
            </Box> 
            <div className="recipes-container"> 
                <Grid container>
                    {product?.map((recipe, index) =>
                        <ResRecipeCard key={index} recipe={recipe} />
                    )}
                </Grid>
            </div> 
        </div>
    )
}