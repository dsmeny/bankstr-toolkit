import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Selection = (props) => {
  const [headers, setHeaders] = useState([]);
  const transactions = useSelector((state) => state.transactions);

  const listRef = useRef();

  useEffect(() => {
    setHeaders(Object.keys(transactions));
    const checkboxList = listRef.current.children;
    setTimeout(() => {
      if ([...checkboxList].every((li) => !li.checked)) {
        [...checkboxList][0].checked = true;
      }
    }, 1000);
  }, [transactions, listRef]);

  function selectedElement(e) {
    const targetRadioBtn = e.target.id;
    props.checkHandler(listRef.current, targetRadioBtn);
  }

  return (
    <ul id="list" ref={listRef}>
      {headers.map((header, index) => (
        <Link onChange={selectedElement} type="radio" id={header} key={index} />
      ))}
    </ul>
  );
};

const Link = styled.input`
  &:checked {
    color: var(--font-color);
  }
`;

export default Selection;
