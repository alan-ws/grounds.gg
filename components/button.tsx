import { styled } from "goober";
import { FC } from "react";
import { fonts, btn } from "./styles";

interface IProps {
  haschildren: string;
  textStyle: keyof typeof fonts;
  btnStyle: 'secondary' | 'primary' | 'third'
}

type Attr = JSX.IntrinsicElements["a"];
interface IButton extends Attr {
  textStyle: keyof typeof fonts,
  btnStyle: 'secondary' | 'primary' | 'third'
}

const Styled = styled("a")((props: IProps) => ({
  all: "unset",
  //
  display: "flex",
  padding: "16px",
  justifyContent: props.haschildren === "true" ? "space-between" : "center",
  borderRadius: "8px",
  //
  flex: 0.3,
  //
  ...fonts[props.textStyle],
  ...btn[`${props.btnStyle}_display`],
  //
  '&:hover': {
    cursor: 'pointer',
    ...btn[`${props.btnStyle}_hover`]
  }
}));

export const Button: FC<IButton> = ({ children, onClick, textStyle, btnStyle }) => {
  const hasChildren = Array.isArray(children);
  return (
    <Styled btnStyle={btnStyle} textStyle={textStyle} onClick={onClick} haschildren={`${hasChildren}`}>
      {children}
    </Styled>
  );
};
