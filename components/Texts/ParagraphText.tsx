import { Text, chakra } from '@chakra-ui/react'
import React from 'react'

function ParagraphText({children, align}: {children: string, align?: "center" | "left" | "right"}) {
  return (
    <chakra.p textAlign={typeof align !== "undefined" ? align : "left"} fontFamily={`"WorkOS-Regular", sans-serif`}  marginTop="12px" fontSize="16px" color="#656b8a" >
        {children}
    </chakra.p>
  )
}

export default ParagraphText