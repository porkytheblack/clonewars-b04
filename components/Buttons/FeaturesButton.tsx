import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import SvgLogoComponent from '../Svgs'
import { FlexColStartStart } from '../../utils/FlexConfigs'
import SmallHeader from '../Texts/SmallHeader'
import ParagraphText from '../Texts/ParagraphText'

function FeaturesButton({src, heading, desc}:{src: string, heading: string, desc: string}) {
  return (
    <chakra.a _hover={{backgroundColor: "#eef4fc"}} borderRadius="4px" padding="12px 14px" display="flex" alignItems={"flex-start"} justifyContent="flex-start"  >
        <chakra.i width="22px" marginRight="12px" paddingTop="8px" height="26px" >
            <SvgLogoComponent custom_src={src} custom_dimensions={{width: 24, height: 18}} />
        </chakra.i>
        <Flex {...FlexColStartStart}  width="auto" > 
            <chakra.h4 marginBottom="12px" fontSize="16px" >
                {heading}
            </chakra.h4>
            <ParagraphText>
                {desc}
            </ParagraphText>
        </Flex>
    </chakra.a>
  )
}

export default FeaturesButton