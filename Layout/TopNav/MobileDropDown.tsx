import { CloseIcon } from '@chakra-ui/icons'
import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import BasicRoundButton from '../../components/Buttons/BasicRoundButton'
import BasicRoundOutlinedButton from '../../components/Buttons/BasicRoundOutlinedButton'
import FeaturesButton from '../../components/Buttons/FeaturesButton'
import FeaturesButton2 from '../../components/Buttons/FeaturesButton2'
import SmallHeaderRegular from '../../components/Texts/SmallHeaderRegular'
import { FlexRowCenterAround, FlexRowCenterBetween, FlexRowCenterCenter, FlexRowCenterStart } from '../../utils/FlexConfigs'

function MobileDropdown({close}:{close: ()=>void}) {
  return (
    <Grid width="90%" minHeight={"100vh"} position="absolute" top="10px" zIndex="20"  borderRadius={"4px"} padding="10px 12px 0px" height="auto" background="white" boxShadow={"0px 51px 78px rgb(17 7 53 / 5%), 0px 21.3066px 35.4944px rgb(17 7 53 / 4%), 0px 11.3915px 18.9418px rgb(17 7 53 / 3%), 0px 6.38599px 9.8801px rgb(17 7 53 / 3%), 0px 3.39155px 4.58665px rgb(17 7 53 / 2%), 0px 1.4113px 1.55262px rgb(17 7 53 / 1%), inset 0px 1px 0px rgb(41 56 78 / 5%)"}  
          templateRows={"auto auto auto auto"}  rowGap="44px" 
      >
        {/* first */} 
          <GridItem width="auto"  >
            <Flex {...FlexRowCenterAround} >
              <SmallHeaderRegular>
                Features
              </SmallHeaderRegular>
              <CloseIcon onClick={close} color="#8f96bd" fontSize={"16px"} />
            </Flex>
            <Grid templateRows={"repeat(3, 1fr)"} rowGap="10px" >
                {[
                    {
                    heading: "Enterprise SSO",
                    src: "/svgs/icons/enterprise_sso.svg",
                    desc: "Unified intergration for any identity provider"
                    },
                    {
                        heading: "Directory Sync",
                        src: "/svgs/icons/directory_sync.svg",
                        desc: "Real-time updates from co-operate user directories"
                    },
                    {
                        heading: "Admin Portal",
                        src: "/svgs/icons/admin_portal.svg",
                        desc: "Self-service onboarding for IT admins"
                    }
                ].map(({heading, src, desc}, key)=>(
                    <GridItem width="auto" >
                        <FeaturesButton src={src} desc={desc} heading={heading} />
                    </GridItem>
                ))}
              
            </Grid>
            <Divider dir='horizontal' />
          </GridItem>
          {/* Second */}
          <GridItem width="auto" >
            <Flex {...FlexRowCenterStart} >
                <SmallHeaderRegular>
                    Developers
                </SmallHeaderRegular>
              </Flex>
              <Grid templateRows={"repeat(2, 1fr)"} templateColumns={"repeat(2, 1fr)"} columnGap="10px" rowGap="10px" >
                {
                    [
                        {
                            src: "/svgs/icons/docs.svg",
                            desc: "Documentation"
                        },
                        {
                            src: "/svgs/icons/changelog.svg",
                            desc: "ChangeLog"
                        },
                        {
                            src: "/svgs/icons/open_source.svg",
                            desc: "Open Source"
                        },
                        {
                            src: "/svgs/icons/api_src.svg",
                            desc: "Api Status"
                        },
                    ].map(({src, desc}, index)=>(
                        <FeaturesButton2 key={index} src={src}>
                            {desc}
                        </FeaturesButton2>
                    ))
                }
                
            </Grid>
            <Divider dir="horizontal" />
          </GridItem>
          {/* Third */}
          <GridItem width="100%" >
            <Flex {...FlexRowCenterStart} >
                <SmallHeaderRegular>
                    Developers
                </SmallHeaderRegular>
              </Flex>
              <Grid templateRows={"repeat(4, 1fr)"} templateColumns={"repeat(2, 1fr)"} columnGap="24px" rowGap="10px" >
                
                {
                    [
                        {
                            src: "/svgs/icons/blog.svg",
                            desc: "Blog"
                        },
                        {
                            src: "/svgs/icons/podcast.svg",
                            desc: "Podcast"
                        },
                        {
                            src: "/svgs/icons/customers.svg",
                            desc: "Customers"
                        },
                        {
                            src: "/svgs/icons/company.svg",
                            desc: "Company"
                        },
                        {
                            src: "/svgs/icons/careers.svg",
                            desc: "Careers"
                        },
                        {
                            src: "/svgs/icons/security.svg",
                            desc: "Security"
                        },
                        {
                            src: "/svgs/icons/support.svg",
                            desc: "Support"
                        },
                        {
                            src: "/svgs/icons/pricing.svg",
                            desc: "Pricing"
                        }
                    ].map(({src, desc})=>(
                        <FeaturesButton2 src={src} >
                            {desc}
                        </FeaturesButton2>
                    ))
                }
                
                <GridItem width="100%" >

                </GridItem>
            </Grid>
            <Divider dir="horizontal" />
          </GridItem>
          {/* Fourth */}
          <GridItem width="100%" padding="28px" {...FlexRowCenterCenter} >
                <Grid templateColumns="1fr 1fr" columnGap="20px" >
                    <GridItem>
                        <BasicRoundButton>
                        Sign In
                    </BasicRoundButton>
                    </GridItem>
                    <GridItem>
                    <BasicRoundOutlinedButton>
            Sign Up
          </BasicRoundOutlinedButton>
                    </GridItem>
                </Grid>
          </GridItem>
      </Grid>
  )
}

export default MobileDropdown