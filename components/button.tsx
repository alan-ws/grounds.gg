// import { styled } from "goober";
// import { FC } from "react";
// import { fonts, btn } from "./styles";

// interface IProps {
//   haschildren: string;
//   textStyle: keyof typeof fonts;
//   btnStyle: "secondary" | "primary" | "third";
//   disabled?: boolean;
// }

// type Attr = JSX.IntrinsicElements["a"];
// interface IButton extends Attr {
//   textStyle: keyof typeof fonts;
//   btnStyle: "secondary" | "primary" | "third";
//   disable?: boolean;
// }

// function disableBtn(disbaled, styles) {
//   if (disbaled) {
//     return {};
//   }

//   return styles;
// }

// const Styled = styled("a")((props: IProps) => ({
//   all: "unset",
//   //
//   display: "flex",
//   padding: "16px",
//   justifyContent: props.haschildren === "true" ? "space-between" : "center",
//   borderRadius: "8px",
//   opacity: props.disabled ? 0.2 : 1,
//   //
//   flex: 0.3,
//   //
//   ...fonts[props.textStyle],
//   ...btn[`${props.btnStyle}_display`],
//   //
//   "&:hover": {
//     cursor: props.disabled ? "not-allowed" : "pointer",
//     ...disableBtn(props.disabled, btn[`${props.btnStyle}_hover`]),
//   },

//   "@media (min-width: 375px)": {
//     justifyContent: "center",
//     "& > span": {
//       display: "none",
//     },
//   },
// }));

// export const Button: FC<IButton> = ({
//   children,
//   onClick,
//   textStyle,
//   btnStyle,
//   disable,
// }) => {
//   const hasChildren = Array.isArray(children);
//   return (
//     <Styled
//       btnStyle={btnStyle}
//       textStyle={textStyle}
//       onClick={onClick}
//       haschildren={`${hasChildren}`}
//       disabled={disable}
//     >
//       {children}
//     </Styled>
//   );
// };
