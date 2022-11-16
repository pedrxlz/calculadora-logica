import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;

export const CalculatorButton = styled(Button)`
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  height: 100%;
`;
