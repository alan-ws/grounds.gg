import Image from "next/image";
// import { colors, fonts } from "../components/styles";
import { Container } from "../components/layouts";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

// const Container = styled("div")((props) => ({
//   position: "relative",
//   display: "flex",
//   flexDirection: "column",
//   flex: 1,
//   margin: "0% 8% 16% 8%",
// }));

// export const BackgroundImage = styled("div")((props) => ({
//   position: "absolute",
//   width: "100%",
//   zIndex: 1,
// }));

const Card: FC = ({ children }) => (
  <Flex
    flexDir={"column"}
    backgroundColor={"white"}
    borderRadius={"16px"}
    padding={"16px"}
    margin={"16px"}
    flex={0.24}
    boxShadow={"4px 4px 8px 8px rgba(0, 0, 0, 0.08)"}
  >
    {children}
  </Flex>
);

const CardImage: FC = ({ children }) => (
  <Box
    pos="relative"
    minH={{ base: "256px", lg: "204px" }}
    maxW={{ base: "100%" }}
  >
    {children}
  </Box>
);

// const Box = styled("div")((props) => ({
//   position: "relative",
//   width: "100%",
// }));

// const ImgBox = styled(Box)((props) => ({
//   minHeight: "204px",
// }));

// export const TextBox = styled(Box)(
//   (props: { maxWidth?: string; marginTop?: string }) => ({
//     textAlign: "center",
//     maxWidth: props.maxWidth,
//     margin: "auto",
//     marginTop: props.marginTop,
//   })
// );

export const TextBox: FC = ({ children }) => (
  <Box textAlign={"center"} margin={"auto"}>
    {children}
  </Box>
);

// interface IText {
//   color?: keyof typeof colors;
//   textStyle: keyof typeof fonts;
//   maxWidth?: string;
// }

// export const Text = styled("span")((props: IText) => ({
//   color: props.color && colors[props.color],
//   ...fonts[props.textStyle],
// }));

export const Content = () => {
  return (
    <Container>
      <Box as="section">
        <Flex pos="relative" flexDir="column" flex={1} margin="0% 8% 16% 8%">
          <Box textAlign={"center"} mt={{ base: "16%" }} mb={{ base: "4%" }}>
            <Text textStyle="h3">We are game-fanatics</Text>
          </Box>
          <Box
            textAlign={"center"}
            maxWidth={{ lg: "50%" }}
            mb={{ base: "8%" }}
          >
            <Text textStyle="h4" maxWidth={{ lg: "50%" }}>
              We are building the tooling and solutions to make gaming rewarding
              for all invovled.
            </Text>
          </Box>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ lg: "space-between" }}
            zIndex={2}
            margin="auto"
            marginTop="16px"
            mb={{ base: "48px" }}
          >
            <Card>
              <CardImage>
                <Image src="/assets/locked-security.png" alt="" layout="fill" />
              </CardImage>
              <TextBox>
                <Text textStyle={{ base: "cardT" }}>Secure NFT accounts</Text>
              </TextBox>
              <Text textStyle={{ base: "cardC" }}>
                Create an account, claim an avatar, verify ownershiper, and
                encrypt and lock
              </Text>
            </Card>
            <Card>
              <CardImage>
                <Image src="/assets/delivery.png" alt="" layout="fill" />
              </CardImage>
              <TextBox>
                <Text textStyle={{ base: "cardT" }}>Robust reward system</Text>
              </TextBox>
              <Text textStyle={{ base: "cardC" }}>
                We’ve built a robust reward system that includes PvE and PvP
                competition
              </Text>
            </Card>
            <Card>
              <CardImage>
                <Image src="/assets/users.png" alt="" layout="fill" />
              </CardImage>
              <TextBox>
                <Text textStyle={{ base: "cardT" }}>User centric approach</Text>
              </TextBox>
              <Text textStyle={{ base: "cardC" }}>
                All our tooling and solutions are based on user research and
                being dedicated gamers
              </Text>
            </Card>
            <Card>
              <CardImage>
                <Image src="/assets/relationship.png" alt="" layout="fill" />
              </CardImage>
              <TextBox>
                <Text textStyle={{ base: "cardT" }}>
                  Strategic product offering
                </Text>
              </TextBox>
              <Text textStyle={{ base: "cardC" }}>
                We have a stacked roadmap and will release features
                strategically
              </Text>
            </Card>
          </Flex>
          <Box
            display={{ base: "none", lg: "revert" }}
            pos={{ lg: "absolute" }}
            zIndex={1}
            w="100%"
          >
            <Image
              src="/assets/backgroundDots.png"
              alt=""
              height="500px"
              width="1148px"
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};
