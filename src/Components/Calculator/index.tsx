import {
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import Display from "../Display";
import { yard, rpn } from "../../calculator";
import * as S from "./styles";

const Calculator = () => {
  const toast = useToast();
  const [value, setValue] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const solveEquation = useCallback(
    (equation: string) => {
      let pfix;
      try {
        pfix = yard(equation);
        let result = rpn(pfix);
        if (result === undefined) {
          toast({
            title: "Erro",
            description: "Função inválida",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return "";
        } else {
          return String(result);
        }
      } catch (error) {
        toast({
          title: "Erro",
          description: "Parênteses não balanceados",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return "";
      }
    },
    [value]
  );

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
          <GridItem colSpan={2}>
            <S.CalculatorButton
              value={"T"}
              textColor={"green.500"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              True
            </S.CalculatorButton>
          </GridItem>
          <GridItem colSpan={2}>
            <S.CalculatorButton
              value={"F"}
              textColor={"red.500"}
              onClick={(e) =>
                buttonClickHandler((e.target as HTMLInputElement).value)
              }
            >
              False
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
          <GridItem>
            <S.CalculatorButton colorScheme={"orange"} onClick={() => onOpen()}>
              ?
            </S.CalculatorButton>
          </GridItem>
        </Grid>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <S.HelpBody>
            <ul>
              <li>T - Verdadeiro</li>
              <li>F - Falso</li>
              <li>^ - Conjunção (operador AND)</li>
              <li>v - Disjunção (operador OR)</li>
              <li>~ - Negação (operador NOT)</li>
              <li>~ - Negação (operador NOT)</li>
              <li>→ - Implicação</li>
              <li>↔ - Bicondicional</li>
              <li>( ) - Parentização</li>
            </ul>
          </S.HelpBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </S.Container>
  );
};

export default Calculator;
