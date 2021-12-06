import { styled } from "goober";
import { FC } from "react";
import { colors } from "./styles";

interface IProps {
  haschildren: string;
}

type Attr = JSX.IntrinsicElements["a"];
interface IButton extends Attr {}

const Styled = styled("a")((props: IProps) => ({
  all: "unset",
  //
  display: "flex",
  padding: "16px",
  justifyContent: props.haschildren === "true" ? "space-between" : "center",
  borderRadius: "8px",
  //
  background: colors.primary,
  color: colors.white,
}));

export const Button: FC<IButton> = ({ children, onClick }) => {
  const hasChildren = Array.isArray(children);
  return (
    <Styled onClick={onClick} haschildren={`${hasChildren}`}>
      {children}
    </Styled>
  );
};
