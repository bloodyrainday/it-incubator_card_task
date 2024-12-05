import React from "react";
import { Card } from "./components/Card";
import styled from "styled-components";

function App() {
  return (
    <CardWrapper>
      <Card />
    </CardWrapper>
  );
}

export default App;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
