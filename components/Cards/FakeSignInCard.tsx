import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexColCenterStart, FlexRowCenterCenter } from '../../utils/FlexConfigs'
import Image from "next/image"

function FakeSignInCard() {
  return (
    <chakra.div borderRadius="20px" boxShadow={"0px 51px 78px rgb(17 7 53 / 5%), 0px 21.3066px 35.4944px rgb(17 7 53 / 4%), 0px 11.3915px 18.9418px rgb(17 7 53 / 3%), 0px 6.38599px 9.8801px rgb(17 7 53 / 3%), 0px 3.39155px 4.58665px rgb(17 7 53 / 2%), 0px 1.4113px 1.55262px rgb(17 7 53 / 1%), inset 0px 1px 0px rgb(41 56 78 / 5%)"} opacity="1" style={{transformStyle: "preserve-3d"}} transform="translate3d(0px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" >
        <Flex {...FlexColCenterStart} padding={"42px 36px"} backgroundImage={"/assets/Demos/fake_ui_backdrop,png"} backgroundRepeat="no-repeat" backgroundSize={"contain"}  >
            <chakra.div width="54px" height="54px"  >
                <Image src="/svgs/GeneralUI/fake_user.svg" width={54} height={54} />
            </chakra.div>
            <Flex {...FlexColCenterStart} marginTop="22px" width="100%" >
                <Flex {...FlexRowCenterCenter} width="100%" padding="9px 0px" border="1px solid #cfd8dc" borderRadius={"8px"}  color="#a7abc2" fontSize="16px" fontWeight={"400"} >
                    don@foo-corp.com
                </Flex>
                <Flex {...FlexRowCenterCenter} borderRadius="8px" width="100%" padding="14px 0px" marginTop="22px" boxShadow={"-5px 0px 29px 1px rgb(219 74 255 / 26%), 5px 0px 29px 1px rgb(23 255 199 / 32%)"}  >
                    <Image src="/svgs/GeneralUI/lock.svg"  width="14px" height="15px" />
                    <chakra.p marginLeft="10px" backgroundImage={"linear-gradient(45deg,#a163f1,#6363f1 34%,#3498ea 60%,#40dfa3)"} backgroundClip="text" fontWeight="500" fontSize="16px"  >
                        Single Sign-On
                    </chakra.p>
                </Flex>
            </Flex>
        </Flex>
    </chakra.div>
  )
}

export default FakeSignInCard