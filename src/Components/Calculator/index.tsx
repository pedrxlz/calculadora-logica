import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import Display from "../Display";
import * as S from "./styles";

const Calculator = () => {
  const [value, setValue] = useState<string>("");

  const handleButtonClick = useCallback((value: string) => {
    setValue((prev) => {
      if (value === "AC") {
        return "";
      }

      if (value === "DEL") {
        return prev.slice(0, -1);
      }

      return prev + value;
    });
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
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              AC
            </S.CalculatorButton>
          </GridItem>

          <GridItem>
            <S.CalculatorButton
              value={"DEL"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              DEL
            </S.CalculatorButton>
          </GridItem>

          <GridItem colSpan={2}>
            <S.CalculatorButton
              value={"="}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              =
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"p"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              p
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"q"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              q
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"r"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              r
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"s"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              s
            </S.CalculatorButton>
          </GridItem>

          <GridItem>
            <S.CalculatorButton
              value={"∧"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              ∧
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"∨"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              ∨
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"~"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              ~
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"→"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              →
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"↔"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              ↔
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={"("}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
              }
            >
              (
            </S.CalculatorButton>
          </GridItem>
          <GridItem>
            <S.CalculatorButton
              value={")"}
              onClick={(e) =>
                handleButtonClick((e.target as HTMLInputElement).value)
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
