import Image from "next/image";
import { FlexDirectionProperty, JustifyContentProperty } from "csstype";
// import { Button } from "./button";
// import { Text } from "../sections/we-are-game-fanatics";
// import { colors, fonts } from "./styles";
import { useCallback, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Container } from "./layouts";

// const Section = styled("section")((props) => ({
//   width: "100%",
// }));

// const Container = styled("div")((props) => ({
//   display: "flex",
//   margin: "8% 16% 16% 16%",
// }));

// const Article = styled("article")(
//   (props: {
//     position: JustifyContentProperty;
//     direction: FlexDirectionProperty;
//     flex: number;
//   }) => ({
//     display: "flex",
//     flex: props.flex,
//     justifyContent: props.position,
//     flexDirection: props.direction,
//   })
// );

// const CTA = styled("div")((props) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   flex: 0.55,
//   "&:hover": {
//     cursor: "pointer",
//   },
// }));

// const Box = styled("div")(
//   (props: {
//     width?: string;
//     height?: string;
//     align?: string;
//     margin?: string;
//   }) => ({
//     display: "flex",
//     width: props.width ?? "100%",
//     height: props.height,
//     alignSelf: props.align,
//     margin: props.margin,
//   })
// );

// const JoinAlpha = styled("div")((props) => ({
//   display: "flex",
//   flex: 1,
// }));

// const Input = styled("input")((props) => ({
//   all: "unset",
//   display: "flex",
//   flex: 0.7,
//   marginRight: "16px",
//   background: "rgba(13, 12, 34, 0.04)",
//   borderRadius: "8px",
//   paddingLeft: "24px",
//   "&::placeholder": {
//     color: colors.placeholder,
//     ...fonts.placeholder,
//   },
//   color: colors.secondary,
// }));

const isEmailAddress = (maybeEmail?: string): boolean => {
    return maybeEmail &&
        maybeEmail.includes("@") &&
        maybeEmail.match(/^\S+@*\./) &&
        maybeEmail.length > 2
        ? true
        : false;
};

const showToast = (state: "error" | "info", message: string) => { };

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
            <Flex flexDir={{ base: "column" }} w="100%" justifyContent={{ base: "center" }}>
                <Flex flexDir={{ base: "column" }} m={{ base: "8% 8% 8% 8%", lg: "8% 16% 16% 16%" }}>
                    <Flex display={{base: "none", md: "flex"}} width={{ base: "100%" }} justifyContent={"space-between"} alignItems={"center"}>
                        <Image
                            src="/icons/bot.svg"
                            height="56px"
                            width="56px"
                            alt="avatar"
                        />
                        <Text textStyle="a" color="primary">
                            Claim your avatar
                        </Text>
                        <Image
                            src="/icons/arrow.svg"
                            height="32px"
                            width="32px"
                            alt="arrow"
                        />
                    </Flex>
                    <Flex width={{ base: "100%" }}>
                        <Text textStyle="h1" color="secondary">
                            Earn as you play
                        </Text>
                    </Flex>
                    <Flex margin="0% 0% 8% 0%">
                        <Text textStyle="h4" color="secondary">
                            Grounds is the best way to earn crypto whilst contributing to your
                            favorite competitive games
                        </Text>
                    </Flex>
                    <Flex w={{base: "100%"}}>
                        <Flex w={{base: "100%"}}>
                            <Input placeholder="Email address" onChange={handleEmailInput} />
                            <Button
                                onClick={handleEmailSubmission}
                            >
                                Join Alpha
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex display={{base: "flex", md: "none"}} width={{ base: "100%" }} justifyContent={"space-between"} alignItems={"center"}>
                        <Image
                            src="/icons/bot.svg"
                            height="56px"
                            width="56px"
                            alt="avatar"
                        />
                        <Text textStyle="a" color="primary">
                            Claim your avatar
                        </Text>
                        <Image
                            src="/icons/arrow.svg"
                            height="32px"
                            width="32px"
                            alt="arrow"
                        />
                    </Flex>
                    {/* <Article position="center" direction="row" flex={0.4}>
          <Box height="196px" width="196px" align="center">
            <Image
              src="/assets/orb.png"
              height="196px"
              width="196px"
              alt="orb"
            />
          </Box>
        </Article> */}
                </Flex>
            </Flex>
        </Container>
    );
};
