import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Flex } from "@chakra-ui/react";

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

const List: FC = ({ children }) => {
  return (
    <Flex
      pos={"absolute"}
      backgroundColor={"purple.300"}
      mt="8px"
      borderRadius={"8px"}
      w="100%"
      padding={"16px 8px"}
    >
      {children}
    </Flex>
  );
};

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

const Item: FC<{ onclick: () => void }> = ({ children, onclick }) => {
  return (
    <Flex
      justifyContent={"flex-start"}
      padding={"8px"}
      color={"white"}
      onClick={onclick}
      _hover={{ cursor: "pointer" }}
    >
      {children}
    </Flex>
  );
};

export const Dropdown: FC<{
  //   handler: (value: string) => void;
  //   disabled: boolean;
}> = () =>
  // { disabled, handler }
  {
    const [reveal, setReveal] = useState<boolean>(false);
    const [value, setValue] = useState<string>("Games");

    useEffect(() => {
      if (value === "Games") return;
      //   handler(value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const data = ["League of Legends"];

    return (
      <Box>
        <Button
          // disabled ? "" :
          onClick={() => setReveal((prev) => !prev)}
          //   disable={disabled}
        >
          <Box as="span">{value}</Box>
          <Image
            src="/icons/triangle.svg"
            height="24px"
            width="24px"
            alt="down"
          />
        </Button>
        {/* && !disabled */}
        {reveal ? (
          <List>
            {data.map((game: string, index: number) => (
              <Item
                key={`${game}_${index}`}
                onclick={() => {
                  setReveal((prev) => !prev);
                  setValue(game);
                }}
              >
                {game}
              </Item>
            ))}
          </List>
        ) : (
          <></>
        )}
      </Box>
    );
  };
