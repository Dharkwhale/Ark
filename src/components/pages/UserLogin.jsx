import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/authSlice";
import { useNavigate } from "react-router-dom";
import BASEURL from "../../utils/constant";

export default function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setErrorMsg("");
    setLoading(true);
  
    try {
      const response = await axios.post(
        `${BASEURL}/auth/login`,
        values
      );
  
      console.log("✅ Raw response:", response);
  
      // Correctly extract token & user
      const { user, token } = response.data.data;
      window.localStorage.setItem('token', JSON.stringify())
  
      if (!token || !user) {
        throw new Error("Invalid response from server");
      }
  
      // Save user info in Redux
      dispatch(loginUser({ token, user }));
  
      // Redirect based on role
      if (user.role === "ADMIN") {
        console.log('admin');
        navigate("/admin/dashboard");
      } else {
        navigate("/app/home");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
  
      setErrorMsg(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong during login."
      );
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a2e] text-white px-4">
      <div className="w-full max-w-md bg-[#111827] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#0bb5e0]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              <div>
                <label className="block mb-1">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#0bb5e0]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              {errorMsg && (
                <div className="text-red-500 text-sm text-center">
                  ❌ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full bg-[#0bb5e0] hover:bg-[#0999c0] text-white font-bold py-2 rounded transition"
              >
                {isSubmitting || loading ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
