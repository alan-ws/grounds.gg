import Image from "next/image";
import { styled } from "goober";
import { colors, fonts } from "../components/styles";

const Section = styled("section")((props) => ({
  width: "100%",
}));

const Container = styled("div")((props) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  margin: "0% 8% 16% 8%",
}));

export const BackgroundImage = styled("div")((props) => ({
  position: "absolute",
  width: "100%",
  zIndex: 1,
}));

const CardStack = styled("div")((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  zIndex: 2,
  margin: "auto",
  marginTop: "16px"
}));

const Card = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: colors.white,
  borderRadius: "16px",
  padding: "16px",
  margin: "16px",
  flex: 0.24,
  boxShadow: "4px 4px 8px 8px rgba(0, 0, 0, 0.08)",
}));

const Box = styled("div")((props) => ({
  position: "relative",
  width: "100%",
}));

const ImgBox = styled(Box)((props) => ({
  minHeight: "204px",
}));

export const TextBox = styled(Box)(
  (props: { maxWidth?: string; marginTop?: string }) => ({
    textAlign: "center",
    maxWidth: props.maxWidth,
    margin: "auto",
    marginTop: props.marginTop,
  })
);

interface IText {
  color?: keyof typeof colors;
  textStyle: keyof typeof fonts;
  maxWidth?: string;
}

export const Text = styled("span")((props: IText) => ({
  color: props.color && colors[props.color],
  ...fonts[props.textStyle],
}));

export const Content = () => {
  return (
    <Section>
      <Container>
        <TextBox marginTop="16px">
          <Text textStyle="h3">We are game-fanatics</Text>
        </TextBox>
        <TextBox maxWidth="50%">
          <Text textStyle="h4" maxWidth="50%">
            We are building the tooling and solutions to make gaming rewarding
            for all invovled.
          </Text>
        </TextBox>
        <CardStack>
          <Card>
            <ImgBox>
              <Image src="/assets/locked-security.png" alt="" layout="fill" />
            </ImgBox>
            <TextBox>
              <Text textStyle="cardH">Secure NFT accounts</Text>
            </TextBox>
            <Text textStyle="cardS">
              Create an account, claim an avatar, verify ownershiper, and
              encrypt and lock
            </Text>
          </Card>
          <Card>
            <ImgBox>
              <Image src="/assets/delivery.png" alt="" layout="fill" />
            </ImgBox>
            <TextBox>
              <Text textStyle="cardH">Robust reward system</Text>
            </TextBox>
            <Text textStyle="cardS">
              We’ve built a robust reward system that includes PvE and PvP
              competition
            </Text>
          </Card>
          <Card>
            <ImgBox>
              <Image src="/assets/users.png" alt="" layout="fill" />
            </ImgBox>
            <TextBox>
              <Text textStyle="cardH">User centric approach</Text>
            </TextBox>
            <Text textStyle="cardS">
              All our tooling and solutions are based on user research and being
              dedicated gamers
            </Text>
          </Card>
          <Card>
            <ImgBox>
              <Image src="/assets/relationship.png" alt="" layout="fill" />
            </ImgBox>
            <TextBox>
              <Text textStyle="cardH">Strategic product offering</Text>
            </TextBox>
            <Text textStyle="cardS">
              We have a stacked roadmap and will release features strategically
            </Text>
          </Card>
        </CardStack>
        <BackgroundImage>
          <Image
            src="/assets/backgroundDots.png"
            alt=""
            height="500px"
            width="1148px"
          />
        </BackgroundImage>
      </Container>
    </Section>
  );
};
