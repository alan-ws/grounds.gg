import { FlexDirectionProperty, JustifyContentProperty } from "csstype";
import { styled } from "goober";
import { colors } from "../components/styles";
import { Content, Text, TextBox } from "./we-are-game-fanatics";
import { Container as PageContainer } from "../components/layouts";
import Image from "next/image";
import { Button } from "../components/button";

const Wrapper = styled("div")((props) => ({
  backgroundColor: colors.secondary,
}));

const Section = styled("div")((props) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  flex: 1,
}));

const Container = styled("section")((props: { margin: string }) => ({
  position: "relative",
  margin: props.margin,
}));

const Article = styled("article")(
  (props: {
    position: JustifyContentProperty;
    direction: FlexDirectionProperty;
    flex?: number;
  }) => ({
    display: "flex",
    flex: props.flex,
    justifyContent: props.position,
    flexDirection: props.direction,
  })
);

const Box = styled("div")((props) => ({
  position: "relative",
  width: "100%",
}));

const ImgBox = styled(Box)((props) => ({
  minHeight: "264px",
  marginBottom: "8%"
}));

const ProductBox = styled("div")((props) => ({
  display: "flex",
  flex: 0.25,
  // marginBottom: "4%"
}));

const ProductIcon = styled("span")((props) => ({
  display: "flex",
  flex: 0.2,
  justifyContent: "center",
  alignSelf: 'flex-start'
}));

const ProductContent = styled("span")((props) => ({
  display: "flex",
  flex: 0.6,
  lineHeight: 0
}));

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

const CTA = styled('div')(() => ({
  width: '64%',
  alignSelf: 'center'
}))

export const ProductInfo = () => {
  return (
    <Wrapper>
      <PageContainer>
        <Section>
          <Container margin="2% 24% 8% 24%">
            <TextBox>
              <Text color="white" textStyle="h2">
                Products
              </Text>
            </TextBox>
            <TextBox maxWidth="80%">
              <Text color="white" textStyle="h4">
                We are in alpha-mode with the below products on our roadmap for
                release in 2021...2022.
              </Text>
            </TextBox>
          </Container>
          <Container margin="0% 8% 8% 8%">
            <Article position="center" direction="row">
              <Article flex={0.4} position="center" direction="column">
                <ImgBox>
                  <Image src="/assets/product-shape.svg" alt="" layout="fill" />
                </ImgBox>
                <CTA>
                  <Button btnStyle="secondary" textStyle="btn1">Claim your Avatar</Button>
                </CTA>
              </Article>
              <Article flex={0.6} position="flex-start" direction="column">
                {PRODUCTS.map((value, index) => {
                  return (
                    <ProductBox key={index}>
                      <ProductIcon>
                        <Image
                          src={value.icon}
                          height="36px"
                          width="36px"
                          alt=""
                        />
                      </ProductIcon>
                      <ProductContent>
                        <Text textStyle="h5" color="white">
                          {value.title}{" "}
                          <Text textStyle="cardS" color="white">
                            {value.content}
                          </Text>
                        </Text>
                      </ProductContent>
                    </ProductBox>
                  );
                })}
              </Article>
            </Article>
          </Container>
        </Section>
      </PageContainer>
    </Wrapper>
  );
};
