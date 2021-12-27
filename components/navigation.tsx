import { Container } from "./layouts";
import Image from "next/image";
// import { Button } from "./button";
import { Box, Flex } from "@chakra-ui/react";

// const Navigation = styled("div")((props) => ({
//   display: "flex",
// }));

// const CTA = styled("div")(() => ({
//   flex: 0.16,
// }));

export const Navbar = () => {
  return (
    <Container>
      <Flex
        w="100%"
        justifyContent="space-between"
        padding="16px"
        alignItems="center"
      >
        <Box height="56px" width="184px">
          <Image
            src="/grounds-logo.svg"
            alt="grounds logo"
            height="56px"
            width="184px"
          />
        </Box>
        {/* <Navigation>
          <span>Product</span>
          <span>Games</span>
          <span>Merch</span>
          <span>Swap</span>
          <span>Vlogs</span>
        </Navigation> */}
        <Flex>
          {/* <Button textStyle="btn2" btnStyle="primary">
            <span>Connect</span>
            <Image
              src="/icons/login.svg"
              height="24px"
              width="24px"
              alt="down"
            />
          </Button> */}
        </Flex>
      </Flex>
    </Container>
  );
};
