import React from 'react'
import {chakra} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

function MobileHamburgerButton() {
  return (
    <chakra.button bg="none" outline="none"  padding="6px 12px" border="1px solid #e8eaed" borderRadius={"100px"}  cursor="pointer" color="#656b8a" >
        <HamburgerIcon fontSize="18px" />
    </chakra.button>
  )
}

export default MobileHamburgerButton