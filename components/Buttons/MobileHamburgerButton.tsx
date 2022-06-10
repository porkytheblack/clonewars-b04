import React, { useState } from 'react'
import {chakra, Divider, Flex, Grid, GridItem} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FlexRowCenterBetween, FlexRowCenterCenter, FlexRowCenterStart } from '../../utils/FlexConfigs'
import SmallHeaderRegular from '../Texts/SmallHeaderRegular'
import BasicRoundButton from './BasicRoundButton'

function MobileHamburgerButton({onClick}:{onClick: ()=>void}) {
  const [active, set_active] = useState<boolean>(false)

  
  return (
    <Flex>
      <chakra.button onClick={()=>{onClick()}} bg="none" outline="none"  padding="6px 12px" border="1px solid #e8eaed" borderRadius={"100px"}  cursor="pointer" color="#656b8a" >
        <HamburgerIcon fontSize="18px" />
      </chakra.button>

      

    </Flex>
    
  )
}

export default MobileHamburgerButton