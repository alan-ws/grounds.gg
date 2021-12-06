import { styled } from "goober";
import { Container } from "./layouts";
import Image from "next/image";
import { Button } from "./button";

const Bar = styled("nav")((props) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "16px",
  alignItems: "center",
}));

const Navigation = styled("div")((props) => ({
  display: "flex",
}));

export const Navbar = () => {
  return (
    <Container>
      <Bar>
        <Image
          src="/grounds-logo.svg"
          alt="grounds logo"
          height="56px"
          width="184px"
        />
        <Navigation>
          <span>Product</span>
          <span>Product</span>
          <span>Product</span>
          <span>Product</span>
          <span>Product</span>
        </Navigation>
        <Button>
          <span>Connect</span>
        </Button>
      </Bar>
    </Container>
  );
};
