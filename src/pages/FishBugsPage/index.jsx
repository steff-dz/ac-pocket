import React, { useState } from "react";
import Loader from "../../components/Loader";
import useToggle from "../../hooks/useToggle";

const FishBugsPage = () => {
  const [test, toggleTest] = useToggle(false);
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Loader />
      <h2 onClick={toggleTest}>{test ? "It is true!" : "It is false!"}</h2>
    </div>
  );
};

export default FishBugsPage;
