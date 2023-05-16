import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetCommentTime({comment}) {

    const [day, setDay] = useState()
    const [hours, setHours] = useState()


    useEffect(()=>{
        axios.get(`http://localhost:6060/api/v1/comment/time/${comment?._id}`)
        .then((response) => {
            setDay(response?.data?.days)
            setHours(response?.data?.remainingHours)
        });
    },[])

    console.log(day,hours )

    return (
        <div>
            <h5>  {day === 0 ? hours: day} {day === 0 ? "hours": "day"} ago</h5>
        </div>
    )
}

export default GetCommentTime
