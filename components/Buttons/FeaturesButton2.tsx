import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import SvgLogoComponent from '../Svgs'
import ParagraphText from '../Texts/ParagraphText'
import { FlexColStartStart } from '../../utils/FlexConfigs'

function FeaturesButton2({children, src}: {src: string, children: string}) {
  return (
    <chakra.a borderRadius="4px" padding="12px 14px" _hover={{background: "#eef4fc"}} display="flex" flexDirection={"row"} alignItems="center" justifyContent={"flex-start"}  >
        <chakra.i width="18px" marginRight="12px" marginTop={"12px"} height="24px" >
            <SvgLogoComponent custom_src={src} custom_dimensions={{width: 24, height: 24}} />
        </chakra.i>
        <Flex {...FlexColStartStart} width="auto" > 
            
            <ParagraphText>
                {children}
            </ParagraphText>
        </Flex>
    </chakra.a>
  )
}

export default FeaturesButton2