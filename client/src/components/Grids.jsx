import React from "react";
import { styled } from "styled-components";

const Grids = ({ icon, title }) => {
  return (
    <Container>
      <IconContainer>
        <img src={icon} alt="" />
      </IconContainer>
      <span style={{ fontSize: "12px" }}>{title}</span>
    </Container>
  );
};

export default Grids;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px grey;
  &:hover {
    transform: scale(120%);
    transition: all ease-in-out 0.2s;
  }
`;

const AddIconContainer = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 50%;

  img {
    width: 100%;
  }
`;
const IconContainer = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 50%;

  img {
    width: 100%;
  }
`;
