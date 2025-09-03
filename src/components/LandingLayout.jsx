import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* 👈 This is where child routes (LandingPage, About, Proofs, Subscribe) will render */}
      </main>
      <Footer />
    </>
  );
};

export default LandingLayout;
