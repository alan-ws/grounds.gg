import { styled } from "goober";
import Image from "next/image";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../components/button";
import { Dropdown } from "../components/dropdown";
import { colors, fonts } from "../components/styles";
import { BackgroundImage, Text } from "./we-are-game-fanatics";

const Section = styled("section")((props) => ({
  position: "relative",
  width: "100%",
  height: "768px",
  overflowY: "hidden",
}));

const Container = styled("div")((props) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  marginTop: "4%",
}));

const ImageWrapper = styled(BackgroundImage)(() => ({
  top: "224px",
}));

const GLogoPosition = styled('div')((props: {top: string; right: string}) => ({
  position: 'absolute',
  zIndex: 1,
  top: props.top,
  right: props.right
}))

const FormContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  margin: "4% 34% 8% 34%",
  zIndex: 2,
  'span:first-child': {
    marginBottom: '8px'
  }
}));

const Location = styled("div")(() => ({
  display: "flex",
  flex: 1,
  marginBottom: '4%'
}));

const Input = styled("input", forwardRef)((props: { flex: number; margin?: string }) => ({
  all: 'unset',
  display: "flex",
  flex: props.flex,
  marginLeft: props.margin,
  marginRight: "16px",
  background: 'rgba(13, 12, 34, 0.04)',
  borderRadius: '8px',
  paddingLeft: '24px',
  '&::placeholder': {
    color: colors.placeholder,
    ...fonts.placeholder
  },
  color: colors.secondary,
}));

const CTA = styled('div')(() => ({
  marginTop: '8%',
  width: '97%',
}))

const InputCta = styled('div')(() => ({
  display: 'flex',
  minHeight: '64px',
  '& > input': {
    '&::placeholder': {
      opacity: 0.2,
      color: colors.secondary
    }
  }
}))

const PostcodeInput = styled('div')(() => ({
  display: 'flex',
  flex: 2,
  minHeight: '64px',
  '& > input': {
    '&::placeholder': {
      opacity: 0.2,
      color: colors.secondary
    }
  }
}))

const DropDownCta = styled('div')(() => ({
  width: '97%',
  marginBottom: '4%'
}))

// const success
// background-color: #8cff8c;
// border: 2px solid green;

// const error
// background-color: #ff8c8c;
// border: 2px solid red;

function debounce(func: (e: any) => void, timeout = 300){
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export const OnBoarding = () => {
  const [browserCoords, setBrowserCoords] = useState<any>()
  const [userPostcode, setUserPostcode] = useState<string>();
  const [apiCoords, setApiCoords] = useState<any>()
  const [apiPostCode, setApiPostCode] = useState<string>();
  const postCodeRef = useRef<HTMLInputElement>(null);
  const [inGameName, setInGameName] = useState<string>('');

  useEffect(() => {
    if (!browserCoords) return;
    if (postCodeRef.current) postCodeRef.current.value = '' 
    const key = ''
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${browserCoords.latitude},${browserCoords.longitude}&key=${key}`
    fetch(url).then(res => res.json()).then(data => data.results.map((address: any) => {
      if (address.types.includes('postal_code')) {
        address.address_components.map((component: any) => {
          if (component.types.includes('postal_code')) {
            setApiPostCode(component.long_name)
          }
        })
      }
    })).catch(err => console.error(err))
  }, [browserCoords, postCodeRef])

  useEffect(() => {
    if (!userPostcode) return;
    const key = ''
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${userPostcode}&key=${key}`
    fetch(url).then(res => res.json()).then(data => data.results.map((address: any) => {
      if (address.geometry) setApiCoords({latitude: address.geometry.location.lat, longitude: address.geometry.location.lng})
    })).catch(err => console.error(err))
  }, [userPostcode])

  useEffect(() => {
    if (!inGameName) return;
    // const key = ''
    const url = 'https://europe-west2-grounds-mvp.cloudfunctions.net/verifyGameName'
    const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(inGameName)}`
    fetch(url, {headers: {
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Riot-Token": ""
    }}).then(res => res.json()).then(data => console.log(data))
  }, [inGameName])

  const handleLocation = useCallback(() => {
    if (!window.navigator) return;
    navigator.geolocation.getCurrentPosition((geo) => {
      setBrowserCoords(geo.coords)
    },  (err) => {
      console.error(err)
    }, {
      enableHighAccuracy: true
    })
  }, [])

  const postcodeInputCallback = (e: any) => {
    setUserPostcode(e.target.value);
  }
  const handlePostcodeInput = debounce(postcodeInputCallback, 1000)
  const clearPostCodeState = () => {
    setUserPostcode(undefined)
    setApiPostCode(undefined)
  }

  const inGameNameCallback = (e: any) => {
    setInGameName(e.target.value);
  }
  const handleInGameInput = debounce(inGameNameCallback, 1000)

  return (
    <Section>
      <Container>
        <Content>
          <Text textStyle="h3">Let’s get started</Text>
          <Text textStyle="h4">
            To get you onboarded and started, join Lider
          </Text>
        </Content>
        <FormContainer>
          <Text textStyle="placeholder">
            Lider is our distributed, localised competitve ladder
          </Text>
          <Location>
            <Button btnStyle="primary" textStyle="btn1" onClick={handleLocation}>
              <Image src="/icons/pin.svg" height="32px" width="32px" alt="" />
            </Button>
            <PostcodeInput>
              <Input
                ref={postCodeRef}
                onBlur={postcodeInputCallback}
                onFocus={clearPostCodeState}
                onChange={handlePostcodeInput}
                flex={2}
                margin="4%"
                placeholder={apiPostCode ?? "enter post/zip code" }/>
            </PostcodeInput>
          </Location>
          <DropDownCta>
            <Dropdown />
          </DropDownCta>
          <InputCta>
            <Input flex={1} placeholder="in game name" onChange={handleInGameInput} />
          </InputCta>
          <CTA>
            <Button textStyle="btn1" btnStyle="third">Claim your avatar</Button>
          </CTA>
        </FormContainer>
        <GLogoPosition top="164px" right="196px">
        <Image
            src="/icons/g-one.svg"
            alt=""
            height="140px"
            width="150px"
          />
        </GLogoPosition>
        <GLogoPosition top="386px" right="96px">
        <Image
            src="/icons/g-two.svg"
            alt=""
            height="96px"
            width="90px"
          />
        </GLogoPosition>
        <ImageWrapper>
          <Image
            src="/assets/backgroundOnboard.png"
            alt=""
            height="716px"
            width="1262px"
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
};
