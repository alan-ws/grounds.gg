import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Flex } from "@chakra-ui/react";

const List: FC = ({ children }) => {
  return (
    <Flex
      pos={"absolute"}
      backgroundColor={"purple.300"}
      mt="8px"
      borderRadius={"8px"}
      w="100%"
      padding={"16px 8px"}
      zIndex={2}
      right={0}
      filter={"drop-shadow(0.12rem 0.14rem 0.7rem gray)"}
    >
      {children}
    </Flex>
  );
};

const Item: FC<{ onclick: () => void }> = ({ children, onclick }) => {
  return (
    <Flex
      justifyContent={"flex-start"}
      padding={"8px"}
      color={"white"}
      onClick={onclick}
      w="100%"
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
      <Box w="100%" pos="relative">
        <Button
          w="100%"
          justifyContent={"space-between"}
          // disabled ? "" :
          backgroundColor="purple.300"
          color={"white"}
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
