import { styled } from "goober";
import { Container } from "../components/layouts";
import Image from "next/image";
import { colors } from "../components/styles";
import { Text } from "./we-are-game-fanatics";

const Wrapper = styled("div")((props) => ({
  backgroundColor: colors.secondary,
}));

export const Bar = styled("nav")((props) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "16px",
  alignItems: "center",
}));

const PageContainer = styled(Container)(() => ({
  position: "relative",
}));

const CopyCert = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  "& > span": {
    marginLeft: "16px",
  },
}));

export const Footer = () => {
  return (
    <Wrapper>
      <PageContainer>
        <Bar>
          <Image
            src="/grounds-logo-white.svg"
            alt="grounds logo"
            height="56px"
            width="184px"
          />
          <CopyCert>
            <Image src="/icons/copy.svg" height="68px" width="32px" alt="" />
            <Text textStyle="placeholder" color="white">
              2021 Puzzle Studio
            </Text>
          </CopyCert>
        </Bar>
      </PageContainer>
    </Wrapper>
  );
};
