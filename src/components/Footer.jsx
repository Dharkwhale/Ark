import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Footer() {
  const newsletterSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Newsletter Subscription:", values);
    // Here you can integrate API call for subscription
    resetForm();
  };

  return (
    <footer className="bg-[#0a0a2e] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Logo + Name */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Ark Analytics" className="w-10 h-10" />
            <span className="text-lg font-bold">Ark Analytics</span>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering crypto traders with real-time analytics and insights.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Menu</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-[#0bb5e0]">Home</Link></li>
            <li><a href="#about" className="hover:text-[#0bb5e0]">About Us</a></li>
            <li><Link to="/terms" className="hover:text-[#0bb5e0]">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#0bb5e0]">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0bb5e0]"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0bb5e0]"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0bb5e0]"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0bb5e0]"><FaLinkedin /></a>
          </div>
        </div>

        {/* Newsletter with Formik */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-3">Stay updated with our latest insights.</p>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={newsletterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-2">
                <div className="flex">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-l bg-white text-black text-sm outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-[#0bb5e0] hover:bg-[#0999c0] rounded-r text-sm font-semibold"
                  >
                    Subscribe
                  </button>
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Disclaimer */}
      <hr className="border-gray-700" />
      <div className="max-w-7xl mx-auto px-6 py-6 text-gray-400 leading-relaxed">
        <h3 className="text-lg font-semibold text-white mb-2">
          Your investments are your responsibility.
        </h3>
        <p className="text-sm mb-3">
          We do not accept any liability for any loss or damage which is incurred
          from you acting or not acting as a result of reading any of our publications. 
          You acknowledge that you use the information we provide at your own risk.
        </p>
        <p className="text-sm">
          Ark Analytics does not offer investment advice and nothing in the calls we make
          should be construed as investment advice. Ark Analytics provides information
          and education based on our own trades. You are paying to follow our trades
          that we document for educational purposes.
        </p>
      </div>

      {/* Bottom Section */}
      <hr className="border-gray-700" />
      <div className="text-center py-4 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Ark Analytics — All rights reserved.
      </div>
    </footer>
  );
}
