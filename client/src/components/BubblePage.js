import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const fetchColors = () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        console.log('GET COLORS', res)
        setColorList(res.data)
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={fetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
