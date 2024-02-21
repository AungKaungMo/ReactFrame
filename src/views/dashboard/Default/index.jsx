import React, { useState } from "react";
import { toast } from "react-toastify";
import ReuseableButton from "../../../component/reuseable/ReuseableButton";

const index = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div>
      {/* <ReuseableButton
        onClick={handleClick}
        loading={loading}
      ></ReuseableButton> */}
    </div>
  );
};

export default index;
