import { AppBar, Box, Grid, Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContactGetTime from './ContactGetTime';

function ContactFrom() {
    const [contacts, setContact]= useState([])

    


    useEffect(()=>{
        axios.get('http://localhost:6060/api/v1/users/contact')
        .then((response) => {
          setContact(response?.data);  
        });
    },[]) 

    console.log('contacts', contacts)

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
                        <Typography>User Contact </Typography>
                    </Grid>
                </Toolbar>
            </AppBar> 
                <div className='' > 
                    { contacts?.map((contact, idx)=>(
                        <div className='box-sw m-2 p-3' idx={idx}>
                          <div className='d-flex border-bottom p-2'>
                              <Box>
                              <Typography variant='button'>User id: {contact?.userID}</Typography>
                             <Typography variant='subtitle2'>Name: {contact?.name}</Typography>
                             <Typography variant='subtitle2'>Name: {contact?.email}</Typography>
                              </Box>
                             <ContactGetTime contact={contact} /> 
                          </div> 
                          <div className='boxMinHight'>
                             <Typography variant='subtitle2'> Message: </Typography> 
                             
                             <Typography variant='body2'>{contact?.message} </Typography> 
                          </div>
                         
                       </div>
                    ))}
                      

                </div> 
            
        </Paper>
    )
}

export default ContactFrom
