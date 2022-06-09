import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Thumbnail from '../../components/Cards/Thumbnail'
import BigHeader from '../../components/Texts/BigHeader'
import ParagraphText from '../../components/Texts/ParagraphText'
import SmallHeader from '../../components/Texts/SmallHeader'
import { FlexColCenterStart, FlexColStartEnd } from '../../utils/FlexConfigs'

function WhyUsSection() {
  return (
    <Grid backgroundImage={"linear-gradient(180deg,hsla(0,0%,100%,0) 85%,#fff),url(/svgs/icons/why_bg.svg)"} templateColumns={{base: "1fr", lg: "repeat(2, 1fr)"}} templateRows={{base: "auto auto", lg: "auto"}} columnGap={{base: "0px", lg: "56px"}} rowGap={{base: "44px", lg: "0px"}} width="100vw" padding="64px 28px" >
        <GridItem>
            <SmallHeader align='left' >
                Why WorkOS?
            </SmallHeader>
            <BigHeader>
                Expand your market
            </BigHeader>
            <ParagraphText>
            In the past, building for the enterprise was complex, time-consuming, and distracting from core features. Deals would slip away, perhaps forever, due to requirements from IT admins.
            </ParagraphText>
            <ParagraphText>
            With WorkOS, you can immediately begin selling to enterprise customers and expand your market footprint.
            </ParagraphText>
        </GridItem>
        <GridItem {...FlexColStartEnd} >
            <Grid width="100%" templateColumns={{base: "1fr", md: "1fr 1fr"}} templateRows={{base: "auto auto", md: "auto"}} columnGap={{base: "0px", md: "28px"}} rowGap={{base: "22px", lg:"0px"}} >
                <GridItem>
                    <Thumbnail/>
                </GridItem>
                <GridItem {...FlexColStartEnd}  >
                    <SmallHeader>
                        Watch: Chasing the 
                        <br />
                        Enterprise Chasm
                    </SmallHeader>
                    <ParagraphText>
                        What happens if you don't become Enterprise Ready?
                    </ParagraphText>
                </GridItem>
            </Grid>
        </GridItem>
    </Grid>
  )
}

export default WhyUsSection