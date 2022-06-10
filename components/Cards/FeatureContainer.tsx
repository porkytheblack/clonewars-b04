import { Flex, chakra, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FlexColCenterCenter, FlexColStartCenter, FlexRowCenterStart } from '../../utils/FlexConfigs'

export type feature_images = "saml"| "openid_connect" | "magic_links" | "oauth"

function FeatureContainer({src, heading, content, custom_src}: {src?: feature_images, heading: string, content: string, custom_src?: string}) {
  return (
      <GridItem>
        <Flex {...FlexRowCenterStart} width="100%" color="rgb(41, 54, 61)" fontSize="14px" fontWeight="400" >
            <Flex {...FlexColCenterCenter} width="120px" height="120px" borderRadius="36px" backgroundColor="white" backgroundImage="linear-gradient(180deg,#fcfcfd,#f2f2f8)" marginRight="26px"  >
                <Image alt="feature_svg" src={ typeof src !== "undefined" ? `/assets/IconImages/${src}.png` : typeof custom_src !== "undefined" ? custom_src : ""} width="120px" loading='lazy'  height="120px" />
            </Flex>
            <Flex {...FlexColStartCenter} height="67px"  >
                <chakra.h4 fontSize="16px" fontWeight="500" color="#6363f1" lineHeight="1.92" letterSpacing={"-0.16"} marginBottom="6px" >
                    {heading}
                </chakra.h4>
                <chakra.p color="#656b8a" >
                    {content}
                </chakra.p>
            </Flex>
        </Flex>
    </GridItem>
  )
}

export default FeatureContainer