import { Button, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FC, useCallback, useState } from "react";
import { Footer } from "../components/footer";
import { Container } from "../components/layouts";
import { Navbar } from "../components/navigation";
import Image from "next/image";

const NftIcon: FC<{ dataUri?: string }> = ({ dataUri }) => {
  if (dataUri === undefined) return null;

  return (
    <Flex>
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
        //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
        height={"32px"}
        width={"32px"}
        alt="Red dot"
      />
    </Flex>
  );
};

const Outlet = () => {
  const [showNftIcon, setShowNftIcon] = useState<boolean>(false);
  const [nftIconUri, setNftIconUri] = useState<string>();

  const handleGenerateNftIcon = useCallback(() => {
    setNftIconUri("");
    setShowNftIcon(true);
  }, []);

  return (
    <Container>
      <Flex flexDir={{ base: "column" }} w="100%">
        <Flex flexDir={"column"}>
          <Heading>Get started</Heading>
          <Heading>
            Join the Lider wailist and claim your pre-release avatar
          </Heading>
        </Flex>
        <Flex flexDir={"column"} w="40%" alignItems={"center"}>
          <Flex w="100%">
            <Flex w="20%">
              <Button width={"100%"}>MAP</Button>
            </Flex>
            <Flex w="80%">
              <Input placeholder="postcode" />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex w="100%">
              <Select placeholder="Choose game">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex w="100%">
              <Input placeholder="in game name" />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex w="100%">
              <Button w="100%">Verify Account</Button>
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex w="100%">
              <Button
                w="100%"
                onClick={handleGenerateNftIcon}
                disabled={showNftIcon}
              >
                Generate NFT Icon
              </Button>
            </Flex>
          </Flex>
          {showNftIcon ? <NftIcon dataUri={nftIconUri} /> : null}
          <Flex w="100%">
            {showNftIcon ? (
              <Flex w="100%">
                <Button w="50%">Claim Avatar</Button>
                <Button w="50%">Claim Avatar</Button>
              </Flex>
            ) : (
              <Flex w="100%">
                <Button w="100%">Claim Avatar</Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

const ClaimAvatar: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grounds</title>
        <meta name="description" content="Earn crypto as you play" />
        <meta name="keywords" content="crypto, gaming, league of legends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClaimAvatar;
