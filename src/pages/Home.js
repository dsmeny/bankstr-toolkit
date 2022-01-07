import { useState, useEffect } from "react";

import PageTemplate from "../components/PageTemplate";
import Content from "../components/Content";
import Selection from "../components/Selection";

const Home = () => {
  const [selectedRef, setSelectedRef] = useState("");

  useEffect(() => {
    setSelectedRef("balance");
  }, []);

  const checkHandler = (listRefID, elemID) => {
    setSelectedRef(elemID);
    [...listRefID.children].forEach((input) => {
      if (input.id !== elemID) {
        input.checked = false;
      }
    });
  };

  return (
    <PageTemplate>
      <Content selectRef={selectedRef} />
      <Selection checkHandler={checkHandler} />
    </PageTemplate>
  );
};

export default Home;
