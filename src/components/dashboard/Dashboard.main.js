import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect } from 'react';
import './Dmain.css';


const backgroundColor = [
    '#D291BC', '#d98b56', '#7C9D8E', '#BAB86C',
    '#8B8000',
    '#3F000F',
    '#3D3635',
    '#AF9B60',
    '#F8B88B',
    '#F778A1',
    '#4E5180',
    '#736AFF',
    '#B8860B',
    '#5453A6',
    '#9ACD32',
    '#54C571',
    '#004225',
    '#7C9D8E',
    '#9ACD32',



]

const DashboardMain = () => {
    const [category, setCategory] = React.useState()

    useEffect(() => {
        axios.get(' https://server1.rishati.com/api/v1/category/all')
            .then((response) => {
                setCategory(response.data);
            });
    }, []);

    return (
        <Fragment>
            <div className="main-page">
                <div className="container-fluid">
                    <div className="page-title-div">
                        <h2 className="title text-left">Dashboard</h2>
                    </div>
                </div>
                <section className="section">
                    <Container className="container-fluid">
                        <Grid container spacing={2}>

                            
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }} >

                                        <Box className="dashboard-stat dp-grid dashboard_main_regd"
                                            sx={{ backgroundColor: `${backgroundColor[0]}`, color: "white" }}
                                        // to={`/dashboard/manage_category/${data._id}`}
                                        >
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <img className='fontSize-25' src="" width="50px" height="50px" />
                                                </Box>
                                                <Box className='dp-grid text-left'>
                                                    <span className=" " style={{ color: "white" }}>0</span>
                                                    <span className="name">Product</span>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                               


                        </Grid>

                    </Container>
                </section> 
                       
            </div>


        </Fragment>
    );
};

export default DashboardMain;