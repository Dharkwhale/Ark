import React, { useState, useRef } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import location to get state

// Validation Schema (no need for email input now)
const OTPVerificationSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d+$/, "OTP must contain only numbers")
    .required("OTP is required"),
});

export default function VerifyOtp() {
  const [resendStatus, setResendStatus] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get email from navigation state
  const email = location.state?.email || "";

  // Handle OTP change
  const handleChange = (e, index, values, setFieldValue) => {
    const value = e.target.value.replace(/\D/g, ""); // Only numbers
    if (value.length <= 1) {
      const otpArray = values.otp.split("");
      otpArray[index] = value;
      setFieldValue("otp", otpArray.join(""));

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace to go back
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post("http://localhost:8800/v1/auth/otp/verify", {
        email, // ✅ Use email from navigation state
        otp: values.otp,
      })
      .then((res) => {
        alert("OTP Verified Successfully!");
        console.log(res.data);
        navigate("/user-login"); // ✅ Go to login
      })
      .catch((err) => {
        alert("OTP Verification Failed!");
        console.error(err);
      })
      .finally(() => setSubmitting(false));
  };

  // Resend OTP
  const handleResendOtp = () => {
    if (!email) {
      setResendStatus("Email not found. Please restart signup.");
      setTimeout(() => setResendStatus(""), 3000);
      return;
    }
    axios
      .post("http://localhost:8800/v1/auth/otp/send", { email })
      .then(() => {
        setResendStatus("A new OTP has been sent to your email.");
        setTimeout(() => setResendStatus(""), 5000);
      })
      .catch(() => {
        setResendStatus("Failed to resend OTP. Try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4">
      <h2 className="text-white text-2xl font-bold mb-2">Verify Your OTP</h2>
      <p className="text-gray-300 mb-6">OTP sent to: {email}</p>

      <Formik
        initialValues={{ otp: "" }}
        validationSchema={OTPVerificationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="flex flex-col items-center w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* OTP Inputs */}
            <div className="flex gap-2 mb-4">
              {Array(6)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={values.otp[index] || ""}
                    onChange={(e) =>
                      handleChange(e, index, values, setFieldValue)
                    }
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 text-center text-lg font-bold rounded border border-gray-400 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                  />
                ))}
            </div>
            <ErrorMessage
              name="otp"
              component="p"
              className="text-red-500 text-sm mb-2"
            />

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
            >
              {isSubmitting ? "Verifying..." : "Verify OTP"}
            </button>

            {/* Resend OTP */}
            <button
              type="button"
              onClick={handleResendOtp}
              className="mt-4 text-blue-400 underline hover:text-blue-300"
            >
              Resend OTP
            </button>
            {resendStatus && (
              <p className="text-green-400 mt-2">{resendStatus}</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
