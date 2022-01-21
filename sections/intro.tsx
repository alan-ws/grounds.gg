import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Container } from "../components/layouts";

const isEmailAddress = (maybeEmail?: string): boolean => {
  return maybeEmail &&
    maybeEmail.includes("@") &&
    maybeEmail.match(/^\S+@*\./) &&
    maybeEmail.length > 2
    ? true
    : false;
};

const showToast = (state: "error" | "info", message: string) => {};

const LeftPanel = () => {
  return (
    <Flex
      flexDir={{ base: "column" }}
      m={{ base: "8% 8% 8% 8%", lg: "8% 16% 16% 16%", xl: "8% 8%" }}
      w={{ xl: "50%" }}
    >
      <ClaimAvatar display={{ base: "none", md: "flex" }} />
      <Flex
        width={{ base: "100%" }}
        mt={{ base: "24px" }}
        mb={{ base: "24px" }}
      >
        <Text textStyle={"h1"}>Earn as you play</Text>
      </Flex>
      <Flex mb={{ base: "24%" }}>
        <Text textStyle="h2">
          Grounds is the best way to earn crypto whilst contributing to your
          favorite competitive games
        </Text>
      </Flex>
      <Flex w={{ base: "100%" }}>
        <Flex w={{ base: "100%" }}>
          <Input
            css={{
              "&::placeholder": {
                color: "gray.250",
                fontFamily: "Nunito Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "-0.02em",
              },
            }}
            borderRadius={{ base: "8px 0px 0px 8px" }}
            padding={{ base: "24px 16px" }}
            placeholder="Email address"
            // onChange={handleEmailInput}
          />
          <Button
            borderRadius={{ base: "0px 8px 8px 0px" }}
            padding={{ base: "25px 48px" }}
            backgroundColor={"purple.300"}
            color={"white"}
            fontFamily="Nunito Sans"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="18px"
            lineHeight="24px"
            letterSpacing="-0.02em"
            _active={{
              background: "purple.100",
              color: "purple.500",
            }}
            _hover={{
              background: "purple.100",
              color: "purple.500",
            }}
            // onClick={handleEmailSubmission}
          >
            Join Alpha
          </Button>
        </Flex>
      </Flex>
      <ClaimAvatar mt={"24px"} display={{ base: "flex", md: "none" }} />
    </Flex>
  );
};
const RightPanel = () => {
  return (
    <Flex
      display={{ base: "none", xl: "flex" }}
      flexDir={{ base: "column" }}
      m={{ base: "8% 8% 8% 8%", lg: "8% 16% 16% 16%", xl: "0%" }}
      w={{ xl: "50%" }}
      justifyContent={{ xl: "center" }}
    >
      <Flex w="100%" justifyContent={{ xl: "center" }}>
        <Box height="256px" width="256px" align="center">
          <Image src="/assets/orb.png" height="256px" width="256px" alt="orb" />
        </Box>
      </Flex>
    </Flex>
  );
};

const ClaimAvatar: FC<{
  mt?: string;
  display: { base: string; md: string };
}> = ({ mt, display }) => {
  return (
    <Flex
      display={display}
      width={{ base: "100%" }}
      justifyContent={{ base: "space-between", lg: "revert" }}
      alignItems={"center"}
      mt={{ base: mt ?? "revert" }}
    >
      <Image src="/icons/bot.svg" height="56px" width="56px" alt="avatar" />
      <Text textStyle="a" color="purple.300" m={{ lg: "0 4%" }}>
        Claim your avatar
      </Text>
      <Image src="/icons/arrow.svg" height="32px" width="32px" alt="arrow" />
    </Flex>
  );
};

export const Intro = () => {
  const [email, setEmail] = useState<string>();

  const handleEmailInput = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const handleEmailSubmission = useCallback(() => {
    const url = "";
    if (!isEmailAddress) {
      showToast("error", "Without an email address, we cannot stay in touch");
      return;
    }
    // fetch(url, { body: JSON.stringify({ email: email }) });
  }, [email]);

  return (
    <Container>
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        w="100%"
        justifyContent={{ base: "center" }}
      >
        <LeftPanel />
        <RightPanel />
      </Flex>
    </Container>
  );
};
