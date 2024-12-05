import React from "react";
import styled from "styled-components";
import desert from "../assets/img/desert.jpg";

type Props = {};

export const Card = (props: Props) => {
  return (
    <StyledCard>
      <Image src={desert}></Image>

      <Title></Title>
      <Text></Text>

      <Button></Button>
      <Button></Button>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 350px;
  box-shadow: 0px 4px 20px 5px #0000001a;
  border-radius: 15px;
  padding: 10px 10px 22px 10px;
`;

const Image = styled.img`
  border-radius: 15px;
  width: 100%;
`;

const Title = styled.h2``;

const Text = styled.p``;

const Button = styled.button``;
