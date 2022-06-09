import React, { ReactNode } from 'react'
import {chakra} from "@chakra-ui/react"

function SmallHeader({children, align}: {children: string | ReactNode | ReactNode[], align?: "left" | "center" | "right"}) {
  return (
    <chakra.h2 textAlign={typeof align !== "undefined" ? align : "left"}  fontSize={["20px", "20px", "20px", "20px", "24px", "28px"]}  lineHeight="1.2" color="#6363f1" fontWeight={"500"}   >
        {children}
    </chakra.h2>
  )
}

export default SmallHeader