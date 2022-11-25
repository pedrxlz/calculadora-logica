import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import Display from "../Display";
import { yard, rpn } from "../../calculator";
import * as S from "./styles";

const Calculator = () => {
  const [value, setValue] = useState<string>("");

  const buttonClickHandler = useCallback((value: string) => {
    setValue((prev) => {
      switch (value) {
        case "AC":
          return "";

        case "DEL":
          return prev.slice(0, -1);

        case "=":
          return solveEquation(prev);

        default:
          return prev + value;
      }
    });
  }, []);

  const solveEquation = useCallback((equation: string) => {
    console.log(rpn(yard(equation))); // 3 4 5 * 3 2 + / +
    return equation;
  }, []);

  return (
    <S.Container>
      <Flex flexDir={"column"} maxWidth={"277.5px"}>
        <Display value={value} />
        <Grid
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem>
            <S.CalculatorButton
              value={"AC"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              AC
            </S.CalculatorButton>
          </GridItem>

          <GridItem>
            <S.CalculatorButton
              value={"DEL"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              DEL
            </S.CalculatorButton>
          </GridItem>

          <GridItem colSpan={2}>
            <S.CalculatorButton
              value={"="}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              =
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"T"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              T
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"F"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              F
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              disabled
              value={"r"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              r
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              disabled
              value={"s"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              s
            </S.CalculatorButton>
          </GridItem>

          <GridItem>
            <S.CalculatorButton
              value={"∧"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              ∧
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"∨"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              ∨
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"~"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              ~
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"→"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              →
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"↔"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              ↔
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"("}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              (
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={")"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              )
            </S.CalculatorButton>
          </GridItem>
        </Grid>
      </Flex>
    </S.Container>
  );
};

export default Calculator;
