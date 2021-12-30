import { Container as PageContainer } from "../components/layouts";
import Image from "next/image";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { TextBox } from "./we-are-game-fanatics";

// const Wrapper = styled("div")((props) => ({
//   backgroundColor: colors.secondary,
// }));

// const Section = styled("div")((props) => ({
//   display: "flex",
//   position: "relative",
//   flexDirection: "column",
//   flex: 1,
// }));

// const Container = styled("section")((props: { margin: string }) => ({
//   position: "relative",
//   margin: props.margin,
// }));

// const Article = styled("article")(
//   (props: {
//     position: JustifyContentProperty;
//     direction: FlexDirectionProperty;
//     flex?: number;
//   }) => ({
//     display: "flex",
//     flex: props.flex,
//     justifyContent: props.position,
//     flexDirection: props.direction,
//   })
// );

// const Box = styled("div")((props) => ({
//   position: "relative",
//   width: "100%",
// }));

// const ImgBox = styled(Box)((props) => ({
//   minHeight: "264px",
//   marginBottom: "8%"
// }));

// const ProductBox = styled("div")((props) => ({
//   display: "flex",
//   flex: 0.25,
//   // marginBottom: "4%"
// }));

// const ProductIcon = styled("span")((props) => ({
//   display: "flex",
//   flex: 0.2,
//   justifyContent: "center",
//   alignSelf: 'flex-start'
// }));

// const ProductContent = styled("span")((props) => ({
//   display: "flex",
//   flex: 0.6,
//   lineHeight: 0
// }));

const PRODUCTS = [
  {
    title: "Lider",
    content: "is our distributed, localised highly competitive PvE ladder.",
    icon: "/icons/lider.svg",
  },
  {
    title: "Serenity",
    content:
      "rewards each player as you play, complete quests, compete in PvE, bet, or challenge you will earn RNG or GG tokens.",
    icon: "/icons/badge.svg",
  },
  {
    title: "Challenge",
    content:
      "players to 5v5, 1v1, tournaments, and more to show off your skill, build a team, or each rewards via Serenity.",
    icon: "/icons/lider.svg",
  },
  {
    title: "Marketplace",
    content:
      "allows players to sell/buy/loan accounts, items, time, skills you’ve earned whilst playing your favorite competitve games like League of Legends.",
    icon: "/icons/tag.svg",
  },
];

// const CTA = styled('div')(() => ({
//   width: '64%',
//   alignSelf: 'center'
// }))

export const BackGroundColorDiv: FC = ({ children }) => (
  <Box backgroundColor={"#0D0C22"}>{children}</Box>
);

export const ProductInfo = () => {
  return (
    <BackGroundColorDiv>
      <PageContainer>
        <Flex
          pos={"relative"}
          flexDir={"column"}
          w={"100%"}
          pb={{ base: "48px" }}
        >
          <Box
            as="section"
            margin={{ base: "16% 4% 16% 4%", lg: "2% 24% 8% 24%" }}
          >
            <TextBox>
              <Text color="white" textStyle="h1" mb={{ base: "8%" }}>
                Products
              </Text>
            </TextBox>
            <TextBox>
              <Text color="white" textStyle="h4">
                We are in alpha-mode with the below products on our roadmap for
                release in 2022.
              </Text>
            </TextBox>
          </Box>
          <Box pos="relative" margin={{ base: "0% 8%", lg: "0% 8% 8% 8%" }}>
            <Flex justifyContent={{ lg: "center" }} direction="row">
              {/* <Article flex={0.4} position="center" direction="column">
                <ImgBox>
                  <Image src="/assets/product-shape.svg" alt="" layout="fill" />
                </ImgBox>
                <CTA>
                  <Button btnStyle="secondary" textStyle="btn1">Claim your Avatar</Button>
                </CTA>
              </Article> */}
              <Flex
                w={{ base: "100%" }}
                justifyContent={{ lg: "flex-start" }}
                direction="column"
              >
                {PRODUCTS.map((value, index) => {
                  return (
                    <Flex key={index} mb={{ base: "24px" }}>
                      <Flex
                        as="span"
                        w={{ base: "20%" }}
                        justifyContent={{ lg: "center" }}
                        alignSelf={{ lg: "flex-start" }}
                      >
                        <Image
                          src={value.icon}
                          height="36px"
                          width="36px"
                          alt=""
                        />
                      </Flex>
                      <Flex as="span" w={{ base: "80%" }}>
                        <Text textStyle="h3" color="white">
                          {value.title}{" "}
                          <Text textStyle="cardT" color="white">
                            {value.content}
                          </Text>
                        </Text>
                      </Flex>
                    </Flex>
                  );
                })}
                <Button
                  borderRadius={{ base: "8px" }}
                  padding={{ base: "25px 48px" }}
                  backgroundColor={"transparent"}
                  color={"white"}
                  border={"2px solid white"}
                  fontFamily="Nunito Sans"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="18px"
                  lineHeight="24px"
                  letterSpacing="-0.02em"
                  mt={{ base: "48px" }}
                >
                  Claim your Avatar
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </PageContainer>
    </BackGroundColorDiv>
  );
};
