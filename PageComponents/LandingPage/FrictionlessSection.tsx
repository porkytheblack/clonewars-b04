import { Flex, chakra, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import BasicRoundButton from '../../components/Buttons/BasicRoundButton'
import WatchLinkButton from '../../components/Buttons/WatchLinkButton'
import FeaturesContainer2 from '../../components/Cards/FeaturesContainer2'
import BigHeader from '../../components/Texts/BigHeader'
import ParagraphText from '../../components/Texts/ParagraphText'
import SmallHeader from '../../components/Texts/SmallHeader'
import { FlexColCenterCenter, FlexColCenterStart, FlexRowCenterCenter } from '../../utils/FlexConfigs'

function FrictionlessSection() {
  return (
    <Flex  {...FlexColCenterStart} width="100vw" paddingBottom="64px" >
        <Flex {...FlexColCenterStart} width="100%" padding="0px 28px" marginBottom="64px"  >
            <SmallHeader align='center' >
                Frictionless set up
            </SmallHeader>
            <BigHeader align="center" >
                The IT admin's admin
            </BigHeader>
            <ParagraphText>
            Free your support team from the ongoing headache of configuring SSO for enterprise customers. The Admin Portal  is a hosted interface for IT admins to directly set up WorkOS.
            </ParagraphText>
            <Grid templateRows={{base:"repeat(2, 1fr)", lg: "1fr"}} templateColumns={{base: "1fr", lg: "1fr 1fr"}} columnGap={{base: "0px", lg:"44px"}} rowGap="20px" width={{base:"208px", md: "400px"}} marginTop={{base: "26px"}} >
                <BasicRoundButton>
                    Try a live demo
                </BasicRoundButton>
                <WatchLinkButton>
                    Watch the launch video
                </WatchLinkButton>
            </Grid>
        </Flex>

        <Grid width="100vw" padding="0px 28px" templateColumns={{base: "1fr", lg: "1fr 1fr"}} columnGap={{base: "0px", lg: "56px"}}  templateRows={{base: "auto auto", lg:"1fr"}} rowGap={{base: "44px", lg:"0px"}} >
            <GridItem>
                <Image src="/assets/Demos/admin_portal_setup.png" width="776px" height="836px"   />
            </GridItem>
            <GridItem width="100%" >
                <Grid templateColumns={"1fr 1fr"} columnGap="56px" rowGap={"44px"} templateRows={"repeat(3, 1fr)"}  > 
                    {
                        [
                            {
                                icon: "rhombus",
                                content: "Effortlessly connect any identity provider or directory"
                            },
                            {
                                icon: "customize",
                                content: "Customize the look and feel to match your brand"
                            },
                            {
                                icon: "web",
                                content: "Host on your custom domain (CNAME)"
                            },
                            {
                                icon: "gift",
                                content: "A polished experience for IT administrators"
                            },
                            {
                                icon: "pic",
                                content: "Step-by-step setup guides with detailed screenshots"
                            },
                            {
                                icon: "clue",
                                content: "Seamlessly integrates into your existing application"
                            }
                        ].map(({icon, content}, key)=>(
                            <FeaturesContainer2 key={key} custom_src={icon} custom_bg="#dedeff" >
                                {content}
                            </FeaturesContainer2>
                        ))
                    }
                </Grid>
            </GridItem>
        </Grid>
    </Flex>
  )
}

export default FrictionlessSection