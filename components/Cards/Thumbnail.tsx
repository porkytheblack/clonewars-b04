import { Flex, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter } from '../../utils/FlexConfigs'

function Thumbnail() {
  return (
    <Flex {...FlexColCenterCenter} width="100%" maxWidth={"257"} maxHeight="193px" overflow="hidden" borderRadius="10px" position="relative">
        <Image alt="guy" src="/assets/Media/guy.jpg" width="257px" height="193px" />
        <Flex width={"100%"} height="100%" background="transparent"  pos="absolute" top="0px" left="0px" {...FlexColCenterCenter} >
            <chakra.a  textDecor={"none"} >
                <Image alt="thumbnail" src="/svgs/icons/BigPlayButton.svg" height="53px" width="53px" />
            </chakra.a>
        </Flex>
    </Flex>
  )
}

export default Thumbnail