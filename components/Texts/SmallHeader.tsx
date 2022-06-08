import React from 'react'
import {chakra} from "@chakra-ui/react"

function SmallHeader({children}: {children: string}) {
  return (
    <chakra.h2 textAlign={"left"} fontSize={["20px", "20px", "20px", "20px", "24px", "28px"]}  lineHeight="1.2" color="#6363f1" fontWeight={"500"}   >
        {children}
    </chakra.h2>
  )
}

export default SmallHeader