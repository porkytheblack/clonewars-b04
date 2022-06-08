import { chakra, Flex, GridItem, styled } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter } from '../../utils/FlexConfigs'

export type svg_icon_type = "terminal" | "customization" | "alarm" | "code" | "cube" | "dailpad"

function FeaturesContainer2({children,icon}: {children: string,icon: svg_icon_type}) {
  return (
    <GridItem width="100%" display="flex" flexDirection="column" alignItems={"flex-start" } justifyContent="flex-start" >
        <Flex {...FlexColCenterCenter} width="32px" color="#558adb" height="32px" bg="#0f2151" borderRadius={"7px"} marginBottom="12px" >
            <Image src={`/svgs/icons/${icon}.svg`} width={24} height={24} />
        </Flex>
        <chakra.p textAlign={"left"} color="#c5cae8" >
            {children}
        </chakra.p>
    </GridItem>
  )
}

export default FeaturesContainer2


