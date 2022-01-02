import { FC } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

interface IInput {}
export const Input: FC<IInput> = ({ children }) => {
  return <ChakraInput />;
};
