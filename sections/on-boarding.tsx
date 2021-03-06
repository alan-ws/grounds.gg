import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../components/layouts";
import { Dropdown } from "../components/dropdown";
// import Cookies from "js-cookie";
// import Toastify from "toastify-js";

// const Section = styled("section")((props) => ({
//   position: "relative",
//   width: "100%",
//   height: "768px",
//   overflowY: "hidden",
// }));

// const Container = styled("div")((props) => ({
//   position: "relative",
//   display: "flex",
//   flexDirection: "column",
//   flex: 1,
// }));

// const Content = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   flex: 1,
//   alignItems: "center",
//   marginTop: "4%",
// }));

// const ImageWrapper = styled(BackgroundImage)(() => ({
//   top: "224px",
// }));

// const GLogoPosition = styled("div")(
//   (props: { top: string; right: string }) => ({
//     position: "absolute",
//     zIndex: 1,
//     top: props.top,
//     right: props.right,
//   })
// );

// const FormContainer = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   flex: 1,
//   margin: "4% 34% 8% 34%",
//   zIndex: 2,
//   "span:first-child": {
//     marginBottom: "8px",
//   },
// }));

// const Location = styled("div")(() => ({
//   display: "flex",
//   flex: 1,
//   marginBottom: "4%",
// }));

// const Input = styled(
//   "input",
//   forwardRef
// )((props: { flex: number; margin?: string }) => ({
//   all: "unset",
//   display: "flex",
//   flex: props.flex,
//   marginLeft: props.margin,
//   marginRight: "16px",
//   background: "rgba(13, 12, 34, 0.04)",
//   borderRadius: "8px",
//   paddingLeft: "24px",
//   "&::placeholder": {
//     color: colors.placeholder,
//     ...fonts.placeholder,
//   },
//   color: colors.secondary,
//   "&:disabled": {
//     cursor: "not-allowed",
//   },
// }));

// const CTA = styled("div")(() => ({
//   marginTop: "8%",
//   width: "97%",
// }));

// const InputCta = styled(
//   "div",
//   forwardRef
// )(() => ({
//   display: "flex",
//   minHeight: "64px",
//   "& > input": {
//     "&::placeholder": {
//       opacity: 0.2,
//       color: colors.secondary,
//     },
//   },
// }));

// const PostcodeInput = styled("div")((props) => ({
//   display: "flex",
//   flex: 2,
//   minHeight: "64px",
//   "& > input": {
//     "&::placeholder": {
//       opacity: 0.2,
//       color: colors.secondary,
//     },
//   },
// }));

// const DropDownCta = styled("div")(() => ({
//   width: "97%",
//   marginBottom: "4%",
// }));

// const success
// background-color: #8cff8c;
// border: 2px solid green;

// const error
// background-color: #ff8c8c;
// border: 2px solid red;

function debounce(func: (e: any) => void, timeout = 300) {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}

