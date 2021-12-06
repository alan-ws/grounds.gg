import Image from "next/image";
import { styled } from "goober";
import { FlexDirectionProperty, JustifyContentProperty } from "csstype";
import { Button } from "./button";

const Section = styled("section")((props) => ({
  width: "100%",
}));

const Container = styled("div")((props) => ({
  display: "flex",
  margin: "8% 16% 8% 16%",
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

const CTA = styled("div")((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 0.55,
}));

const Box = styled("div")((props) => ({
  display: "flex",
  width: "100%",
}));

const JoinAlpha = styled("div")((props) => ({
  display: "flex",
  flex: 1,
}));

const Input = styled("input")((props) => ({
  display: "flex",
  flex: 0.7,
  marginRight: "16px",
}));

export const Intro = () => {
  return (
    <Section>
      <Container>
        <Article position="flex-start" direction="column">
          <Box>
            <CTA>
              <Image
                src="/icons/bot.svg"
                height="56px"
                width="56px"
                alt="avatar"
              />
              <span>Claim your avatar</span>
              <Image
                src="/icons/arrow.svg"
                height="32px"
                width="32px"
                alt="arrow"
              />
            </CTA>
          </Box>
          <Box>
            <h1>Earn as you play</h1>
          </Box>
          <Box>
            <p>
              Grounds is the best way to earn crypto whilst contributing to your
              favorite competitive games
            </p>
          </Box>
          <Box>
            <JoinAlpha>
              <Input />
              <Button>Join Alpha</Button>
            </JoinAlpha>
          </Box>
        </Article>
        <Article position="center" direction="row">
          <Image src="/assets/orb.png" height="196px" width="196px" alt="orb" />
        </Article>
      </Container>
    </Section>
  );
};
