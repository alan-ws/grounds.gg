import { styled } from "goober";
import { FC, useState } from "react";
import { Button } from "./button";
import { colors } from "./styles";
import Image from "next/image";

const Container = styled("div")((props) => ({
  position: "relative",
}));

const List = styled("div")((props) => ({
  display: "flex",
  position: "relative",
  backgroundColor: colors.primary,
  marginTop: "8px",
  borderRadius: "8px",
}));

const Item = styled("div")((props) => ({
  display: "flex",
  justifyContent: "flex-start",
  padding: "8px",
  //   justifyContent: 'flex-end' (for mobile),
  color: colors.white,
}));

export const Dropdown: FC = () => {
  const [reveal, setReveal] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Games");

  const data = ["League of Legends"];

  return (
    <Container>
      <Button onClick={() => setReveal((prev) => !prev)}>
        <span>{value}</span>
        <Image
          src="/icons/triangle.svg"
          height="24px"
          width="24px"
          alt="down"
        />
      </Button>
      {reveal ? (
        <List>
          {data.map((value: string, index: number) => (
            <Item
              key={`${value}_${index}`}
              onClick={() => {
                setReveal((prev) => !prev);
                setValue(value);
              }}
            >
              {value}
            </Item>
          ))}
        </List>
      ) : (
        <></>
      )}
    </Container>
  );
};
