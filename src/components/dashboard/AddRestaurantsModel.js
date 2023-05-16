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

export default function AddRestaurantsModel({ open, setOpen }) {



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    axios.post('http://localhost:6060/api/v1/restaurants/create', data)
      .then((response) => {
        alert("Product Add Success!");
        setOpen(false)
        reset()
      });
  };


  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>

          <Container >
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{ marginBottom: "10px" }}>
              Add a new Restaurant
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pb-2 text-left custom-f-g">
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
                  placeholder="Enter Restaurant name"
                  {...register('name', {
                    required:
                      'Name is required',
                  })}
                />
              </div>
              <div className="pb-2 text-left custom-f-g">
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
                  placeholder="Image URL"
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
                  Business hours:
                </label>
                <input
                  className="form-control p-2"
                  type="text"
                  id="name"
                  placeholder="Enter Business hours : 7:00-13:00"
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
                  placeholder="Enter cuisine"
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
                  placeholder="Enter restaurant's address"
                  {...register('address', {
                    required:
                      'Address is required',
                  })}
                />
              </div>

              {/* <div className=" pb-2 text-left custom-f-g">
                <label
                  htmlFor="email"
                  className="form-label custom-w-150"
                >
                  Price :
                </label>
                <input
                  className="form-control price_input"
                  type="number"
                  id="price"
                  placeholder="Enter product price"
                  {...register('price', {
                    required:
                      'Price is required',
                  })}
                />
              </div> */}

              <div className=" pb-2 text-left custom-f-g">
                <label
                  htmlFor="email"
                  className="form-label custom-w-150"
                >
                  Select Meal:
                </label>
                <select className='form-control price_input' {...register("type")}>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch & Dinner">Lunch & Dinner</option>
                </select>
              </div>

              <div className=" pb-2 text-left custom-f-g">
                <label
                  htmlFor="email"
                  className="form-label custom-w-150"
                >
                  Description :
                </label>
                <textarea
                  className="form-control description"
                  type="text"
                  id="price"
                  placeholder="Enter product details"
                  {...register('description', {
                    required:
                      'Description is required',
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
                  Add Restaurant
                </button>
              </div>


            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
