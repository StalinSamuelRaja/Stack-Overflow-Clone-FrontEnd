import { useFormik } from "formik";
import { SigninSchema } from "../formik/signinformik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footergrid from "./footer";
import { SigninUser } from "../helpers/signin";

const Signinuser = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState("");
  const [success, setsuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SigninSchema,
      onSubmit: async (user) => {
        try {
          // Set loading to true during form submission
          setLoading(true);
          const info = await SigninUser(user);
          if (info?.error) {
            setdata(info.error);
            setsuccess("");
          } else {
            setsuccess(info.data);
            setdata("");
            // Save info to localStorage
            localStorage.setItem("sessiontoken", info.token);
            localStorage.setItem("sessionemail", user.email);
            localStorage.setItem("Key", JSON.stringify(info.userId));
            navigate("/");
          }
        } catch (error) {
          console.error("Error during form submission:", error);
        } finally {
          setLoading(false); // Set loading back to false after form submission
          setTimeout(() => {
            setsuccess(""), setdata("");
          }, 1000);
        }
      },
    });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-2">
        <div>
          <img
            src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1707715484~exp=1707716084~hmac=05327522fed15550f66e5478f9033b89867be09dfd92b2fb3497ad1276f63695"
            alt="Login"
            className="h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center m-2">
          <h1 className="text-center sm:text-left m-4 text-3xl">Sign In</h1>
          <div className="w-full max-w-md">
            {success !== "" && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-success">
                  <span>{success}</span>
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
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full p-2"
              />
              {touched.email && errors.email && (
                <div className="text-error">{errors.email}</div>
              )}
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full p-2"
              />
              {touched.password && errors.password && (
                <div className="text-error">{errors.password}</div>
              )}
              <div className="flex justify-center items-center">
                <button
                  className="btn btn-success p-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading loading-spinner text-accent"></div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <div className="text-center m-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-success hover:underline">
                Create one
              </Link>
            </div>
          </div>
          <div className="card p-4 m-4 bg-green-100 mx-auto sm:w-2/5 rounded-md ">
  <h4 className="text-lg font-semibold mb-2">Demo Login</h4>
  <p>Email: stalin@gmail.com</p>
  <p>Password: password</p>
</div>

        </div>
      </div>
      <Footergrid />
    </>
  );
};

export default Signinuser;
