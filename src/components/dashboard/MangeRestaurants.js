import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AddRestaurantsModel from './AddRestaurantsModel';
import UpdateRestaurantsModel from "./UpdateRestaurantsModel";

function MangeRestaurants() {
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [restaurants, setRestaurants] = useState()
    const [RestaurantsUpdate, setRestaurantsUpdate] = useState()
    const [status, setStatus] = useState(1)

    const handleOpen = () => setOpen(true);
    const handleOpenUpdate = (data) => {
        setRestaurantsUpdate(data)
        setOpenUpdate(true)

    };


    useEffect(() => {
        axios.get('http://localhost:6060/api/v1/restaurants/find')
            .then((response) => {
                setRestaurants(response.data?.restaurants);
            });
    }, [status])



    const handleOnDelate = (id) => {
        axios.delete(`http://localhost:6060/api/v1/restaurants/delete/${id}`)
            .then((response) => {
                setStatus(status == 0 ? 1 : 0)
                alert("Restaurants Delete Success!");

            });
    }
    return (
        <Paper sx={{ maxWidth: "98%", margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">


                        <Grid item>
                            <Button onClick={handleOpen} variant="contained" sx={{ mr: 1 }}>
                                Add New Restaurant
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton onClick={(e) => setStatus(status == 0 ? 1 : 0)}>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <AddRestaurantsModel open={open} setOpen={setOpen} />
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container p={2}>
                {
                    restaurants?.map((data, idx) => (
                        <Grid item xs={12} md={6} lg={4} key={idx} className="p-2">

                            <div className="box-sw p-2">
                            <div className="chief-card  ">
                                <img src={data?.image} alt="" />
                                <div className="chief-card-info">
                                    <h3 className="chief-card-name">
                                        <Link to={data?._id}>{data?.name}</Link>
                                    </h3>
                                    <p className="chief-recipe-count">Time: <b>{data?.recipesCount}</b></p>
                                    <p className="chief-cuisine">Cuisine: <b>{data?.cuisine}</b></p>
                                    <p className="chief-icon">
                                        <a href={data?.address}><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
                                    </p>
                                </div> 
                            </div>
                            <div> 
                                <Typography variant="body2 " className="mt-1">
                                        {data?.description}
                                    </Typography>
                                    <div className="d-flex">
                                    <Button size="small" onClick={(e) =>handleOpenUpdate(data)}>Update</Button>
                                    <Button size="small" onClick={(e)=> handleOnDelate(data?._id)}>Delete</Button>
                                    </div>
                                </div>
                                <UpdateRestaurantsModel openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} restaurants={RestaurantsUpdate} setStatus={setStatus} status={status}/>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Paper>
    )
}

export default MangeRestaurants
