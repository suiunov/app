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

export default function AddModel({ open, setOpen, status }) {
  const [restaurants, setRestaurants] = React.useState()


  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    axios.get('http://localhost:6060/api/v1/restaurants/find')
      .then((response) => {
        setRestaurants(response.data?.restaurants);
      });
  }, [status])

  console.log("restaurants", restaurants)

  const onSubmit = (data) => {
    axios.post('http://localhost:6060/api/v1/products/create', data)
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
              Add a new product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 text-left custom-f-g">

                <div className=" pb-2 text-left custom-f-g">
                  <label
                    htmlFor="email"
                    className="form-label custom-w-150"
                  >
                    Select Restaurant:
                  </label>
                  <select className='form-control price_input' {...register("restaurants")}>
                    {
                      restaurants?.map((data, idx) => (
                        <option idx={idx} value={data?._id}>{data?.name}</option>
                      ))
                    }

                  </select>
                </div>

                <div className=" pb-2 text-left custom-f-g">
                  <label
                    htmlFor="email"
                    className="form-label custom-w-150"
                  >
                    Food Type:
                  </label>
                  <select className='form-control price_input' {...register("food_type")}>
                    <option value="Burger">Burger</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Scallion Pancake">Scallion Pancake</option>
                    <option value="Pancake Roll">Pancake Roll</option>
                    <option value="Toast">Toast</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Vegeterian">Vegeterian</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Fried">Fried</option>
                    <option value="Pizza">Pizza</option>
                  </select>

                </div>
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
                  placeholder="Enter product name"
                  {...register('name', {
                    required:
                      'Name is required',
                  })}
                />
                <label
                  htmlFor="displayName"
                  className="form-label custom-w-150"
                >
                  Chinese Name:
                </label>
                <input
                  className="form-control p-2"
                  type="text"
                  id="chname"
                  placeholder="Enter product name"
                  {...register('chname', {
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
                  placeholder="Set product image URL"
                  {...register('image', {
                    required:
                      'Image is required',
                  })}
                />
              </div>

              <div className=" mb-3 text-left custom-f-g">
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
              </div>

              <div className=" mb-3 text-left custom-f-g">
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



              {/* <div className=" mb-3 text-left custom-f-g">
                                            <label
                                                htmlFor="email"
                                                className="form-label custom-w-150"
                                            >
                                                Department :
                                            </label> 
                                            <Controller
                                              className="form-control w-100"
                                              name="student_department"
                                              control={control}
                                              render={({ field }) => <Select 
                                                {...field} 
                                                options={[
                                                  { value: "cse", label: "Computer Science and Engineering" },
                                                  { value: "eee", label: "Electrical and Electronics Engineering" },
                                                  { value: "bba", label: "Bachelor of Business Administration" },
                                                  { value: "civil", label: "Civil" }
                                                ]} 
                                              />}
                                            />
                                         </div>  */}

              <div className=" mb-0 text-center">
                <button
                  className="btn btn-primary form-control"
                  type="submit"
                  style={{
                    background: '#1560FF',
                  }}
                // disabled={isLoading}
                >
                  Add product
                </button>
              </div>


            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
