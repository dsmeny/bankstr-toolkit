import { useSelector } from "react-redux";
import styled from "styled-components";

const Content = (props) => {
  const state = useSelector((state) => state.transactions);

  const transactType = Object.keys(state).find(
    (type) => type === props.selectRef
  );

  return (
    <View>
      <h2>{props.selectRef}</h2>
      <p>${state[transactType]}</p>
    </View>
  );
};

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
  }
`;

export default Content;