export const OnBoarding = () => {
  // const [browserCoords, setBrowserCoords] = useState<any>();
  // const [userPostcode, setUserPostcode] = useState<string>();
  // const [verifiedPostcode, setVerifyPostcode] = useState<boolean>(false);
  // const [apiPostCode, setApiPostCode] = useState<string>();
  // const postCodeRef = useRef<HTMLInputElement>(null);
  // const nameRef = useRef<HTMLInputElement>(null);
  // const [inGameName, setInGameName] = useState<string>("");
  // const [verifiedGameName, setVerifiedGameName] = useState<boolean>(false);
  // const [icons, setIcons] = useState<{ current: string; changeTo: string }>();
  // const [callBackId, setCallBackId] = useState<string>();
  // const [gameSelected, setSelectedGame] = useState<boolean>(false);

  // const handleToast = (e) => {
  //   if (!gameSelected)
  //     Toastify({
  //       text: "Please select a game",
  //       duration: 3000,
  //     }).showToast();
  // };

  // useEffect(() => {
  //   nameRef.current?.addEventListener("click", handleToast);
  //   nameRef.current?.addEventListener("touchstart", handleToast);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   if (!browserCoords) return;
  //   if (postCodeRef.current) postCodeRef.current.value = "";
  //   const url = `http://localhost:3000/api/google/getPostcode?lat=${browserCoords.latitude}&lng=${browserCoords.longitude}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setApiPostCode(data.postcode))
  //     .catch((err) => console.error(err));
  // }, [browserCoords, postCodeRef]);

  // useEffect(() => {
  //   if (!userPostcode) return;
  //   const url = `http://localhost:3000/api/google/verifyPostcode?postcode=${userPostcode}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) =>
  //       setVerifyPostcode(data.message === "success" ? true : false)
  //     )
  //     .catch((err) => console.error(err));
  // }, [userPostcode]);

  // useEffect(() => {
  //   if (!inGameName) return;
  //   const url = `http://localhost:3000/api/riot/checkGameName?region=euw1&gameName=${encodeURI(
  //     inGameName
  //   )}&postcode=${userPostcode ?? apiPostCode}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVerifiedGameName(data.message === "success" ? true : false);
  //       setIcons({
  //         current: data.icon.current,
  //         changeTo: data.icon.change,
  //       });
  //       setCallBackId(data.callbackId);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inGameName]);

  // useEffect(() => {
  //   if (verifiedPostcode && verifiedPostcode) {
  //     const url = `http://localhost:3000/api/admin/cache`;
  //     const body = {
  //       postcode: userPostcode ?? apiPostCode,
  //       name: inGameName,
  //       callbackId: callBackId,
  //     };
  //     fetch(url, { body: JSON.stringify(body), method: "POST" })
  //       .then((res) => res.text())
  //       .then((cookie) => Cookies.set("cache", cookie));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [verifiedGameName, verifiedPostcode]);

  // const handleLocation = useCallback(() => {
  //   if (!window.navigator) return;
  //   navigator.geolocation.getCurrentPosition(
  //     (geo) => {
  //       setBrowserCoords(geo.coords);
  //     },
  //     (err) => {
  //       console.error(err);
  //     },
  //     {
  //       enableHighAccuracy: true,
  //     }
  //   );
  // }, []);

  // const postcodeInputCallback = (e: any) => {
  //   setUserPostcode(e.target.value);
  // };
  // const handlePostcodeInput = debounce(postcodeInputCallback, 1000);
  // const clearPostCodeState = () => {
  //   setUserPostcode(undefined);
  //   setApiPostCode(undefined);
  // };

  // const inGameNameCallback = (e: any) => {
  //   setInGameName(e.target.value);
  // };
  // const handleInGameInput = debounce(inGameNameCallback, 1000);

  // const selectGame = useCallback((game: string) => {
  //   console.log(game);
  //   setSelectedGame(game ? true : false);
  // }, []);

  return (
    <Container>
      <Box
        as="section"
        pos={{ base: "relative" }}
        w={{ lg: "100%" }}
        height={{ lg: "768px" }}
        overflowY={{ lg: "hidden" }}
      >
        <Flex pos={{ base: "relative" }} flexDir={{ base: "column" }} w="100%">
          <Flex
            flexDir={{ base: "column" }}
            alignItems={{ base: "center" }}
            margin={{ base: "8% 8%", lg: "4%" }}
          >
            <Text textStyle="h1" mb={{ base: "4%" }}>
              Get started
            </Text>
            <Text textStyle="h2" textAlign={"center"}>
              Join the Lider wailist and claim your pre-release avatar
            </Text>
          </Flex>
          <Flex
            flexDir={{ base: "column" }}
            margin={"0% 8%"}
            zIndex={2}
            // css={{ "span:first-child": { marginBottom: "8px" } }}
          >
            <Flex w="100%" alignItems={"center"}>
              <Button
                w="20%"
                borderRadius={{ base: "8px 8px" }}
                backgroundColor={"purple.300"}
                color={"white"}
                _active={{
                  background: "purple.100",
                  color: "purple.500",
                }}
                _hover={{
                  background: "purple.100",
                  color: "purple.500",
                }}
                // onClick={handleLocation}
              >
                <Image src="/icons/pin.svg" height="32px" width="32px" alt="" />
              </Button>
              <Flex
                // onresponse={apiPostCode || verifiedPostcode}
                w="80%"
              >
                <Input
                  // ref={postCodeRef}
                  // onBlur={postcodeInputCallback}
                  // onFocus={clearPostCodeState}
                  // onChange={handlePostcodeInput}
                  margin="4%"
                  // placeholder={apiPostCode ?? "enter post/zip code"}
                />
              </Flex>
            </Flex>
            <Box w="97%">
              <Dropdown
              // handler={selectGame}
              // disabled={apiPostCode ? !apiPostCode : !verifiedPostcode}
              />
            </Box>
            <Flex w="97%" mb={{ base: "4%" }}>
              <Input
                placeholder="in game name"
                // onChange={handleInGameInput}
                // disabled={!gameSelected}
              />
            </Flex>
            <Box w="100%" mb={{ base: "24%" }}>
              <Button
                w="97%"
                borderRadius={{ base: "8px 8px" }}
                backgroundColor={"purple.300"}
                color={"white"}
                _active={{
                  background: "purple.100",
                  color: "purple.500",
                }}
                _hover={{
                  background: "purple.100",
                  color: "purple.500",
                }}
              >
                <Text textStyle={"h4"}>Claim your avatar</Text>
              </Button>
            </Box>
            {/* {icons?.current}
            {icons?.changeTo} */}
          </Flex>
          <Box
            pos={"absolute"}
            zIndex={1}
            top={{ base: "24px", lg: "386px" }}
            left={{ base: "24px", lg: "96px" }}
          >
            <Image src="/icons/g-one.svg" alt="" height="140px" width="150px" />
          </Box>
          <Box
            pos={"absolute"}
            zIndex={-1}
            bottom={{ base: "8px", lg: "386px" }}
            right={{ base: "16px", lg: "96px" }}
          >
            <Image src="/icons/g-two.svg" alt="" height="96px" width="90px" />
          </Box>
          {/* <ImageWrapper>
          <Image
            src="/assets/backgroundOnboard.png"
            alt=""
            height="716px"
            width="1262px"
          />
        </ImageWrapper> */}
        </Flex>
      </Box>
    </Container>
  );
};
