import React, { ReactNode } from 'react'
import {chakra} from "@chakra-ui/react"

function BigHeader({children, color}: {children: string | ReactNode[] , color?: string}) {
  return (
    <chakra.h3 letterSpacing={"1.07"} fontFamily={`"WorkOS-Medium", sans-serif`} style={{letterSpacing:"-.05em"} }fontWeight="500"  color={Boolean(color)  ? color : "#29363d"} fontSize={["32px", "32px", "32px", "40px", "52px"]}  textAlign={"left"} width="100%" >
        {children}
    </chakra.h3>
  )
}

export default BigHeader