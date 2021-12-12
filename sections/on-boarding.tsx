import { styled } from "goober";
import Image from "next/image";
import { Button } from "../components/button";
import { Dropdown } from "../components/dropdown";
import { BackgroundImage, Text } from "./we-are-game-fanatics";

const Section = styled("section")((props) => ({
  position: "relative",
  width: "100%",
  height: "672px",
  overflowY: "hidden",
}));

const Container = styled("div")((props) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  marginTop: "4%",
}));

const ImageWrapper = styled(BackgroundImage)(() => ({
  top: "128px",
}));

const FormContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  margin: "4% 34% 8% 34%",
}));

const Location = styled("div")(() => ({
  display: "flex",
  flex: 1,
}));

const Input = styled("input")((props: { flex: number; margin?: string }) => ({
  display: "flex",
  flex: props.flex,
  marginLeft: props.margin,
}));

export const OnBoarding = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Text textStyle="h1">Let’s get started</Text>
          <Text textStyle="h4">
            To get you onboarded and started, join Lider
          </Text>
        </Content>
        <FormContainer>
          <Text textStyle="p">
            Lider is our distributed, localised competitve ladder
          </Text>
          <Location>
            <Button>
              <Image src="/icons/pin.svg" height="32px" width="32px" alt="" />
            </Button>
            <Input flex={2} margin="4%" />
          </Location>
          <Dropdown />
          <Input flex={1} />
          <Button>Claim your avatar</Button>
        </FormContainer>
        <ImageWrapper>
          <Image
            src="/assets/backgroundOnboard.png"
            alt=""
            height="716px"
            width="1262px"
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
};
