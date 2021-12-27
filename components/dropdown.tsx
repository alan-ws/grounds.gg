// import { styled } from "goober";
// import { FC, useEffect, useState } from "react";
// import { Button } from "./button";
// import { colors, fonts } from "./styles";
// import Image from "next/image";

// const Container = styled("div")((props) => ({
//   position: "relative",
// }));

// const List = styled("div")((props) => ({
//   display: "flex",
//   position: "absolute",
//   backgroundColor: colors.primary,
//   marginTop: "8px",
//   borderRadius: "8px",
//   width: "100%",
//   ...fonts["btn2"],
//   padding: "16px 8px",
//   opacity: 0.7,
// }));

// const Item = styled("div")((props) => ({
//   display: "flex",
//   justifyContent: "flex-start",
//   padding: "8px",
//   //   justifyContent: 'flex-end' (for mobile),
//   color: colors.white,
//   width: "100%",
//   "&:hover": {
//     cursor: "pointer",
//   },
// }));

// export const Dropdown: FC<{
//   handler: (value: string) => void;
//   disabled: boolean;
// }> = ({ disabled, handler }) => {
//   const [reveal, setReveal] = useState<boolean>(false);
//   const [value, setValue] = useState<string>("Games");

//   useEffect(() => {
//     if (value === "Games") return;
//     handler(value);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value]);

//   const data = ["League of Legends"];

//   return (
//     <Container>
//       <Button
//         textStyle="btn1"
//         btnStyle="primary"
//         onClick={() => (disabled ? "" : setReveal((prev) => !prev))}
//         disable={disabled}
//       >
//         <span>{value}</span>
//         <Image
//           src="/icons/triangle.svg"
//           height="24px"
//           width="24px"
//           alt="down"
//         />
//       </Button>
//       {reveal && !disabled ? (
//         <List>
//           {data.map((game: string, index: number) => (
//             <Item
//               key={`${game}_${index}`}
//               onClick={() => {
//                 setReveal((prev) => !prev);
//                 setValue(game);
//               }}
//             >
//               {game}
//             </Item>
//           ))}
//         </List>
//       ) : (
//         <></>
//       )}
//     </Container>
//   );
// };
