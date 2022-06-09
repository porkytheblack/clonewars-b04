import React from 'react'
import {chakra, Flex, Grid, GridItem} from "@chakra-ui/react"
import { FlexColCenterStart, FlexColStartStart, FlexRowCenterAround, FlexRowCenterBetween, FlexRowCenterEnd } from '../utils/FlexConfigs'
import Image from 'next/image'

function Footer() {
  return (
    <Flex bg="#f9f9fb" width="100vw" padding="64px 28px" {...FlexColCenterStart} >
        <Grid width="100%" templateColumns={{base: "repeat(2, 1fr)", md: "30% auto auto auto auto"}} templateRows={{base: "100px auto auto ", md: "auto"}}  columnGap="56px" rowGap={"48px"}  >
            <GridItem colSpan={{base: 2, md: 1}} {...FlexColStartStart}  >
                <Image src="/svgs/icons/workos.svg" width="56px" height="56px" />
            </GridItem>
            {
                [
                    {
                        heading: "Features",
                        are: [
                            "Enterprise SSO",
                            "Directory Sync",
                            "Admin Portal"
                        ]
                    },
                    {
                        heading: "Developers",
                        are: [
                            "Documentation",
                            "Chagelog",
                            "OpenSource",
                            "API Status"
                        ]
                    },
                    {
                        heading: "Resources",
                        are: [
                            "Blog",
                            "Podcast",
                            "Pricing",
                            "Security",
                            "Support"
                        ]
                    },{
                        heading: "Company",
                        are: [
                            "About",
                            "Customers",
                            "Careers",
                            "Legal",
                            "Privacy"
                        ]
                    }
                ].map(({heading, are}, key)=>(
                    <GridItem {...FlexColStartStart} key={key} >
                        
                        <chakra.h6 marginBottom="10px" fontSize="14px" color="#8f96bd"  >
                            {heading}
                        </chakra.h6>
                        {
                            are.map((it, l)=>(
                                <chakra.p color="#656b8a" key={l} >
                                    {it}
                                </chakra.p>
                            ))
                        }
                    </GridItem>
                ))
            }
        </Grid>
        <Flex paddingTop="24px"  width="100%" {...FlexRowCenterBetween} >
            <chakra.p>
                ©️ WorkOS, Inc. 
            </chakra.p>
            <Flex width="50%" {...FlexRowCenterAround}  >
                <Image width="24px" height="24px" src="/svgs/icons/github.svg" />
                <Image width="24px" height="24px" src="/svgs/icons/twitter.svg" />
                <Image width="24px" height="24px" src="/svgs/icons/linkedin.svg" />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Footer