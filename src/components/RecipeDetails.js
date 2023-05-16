import { Grid, Typography } from "@mui/material"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CustomImage from "./CustomImage"
import GetCommentTime from "./GetCommentTime"

export default function RecipeDetails(){
    const [recipe, setRecipes] = useState({})
    const [comment,setComment]= useState('') 
    const [userComment,setUserComment]= useState([]) 
    const [state,setState]= useState(1) 
    const {id}= useParams()
    const  login  = JSON.parse(localStorage.getItem('auth'));
    const navigate = useNavigate();
    const email = login?.user?.email
    const name = login?.user?.displayName

    useEffect(() => { 
        axios.get(`http://localhost:6060/api/v1/products/details/${id}`)
        .then((response) => {
            setRecipes(response.data?.food);
        });

        axios.get(`http://localhost:6060/api/v1/comment/recipe/${id}`)
        .then((response) => {
            setUserComment(response.data?.comment);
        });

}, [id, state])


useEffect(() => { 


    

}, [id])


const handleOnClick =() =>{ 
    const formData = {
        comment,
        recipe: id,
        email,
        user_name: name, 
      };

      if(!email){
        navigate("/login");
        return; 
      }

    axios.post(`http://localhost:6060/api/v1/comment/create/${id}`, formData)
    .then((response) => {
      alert("Comment send Success!"); 
      setState(state === 0? 1:0 );
      setComment('') 
    }); 
}

const handleDelete = (id) => {
    axios.delete(`http://localhost:6060/api/v1/comment/user/delete/${id}`)
    .then((response) => {
        alert("Comment delete Success!");
        setState(state === 0? 1:0 );
    });
}
 


    return(
         <Fragment> 
             <Grid className="recipe_card"> 
           <div className="recipe-card">
            <CustomImage imgSrc={recipe?.image} pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe?.name}</p>
                <p className="recipe-title">{recipe?.chname}</p>
                <p className="recipe-price">{recipe?.price} NT$</p>
                <p className="recipe-desc">{recipe?.description}</p> 

                <div className="mt-3">
                <h3>Comment:</h3>
               <div className="mt-1">
                {
                    userComment?.map((comm, idx)=>(
                        <div className="border-bottom mt01" key={idx}>
                        <div className="d-flex">
                        <div>
                        <h5>{comm?.user_name}</h5> 
                         <Typography variant="body2" className="mb-1 mt01" >{comm?.comment}  </Typography>
                        </div>
                        <div>
                        <GetCommentTime comment={comm} />

                        {
                        email === comm.email &&(
                            <button onClick={(e)=>(handleDelete(comm?._id))} style={{marginTop:"5px", cursor:"pointer"}}>Delete</button>
                        )
                    } 
                        </div>
                        </div> 
                    </div>
                    ))
                }
               </div>
                <div className="mt-3 d-flex">
                    <textarea className="w-100" value={comment} onChange={(e) =>(setComment(e.target.value))} />  
                    <button className="send_button" onClick={handleOnClick}> Send</button>
                </div>
            </div>
            </div>
            
            </div>
           
         </Grid> 
         </Fragment>
    )
}