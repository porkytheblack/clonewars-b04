import React from 'react'
import {chakra, Flex, Grid, GridItem} from "@chakra-ui/react"
import { FlexColStartStart } from '../../utils/FlexConfigs'
import SmallHeader from '../../components/Texts/SmallHeader'
import BigHeader from '../../components/Texts/BigHeader'
import ParagraphText from '../../components/Texts/ParagraphText'
import BasicRoundButton from '../../components/Buttons/BasicRoundButton'
import FakeSignInCard from '../../components/Cards/FakeSignInCard'

function Section1() {
  return (
    <chakra.section bg="#f9f9fb" marginBottom="112px" width={["100%"]} padding={["64px 28px", "64px 28px", "64px 28px", "64px 28px", "80px 20px" ]} >
        <Grid alignItems={"center"} justifyContent={"start"} templateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr" ]} templateRows={["1fr 1fr", "1fr 1fr", "1fr 1fr", "1fr", "1fr"]} rowGap={["48px", "48px", "48px", "0px"]} columnGap={["0px", "0px", "0px", "52px"]} >
            <GridItem justifyContent={"start"} >
                <chakra.span width="100%"  >
                    <SmallHeader>
                        The all-in-one solution
                    </SmallHeader>
                    <BigHeader>
                        Enterprise SS0
                        <br />
                        (and a whole lot more)
                    </BigHeader>
                    <ParagraphText>
                    WorkOS is a set of building blocks for quickly adding enterprise features to your app. You’ll be shipping quickly with a market-proven solution for your customers.
                    </ParagraphText>
                    <chakra.div marginTop="12px" width="80%" >
                        <BasicRoundButton>
                            Add Single Sign-On to your app
                        </BasicRoundButton>
                    </chakra.div>
                </chakra.span>
            </GridItem>
            <GridItem>
                <FakeSignInCard/>
            </GridItem>
        </Grid>
    </chakra.section>
  )
}

export default Section1