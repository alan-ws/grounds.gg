import { Container as PageContainer } from "../components/layouts";
import Image from "next/image";
import { BackGroundColorDiv } from "./products";
import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <BackGroundColorDiv>
      <PageContainer>
        <Flex w="100%" justifyContent={"space-between"} padding={"16px"} alignItems={"center"}>
          <Image
            src="/grounds-logo-white.svg"
            alt="grounds logo"
            height="56px"
            width="184px"
          />
          <Flex alignItems={"center"} css={{'&>span': {marginLeft: "16px"}}}>
            <Image src="/icons/copy.svg" height="68px" width="32px" alt="" />
            <Text textStyle="placeholder" color="white">
              2021 Puzzle Studio
            </Text>
          </Flex>
        </Flex>
      </PageContainer>
    </BackGroundColorDiv>
  );
};
