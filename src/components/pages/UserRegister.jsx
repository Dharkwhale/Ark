import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Add useNavigate

export default function UserRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const togglePassword = () => setShowPassword(prev => !prev);
  const toggleConfirm = () => setShowConfirm(prev => !prev);

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
      };

      const response = await axios.post(
        'https://ark-analytical.onrender.com/v1/auth/register',
        payload
      );

      console.log(response.data);
      alert('Registration successful!');
      resetForm();

      // ✅ Redirect to subscription page
      navigate("/verify-otp", { state: { email: values.email } });

    } catch (error) {
      console.error('Registration error:', error);
      setErrorMsg(
        error?.response?.data?.message ||
        error?.message ||
        'Something went wrong during registration.'
      );
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a2e] text-white px-4">
      <div className="w-full max-w-md bg-[#111827] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1">First Name</label>
                <Field name="first_name" type="text" className="w-full p-2 rounded bg-gray-800 text-white" />
                <ErrorMessage name="first_name" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label className="block mb-1">Last Name</label>
                <Field name="last_name" type="text" className="w-full p-2 rounded bg-gray-800 text-white" />
                <ErrorMessage name="last_name" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <Field name="email" type="email" className="w-full p-2 rounded bg-gray-800 text-white" />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label className="block mb-1">Password</label>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className="w-full p-2 rounded bg-gray-800 text-white pr-10"
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
                    onClick={togglePassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label className="block mb-1">Confirm Password</label>
                <div className="relative">
                  <Field
                    name="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    className="w-full p-2 rounded bg-gray-800 text-white pr-10"
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
                    onClick={toggleConfirm}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-sm" />
              </div>

              {errorMsg && (
                <div className="text-red-500 text-sm text-center">{errorMsg}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full bg-[#0bb5e0] hover:bg-[#0999c0] text-white font-bold py-2 rounded"
              >
                {isSubmitting || loading ? 'Registering...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/user-login" className="text-[#0bb5e0] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
