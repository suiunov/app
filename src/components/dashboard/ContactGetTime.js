import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ContactGetTime({contact}) {

    const [day, setDay] = useState()
    const [hours, setHours] = useState()


    useEffect(()=>{
        axios.get(`http://localhost:6060/api/v1/users/contact/time/${contact?._id}`)
        .then((response) => {
            setDay(response?.data?.days)
            setHours(response?.data?.remainingHours)
        });
    },[])

    console.log(day,hours )

    return (
        <div>
            <Typography >  {day === 0 ? hours: day} {day === 0 ? "hours": "day"} ago</Typography>
        </div>
    )
}

export default ContactGetTime
