import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTemplate";
import Content from "../components/Content";
import Selection from "../components/Selection";

const Home = () => {
  const checkHandler = (e) => {
    const { refElem, radioButton } = e;
    console.log("refElem: ", refElem);
    console.log("radioButton: ", radioButton);
  };

  return (
    <PageTemplate>
      <Content amt={20} selectRef={element} />
      <Selection checkHandler={checkHandler} accountType={accountType[0]} />
    </PageTemplate>
  );
};

export default Home;
