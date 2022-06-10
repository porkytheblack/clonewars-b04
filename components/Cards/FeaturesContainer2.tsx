import { chakra, Flex, GridItem, styled } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter } from '../../utils/FlexConfigs'

export type svg_icon_type = "terminal" | "customization" | "alarm" | "code" | "cube" | "dailpad"

function FeaturesContainer2({children,icon, custom_bg, custom_src}: {children: string,icon?: svg_icon_type,custom_src?: string, custom_bg?: string }) {
  return (
    <chakra.a width="100%" display="flex" flexDirection="column" alignItems={"flex-start" } justifyContent="flex-start" >
        <Flex {...FlexColCenterCenter} width="32px" color={"#558adb" } height="32px" bg={typeof custom_bg == "undefined"?"#0f2151": custom_bg} borderRadius={"7px"} marginBottom="12px" >
            <Image src={ typeof icon !== "undefined" ?  `/svgs/icons/${icon}.svg` : typeof custom_src !== "undefined" ? `/svgs/icons/${custom_src}.svg` : ""} width={24} height={24} />
        </Flex>
        <chakra.p textAlign={"left"} color={typeof custom_bg == "undefined" ? "#c5cae8" : "#656b8a"} >
            {children}
        </chakra.p>
    </chakra.a>
  )
}

export default FeaturesContainer2


