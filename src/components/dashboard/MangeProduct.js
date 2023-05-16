import RefreshIcon from '@mui/icons-material/Refresh';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddModel from './AddModel';
import UpdateModel from './UpdateModel';

function MangeProduct() {
    const [open, setOpen] =  useState(false);
    const [openUpdate, setOpenUpdate] =  useState(false);
    const [product, setProduct] = useState()
    const [productUpdate, setProductUpdate] = useState()
    const [status, setStatus] = useState(1)
   

    const handleOpen = () => setOpen(true);
    const handleOpenUpdate = (data) => {
        setProductUpdate(data)
        setOpenUpdate(true)

    };


    useEffect(()=>{
        axios.get('http://localhost:6060/api/v1/products/find')
        .then((response) => {
          setProduct(response.data?.product); 
        });
    },[status])

    

    const handleOnDelate =(id)=>{
    axios.delete(`http://localhost:6060/api/v1/products/delete/${id}`)
  .then((response) => { 
    setStatus( status == 0? 1:0)
    alert("Product Delete Success!"); 
   
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
                    
                        <Grid item className='d-flex'>
                            <Button onClick={handleOpen} variant="contained" sx={{ mr: 1 }}>
                                Add New Product
                            </Button> 
                            <Tooltip title="Reload">
                                <IconButton onClick={(e)=>setStatus( status == 0? 1:0)}>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <AddModel open={open} setOpen={setOpen}/>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container p={2}>
                {
                    product?.map((data, idx)=>(
                        <Grid item xs={12} md={6} lg={4} key={idx} >
                        <Card sx={{ maxWidth: 345, margin:"4px" }} >
                            <CardMedia
                                sx={{ height: 140 }}
                                image={data?.image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data?.name}
                                </Typography>
                                <Typography gutterBottom variant="body" component="div">
                                    {data?.price} NT$
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data?.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={(e) =>handleOpenUpdate(data)}>Update</Button>
                                <Button size="small" onClick={(e)=> handleOnDelate(data?._id)}>Delete</Button>
                            </CardActions>
                            <UpdateModel openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} product={productUpdate} setStatus={setStatus} status={status} />
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>
        </Paper>
    )
}

export default MangeProduct
