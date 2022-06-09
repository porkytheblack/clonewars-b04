import { Flex, chakra, Grid } from '@chakra-ui/react'
import React from 'react'
import BasicRoundButton from '../../components/Buttons/BasicRoundButton'
import FeatureContainer from '../../components/Cards/FeatureContainer'
import BigHeader from '../../components/Texts/BigHeader'
import ParagraphText from '../../components/Texts/ParagraphText'
import SmallHeader from '../../components/Texts/SmallHeader'
import { FlexColCenterStart } from '../../utils/FlexConfigs'

function SyncSection() {
  return (
    <Flex {...FlexColCenterStart} width="100vw" padding="64px 0px" >
        <chakra.span width="100%" marginBottom="55px" padding="0px 28px"  >
                    <SmallHeader>   
                        Directory Sync
                    </SmallHeader>
                    <BigHeader>
                        SCIM and HRIS
                        <br />
                        intergrations? No sweat
                    </BigHeader>
                    <ParagraphText>
                    Quickly enable full user lifecycle management by syncing your app with dozens of enterprise employee directory systems.
                    </ParagraphText>
                    <chakra.div marginTop="12px" width="80%" maxWidth="400px" >
                        <BasicRoundButton>
                            Add Directory Sync to your app
                        </BasicRoundButton>
                    </chakra.div>
                </chakra.span>
                <Grid width="100%" bg="f9f9fb" columnGap="44px" rowGap="56px" padding="0px 28px" templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}} templateRows={{base: "repeat(2, 1fr)", md: "1fr"}} >
                    <FeatureContainer heading="SCIM provisions" content="with Okta, Azure, ADFS and more"  custom_src='/assets/IconImages/scim_provisioning.png'  />
                    <FeatureContainer heading="HRIS intergration" content="with Bamboo, Rippling and others" custom_src='/assets/IconImages/hris_intergration.png' />
                </Grid>
    </Flex>
  )
}

export default SyncSection