import React from 'react'
import {chakra, Flex, Grid, GridItem} from "@chakra-ui/react"
import { FlexColCenterCenter, FlexColCenterStart } from '../../../utils/FlexConfigs'
import GradientBackgroundText from '../../../components/Texts/GradientBackgroundText'
import NeonButton from '../../../components/Buttons/NeonButton'
import Image from 'next/image'
import MiniCodeEditor from '../../../components/Containers/MiniCodeEditor'
import FeaturesContainer2, { svg_icon_type } from '../../../components/Cards/FeaturesContainer2'
import FakeResponse from '../../../components/Containers/FakeResponse'

interface c {
    content: string,
    icon: svg_icon_type
}

const f: c[] = [
    {
        icon: "terminal",
        content:  "RESTful APIs, JSON responses, and normalized objects"
    },
    {
        icon: "customization",
        content: "Dashboard seamlessly integrates WorkOS into your application"
    },
    {
        icon: "alarm",
        content: "Realtime updates from directory services with webhook events"
    },
    {
        icon: "code",
        content: "Modern SDKs for Node.js, Ruby, Python, .NET, Go and more"
    },
    {
        icon: "cube",
        content: "Multiple environments to map to your application development process"
    },
    {
        icon: "dailpad",
        content: "Supports 20+ enterprise services with a single integration point"
    }
]

function MoreDetailsSection() {
  return (
    <chakra.section width="100vw" display={"flex"} flexDir="column" alignItems={"center"} justifyContent="start" bg="#030527" overflow="hidden" >
        <Flex {...FlexColCenterStart} width="100%" >
            <Flex {...FlexColCenterStart} width="100%" padding={{base:"64px 28px 0px 28px", md: "80px 28px 0px 28px", xl: "100px 28px 0px 28px"}}  >
                <GradientBackgroundText  fontSize={{base: "20px", md: "24px"}} >
                    Developer first Design
                </GradientBackgroundText>
                <chakra.h3 color="white" textAlign={"center"} fontWeight="500" fontSize={{base: "32px", lg: "40px", xl: "52px" }} >
                    A unified platform with modern APIs
                </chakra.h3>
            </Flex>
            
            <Grid width="100%"  templateColumns={{base: "1fr", lg: "1fr 1fr"}} columnGap={{base: "0px", lg:"80px"}} templateRows={{base: "auto auto", lg: "1fr"}} rowGap="16px" >
                <GridItem width="100%" padding={{base:"64px 28px 0px 28px", md: "80px 28px 0px 28px", xl: "100px 28px 0px 28px"}}   >
                        <chakra.p fontSize="16px" marginTop="12px" textAlign={"center"} color="#c5cae8" >
                            WorkOS provides a single, elegant interface that abstracts dozens of enterprise integrations.
                        </chakra.p>
                        <Flex {...FlexColCenterCenter} width="100%" marginTop={"26px"} >
                            <NeonButton>
                                Read the docs
                            </NeonButton>
                        </Flex>
                        <chakra.div marginTop="10px" >
                            <chakra.a padding="8px 14px" display="flex" flexDirection={"row"} alignItems="center" justifyContent="center"  >
                                <Image src="/svgs/icons/key.svg" width="16px" height="17px"  />
                                <chakra.p marginLeft="4px" color="white" >
                                    Get your API key
                                </chakra.p>
                            </chakra.a>
                        </chakra.div>   
                        <Grid marginTop="64px" templateColumns={"1fr 1fr"} templateRows={"repeat( 3, 1fr)"} columnGap={{base: "48px", lg: "12px"}} rowGap={"48px"} width="100%" >
                            {f.map((item, index) => {
                                return (
                                    <FeaturesContainer2 key={index} icon={item.icon} >
                                        {item.content}
                                    </FeaturesContainer2>
                                )}
                            )
                            }
                        </Grid>
                </GridItem>
                <GridItem padding={"64px 15px"} width="100%"  display="flex" flexDir={"column"} alignItems="center" justifyContent={"flex-start"} >
                        <MiniCodeEditor/>
                        <FakeResponse/>
                </GridItem>
            </Grid>
            
            
        </Flex>
    </chakra.section>
  )
}

export default MoreDetailsSection