import React from "react";
import { styled } from "styled-components";

const Page = ({ color }) => {
  return <Container style={{ background: `${color}` }}></Container>;
};

export default Page;

const Container = styled.div`
  width: 30px;
  height: 7px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: grey;
`;
