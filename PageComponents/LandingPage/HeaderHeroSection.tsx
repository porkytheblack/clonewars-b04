import { Flex, chakra, keyframes, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import BasicRoundButton from '../../components/Buttons/BasicRoundButton'
import PlainRightIconButton from '../../components/Buttons/PlainRightIconButton'
import SvgLogoComponent, { company_svgs } from '../../components/Svgs'
import { FlexColStartStart, FlexRowCenterAround, FlexRowCenterCenter } from '../../utils/FlexConfigs'

const introGradient = keyframes`
    from{
        background-position: 300% 100%;
    }
    to {
        background-position: 0% 100%;
    }
`
function HeaderHeroSection() {
  return (
    <Flex {...FlexColStartStart} maxWidth={["440px"]}  padding={["44px 28px"]}  >
        <chakra.h1 fontSize={["10.7vw"]}  fontWeight="500" marginBottom="16px"  width="100%"  >
            <chakra.span color="#29363d"   >
                Your apps,
            </chakra.span>
            <br />
            ‍
            <chakra.span backgroundSize={"150% 100%"} backgroundRepeat="no-repeat" backgroundClip={"text"} animation={`${introGradient} 1.2s cubic-bezier(0.85, 0.26, 0.89, 0.93)`}  backgroundImage={"linear-gradient(45deg,#a163f1,#6363f1 22%,#3498ea 40%,#40dfa3 67%, rgba(64, 223, 163, 0))"}  >
                Enterprise Ready
            </chakra.span>
        </chakra.h1>
        <chakra.p fontSize={["16px"]} color="#656b8a" lineHeight={["1.5"]} marginTop={["0px"]} >
        Start selling to enterprise customers with just a few lines of code. Implement features like single sign-on in minutes instead of months.
        </chakra.p>
        <Flex {...FlexRowCenterAround} marginTop={["24px"]} width="100%" >
            <BasicRoundButton>
                Get Started
            </BasicRoundButton>
            <PlainRightIconButton>
                Contact Sales
            </PlainRightIconButton>
        </Flex>
        <Grid width="100%" templateColumns={["repeat(2, 1fr)"]} marginTop={["24px"]} columnGap={["28px"]} templateRows={["repeat(4, 1fr)"]} rowGap={["52px"]} justifyItems="center" alignItems="center" >
            {(["webflow", "hopin", "airbase", "pitch", "vercel", "drata", "planet_scale", "loom"] as company_svgs[]).map((src: company_svgs, key)=>(
                <GridItem>
                    <SvgLogoComponent name={src} />
                </GridItem>
            ))}
        </Grid>
    </Flex>
  )
}

export default HeaderHeroSection