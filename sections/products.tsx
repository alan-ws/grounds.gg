import { FlexDirectionProperty, JustifyContentProperty } from "csstype";
import { styled } from "goober";
import { colors } from "../components/styles";
import { Text, TextBox } from "./we-are-game-fanatics";
import Image from "next/image";

const Section = styled("section")((props) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: colors.secondary,
  flex: 1,
}));

const Container = styled("div")((props) => ({
  position: "relative",
  margin: "2% 24% 8% 24%",
}));

const Article = styled("article")(
  (props: {
    position: JustifyContentProperty;
    direction: FlexDirectionProperty;
  }) => ({
    display: "flex",
    flex: 1,
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
}));

export const ProductInfo = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <Text color="white" textStyle="h1">
            Products
          </Text>
        </TextBox>
        <TextBox>
          <Text color="white" textStyle="h4">
            We are in alpha-mode with the below products on our roadmap for
            release in 2021...2022.
          </Text>
        </TextBox>
        <Article position="center" direction="row">
          <Article position="center" direction="column">
            <ImgBox>
              <Image src="/assets/product-shape.svg" alt="" layout="fill" />
            </ImgBox>
          </Article>
          <Article position="flex-start" direction="column"></Article>
        </Article>
      </Container>
    </Section>
  );
};
