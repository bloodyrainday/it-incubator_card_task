import React from "react";
import styled from "styled-components";
import desert from "../assets/img/desert.jpg";
import { Button } from "./Button.styled";
import { theme } from "../styles/Theme.styled";

type Props = {};

export const Card = (props: Props) => {
  return (
    <StyledCard>
      <Image src={desert}></Image>

      <CardInfo>
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Text>

        <Button btnType="primary" color={theme.colors.primary}>
          See more
        </Button>
        <Button btnType="outlined" color={theme.colors.primary}>
          Save
        </Button>
      </CardInfo>
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

  button + button {
    margin-left: 12px;
  }
`;

const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 170px;
`;

const CardInfo = styled.div`
  padding: 10px 10px 0 10px;
`;

const Title = styled.h2`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #abb3ba;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 19px;
  text-align: left;
`;
