import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UpdateRestaurantsModel({ openUpdate, setOpenUpdate, restaurants, setStatus, status }) {

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {


        console.log("data", data)

        axios.put(`http://localhost:6060/api/v1/restaurants/update/${restaurants?._id}`, data)
            .then((response) => {
                alert("restaurants Update Success!");
                setOpenUpdate(false)
                setStatus(status == 0 ? 1 : 0)
                reset()
            });
    };


    const handleClose = () => {
        setOpenUpdate(false)
        reset()
    };

    return (
        <div>
            <Modal
                keepMounted
                open={openUpdate}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>

                    <Container >
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{ marginBottom: "10px" }}>
                            Update {restaurants?.name}
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 text-left custom-f-g">
                                <label
                                    htmlFor="displayName"
                                    className="form-label custom-w-150"
                                >
                                    Name :
                                </label>
                                <input
                                    className="form-control p-2"
                                    type="text"
                                    id="name"
                                    placeholder="Enter restaurants name"
                                    defaultValue={restaurants?.name}
                                    {...register('name', {
                                        required:
                                            'Name is required',
                                    })}
                                />
                            </div>
                            <div className="mb-3 text-left custom-f-g">
                                <label
                                    htmlFor="displayName"
                                    className="form-label custom-w-150"
                                >
                                    Image URL:
                                </label>
                                <input
                                    className="form-control p-2"
                                    type="text"
                                    id="name"
                                    defaultValue={restaurants?.image}
                                    placeholder="Set restaurants image URL"
                                    {...register('image', {
                                        required:
                                            'Image is required',
                                    })}
                                />
                            </div>

                            <div className="pb-2 text-left custom-f-g">
                                <label
                                    htmlFor="displayName"
                                    className="form-label custom-w-150"
                                >
                                    Recipes Count:
                                </label>
                                <input
                                    className="form-control p-2"
                                    type="text"
                                    id="name"
                                    defaultValue={restaurants?.recipesCount}
                                    placeholder="Type recipes count"
                                    {...register('recipesCount', {
                                        required:
                                            'Recipes Count is required',
                                    })}
                                />
                            </div>

                            <div className="pb-2 text-left custom-f-g">
                                <label
                                    htmlFor="displayName"
                                    className="form-label custom-w-150"
                                >
                                    Cuisine:
                                </label>
                                <input
                                    className="form-control p-2"
                                    type="text"
                                    id="name"
                                    defaultValue={restaurants?.cuisine}
                                    placeholder="Type restaurants cuisine"
                                    {...register('cuisine', {
                                        required:
                                            'cuisine is required',
                                    })}
                                />
                            </div>

                            <div className="pb-2 text-left custom-f-g">
                                <label
                                    htmlFor="displayName"
                                    className="form-label custom-w-150"
                                >
                                    Address:
                                </label>
                                <input
                                    className="form-control p-2"
                                    type="text"
                                    id="name"
                                    defaultValue={restaurants?.address}
                                    placeholder="Type restaurants address"
                                    {...register('address', {
                                        required:
                                            'Address is required',
                                    })}
                                />
                            </div>
 
                            <div className=" mb-0 text-center">
                                <button
                                    className="btn btn-primary form-control"
                                    type="submit"
                                    style={{
                                        background: '#1560FF',
                                    }}
                                // disabled={isLoading}
                                >
                                    Update restaurant
                                </button>
                            </div>
                        </form>
                    </Container>
                </Box>
            </Modal>
        </div>
    );
}
