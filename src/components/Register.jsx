import { useFormik } from "formik";
import { SignupSchema } from "../formik/Signupformik";
import { useState } from "react";
import Footergrid from "./footer";
import { RegisternewUser } from "../helpers/signin";
import { useNavigate } from "react-router-dom";
import TopBar from "./topBar";

const RegisterUser = () => {
  const [message, setmessage] = useState("");
  const [data, setdata] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (newuser) => {
      try {
        // Set loading to true just before the API call
        setLoading(true);
        const user = await RegisternewUser(newuser);
        if (user?.error) {
          setdata(user.error);
          setmessage("");
        } else {
          setmessage(user.message);
          setdata("");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      } finally {
        // Set loading back to false after form submission
        setLoading(false);
        setTimeout(() => {
          setmessage(""), setdata("");
        }, 1000);
      }
    },
  });

  return (
    <> <TopBar/>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start m-2">
       
        <div className="sm:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1707715344~exp=1707715944~hmac=9b8187f45199760ff0f14aeeb52740a5ffd27ac5bd206104e0f9f52866bffa84"
            alt="Login"
            className="h-full"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <h1 className="text-center sm:text-left m-2 p-2 text-3xl font-bold">
            Sign Up
          </h1>
          <div>
            {message !== "" && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-success">
                  <span>{message}</span>
                </div>
              </div>
            )}

            {data !== "" && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-info">
                  <span>{data}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center">
            <form
              className="w-full max-w-md flex flex-col justify-center items-center m-5 p-5"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter Firstname"
                name="firstname"
                value={values.firstname}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full max-w-md m-2"
              />
              {touched.firstname && errors.firstname && (
                <div>{errors.firstname}</div>
              )}
              <input
                type="text"
                placeholder="Enter Lastname"
                name="lastname"
                value={values.lastname}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full max-w-md m-2"
              />
              {touched.lastname && errors.lastname && (
                <div>{errors.lastname}</div>
              )}
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full max-w-md m-2"
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <input
                type="text"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full max-w-md m-2 mb-5"
              />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}

              <button
                className="btn btn-success m-2 p-2 place-items-center"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-ball text-accent loading-xs"></span>
                    <span className="loading loading-ball text-accent loading-sm"></span>
                    <span className="loading loading-ball text-accent loading-md"></span>
                    <span className="loading loading-ball text-accent loading-lg"></span>
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footergrid />
    </>
  );
};

export default RegisterUser;
