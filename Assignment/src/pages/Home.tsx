import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import MobileNavBar from "../components/common/MobileNavBar";

const Home = () => {
  const { id } = useParams();
  return (
    <div className="">
      <Navbar />
      <MobileNavBar />

      <div className="herolike-wrapper"></div>
    </div>
  );
};

export default Home;
