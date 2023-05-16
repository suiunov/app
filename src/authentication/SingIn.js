import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, AlertTitle, Button, Container, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../features/auth/authApi";

const SignIn = () => {
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [error, setError] = useState("");
  const [select, setSelect] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginUser, { data: userData, error: responseError }] =
    useLoginUserMutation();
  useEffect(
    () => {
      if (responseError?.data?.status === "error") {
        setError(responseError?.data?.message);
      }

      if (userData?.status === "success") {
        navigate("/");
      }
    },
    [
      navigate,
      responseError?.data?.message,
      responseError?.data?.status,
      userData?.status,
    ],
    error
  );

  const onSubmit = async (data) => {
    await loginUser(data);
    setError();
  };

  const handelOnPassword = () => {
    setPasswordStatus(passwordStatus === false ? true : false);
  };

  return (
    <Fragment> 
        <Container className="container">
          <div className="row justify-content-center box-sw pb-2">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                <div
                  className="card-header h-d-a-j text-center"
                  style={{ background: "#F8F9FA" }}
                >
                  <Link to="/" className=" " style={{ textDecoration: "none" }}>
                    <span>
                    
                      <h4>Smart Menu</h4>
                    </span>
                  </Link>
                </div>

                <div className="card-body ">
                  <div className="text-center w-75 m-auto ">
                    <h4 className="text-dark-50 text-center  fw-bold h-d-a-j">
                      Sign In
                    </h4>
                    <p className="p-1">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 text-left">
                      <label htmlFor="email-address" className="form-label mt-2">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email-address"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-2 text-left">
                      <Link
                        to="/password/forgot"
                        className="text-muted float-end"
                      >
                        <small>Forgot your password?</small>
                      </Link>
                      <label
                        htmlFor="password"
                        className="form-label text-left"
                      >
                        Password
                      </label>
                      <div className="input-group input-group-merge" style={{ display: "flex"}}>
                        <input
                          type={passwordStatus ? "text" : "password"}
                          style={{ width: "100%", height: '37px', padding:"5px"}}
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: 6,
                          })}
                        />
                        <div className="input-group-text p-0">
                          <Button onClick={handelOnPassword} className="passwordbutton">
                            <span className="password-eye">
                              {passwordStatus ? (
                                <VisibilityOffIcon className="OnPassword" />
                              ) : (
                                <VisibilityIcon className="OnPassword" />
                              )}
                            </span>
                          </Button>
                        </div>
                      </div>
                      {errors.password && (
                        <span className="text-danger">
                          {errors.password.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-2 ">
                      <div className="form-check text-left">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-signin"
                          checked={select}
                          onChange={() => setSelect(!select)}
                        />
                        <label
                          className="text-mute form-check-label"
                          htmlFor="checkbox-signin"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className=" mb-0 text-center">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        style={{
                          background: "#1560FF",
                        }}
                        // disabled={isLoading}
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 text-center mt-2">
                  <p className="text-muted">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-muted ms-1">
                      <b>Sign Up</b>
                    </Link>
                  </p>
                </div>
              </div>

              {error && (
                <Alert severity="error">
                  <AlertTitle>
                    <Typography pt={0.5} variant="body2" gutterBottom>
                      <strong>Check</strong> - {error ? error : ""}
                    </Typography>
                  </AlertTitle>
                </Alert>
              )}
            </div>
          </div>
        </Container> 
    </Fragment>
  );
};

export default SignIn;
