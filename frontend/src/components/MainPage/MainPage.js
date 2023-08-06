import React, { useEffect } from "react";
import Axios from "axios";

const MainPage = () => {
  useEffect(() => {
    Axios.get("/store").then((res) => {
      console.log(res);
    });
  }, []);
  return <></>;
};

export default MainPage;
