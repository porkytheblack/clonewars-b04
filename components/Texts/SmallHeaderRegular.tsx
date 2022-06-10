import React from 'react'
import {chakra} from "@chakra-ui/react"

function SmallHeaderRegular({children}:{children: string}) {
  return (
    <chakra.h3 fontSize="18px" color="#8f96bd" >
        {children}
    </chakra.h3>
  )
}

export default SmallHeaderRegular