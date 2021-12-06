import Image from "next/image";
import { styled } from "goober";

const Section = styled("section")((props) => ({
  width: "100%",
}));

const Container = styled("div")((props) => ({
  display: "flex",
  flex: 1,
  margin: "0% 8% 8% 8%",
}));

const BackgroundImage = styled("div")((props) => ({
  width: "100%",
  zIndex: 1,
}));

export const Content = () => {
  return (
    <Section>
      <Container>
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
