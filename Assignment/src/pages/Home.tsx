import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
};

export default Home;
