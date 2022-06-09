import { Flex, chakra } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../components/Buttons/Logo'
import MobileHamburgerButton from '../../components/Buttons/MobileHamburgerButton'
import { FlexRowCenterBetween } from '../../utils/FlexConfigs'

function TopNav() {
  return (
    <Flex {...FlexRowCenterBetween} width="100vw" padding={["18px 28px", "18px 28px", "18px 28px", "18px 28px", "24px 28px"]} >
        <Logo/>
        <MobileHamburgerButton/>
    </Flex>
  )
}

export default TopNav