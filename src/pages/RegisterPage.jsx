
import React from "react";
import LoginImage from "../assets/images/rb_1633.png";
import InputBox from "../components/Inputbox/InputBox";
import { useGlobalFormik } from "../hooks/useFormik";
import {
  loginInitialValues,
  loginSchema,
} from "../utils/validation/authSchema";
import CustomButton from "../components/CustomButton";

const RegisterPage = () => {
    //formik hook 
  const formik = useGlobalFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="lg:container lg:mx-auto rounded-md grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center border-2 border-yellow-300">
          <div>
            <img src={LoginImage} alt="login image" className="h-full" />
          </div>
          <div>
            <div className="flex justify-center ">
              <span className="text-center poppins-semibold my-5 text-4xl">
                Login
              </span>
            </div>
            <p className="poppins-light text-xl">
              🔐 Welcome Back! Unlock Your Journey with Us. ✨
            </p>
            <form onSubmit={formik.handleSubmit}>
              <InputBox
                title="Enter Your Email"
                type="text"
                placeholder="Enter Your Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <InputBox
                title="Enter Your Password"
                type="text"
                placeholder="Enter Your Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <CustomButton
                buttonText="Login"
                className="w-full my-5 bg-yellow-500 text-white poppins-semibold hover:text-yellow-500 hover:bg-white hover:border-yellow-500"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
