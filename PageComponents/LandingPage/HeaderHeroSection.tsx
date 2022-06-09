import { Flex, chakra, keyframes, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import BasicRoundButton from '../../components/Buttons/BasicRoundButton'
import PlainRightIconButton from '../../components/Buttons/PlainRightIconButton'
import SvgLogoComponent, { company_svgs } from '../../components/Svgs'
import ParagraphText from '../../components/Texts/ParagraphText'
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
    <Flex {...FlexColStartStart} width="100vw" marginBottom={{base: "64px", md: "112px"}}  padding={["44px 28px"]}  >
        <Flex marginBottom={{base: "0px", md: "112px"}} width={{base: "100%", md: "50%"}}  {...FlexColStartStart}  >
            <chakra.h1 fontSize={{base: "52px", lg: "72px"}}  fontWeight="500" marginBottom="16px"  width="100%"  >
                <chakra.span color="#29363d"   >
                    Your app,
                </chakra.span>
                <br />
                ‍
                <chakra.span backgroundSize={"150% 100%"} backgroundRepeat="no-repeat" backgroundClip={"text"} animation={`${introGradient} 1.2s cubic-bezier(0.85, 0.26, 0.89, 0.93)`}  backgroundImage={"linear-gradient(45deg,#a163f1,#6363f1 22%,#3498ea 40%,#40dfa3 67%, rgba(64, 223, 163, 0))"}  >
                    Enterprise Ready
                </chakra.span>
            </chakra.h1>
            <ParagraphText >
            Start selling to enterprise customers with just a few lines of code. Implement features like single sign-on in minutes instead of months.
            </ParagraphText>
            <Flex flexDir={"row"} alignItems="center" justifyContent={{base: "center", md: "flex-start"}}  marginTop={["24px"]} width="100%" >
                <BasicRoundButton>
                    Get Started
                </BasicRoundButton>
                <PlainRightIconButton>
                    Contact Sales
                </PlainRightIconButton>
            </Flex>
         </Flex>
        
        <chakra.h4 color="#656B8A" textTransform={"uppercase"} fontSize="20px" >
            Trusted by
        </chakra.h4>
        <Grid width="100%" templateColumns={{base: "repeat(2, 1fr)", md: "repeat(4, 1fr)"}} marginTop={["24px"]} columnGap={["56px"]} templateRows={{base:"repeat(4, 1fr)", md: "1fr 1fr"}} rowGap={["48px"]} justifyItems="center" alignItems="center" >
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