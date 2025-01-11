import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const { id } = useParams();
  return (
    <div className="">
      <Navbar />
    </div>
  );
};

export default Home;
