import { Box } from "@chakra-ui/react";
import { FC } from "react";

export const Container: FC = ({ children }) => (
  <Box maxW="1366px" margin="auto">
    {children}
  </Box>
);
