import React from 'react'
import {chakra} from "@chakra-ui/react"

function GradientBackgroundText({children, fontWeight, fontSize}: {children: string, fontSize?: string | string[] | any, fontWeight?: string | string[] | any}) {
  return (
    <chakra.p   backgroundImage={"linear-gradient(45deg,#a163f1,#6363f1 34%,#3498ea 60%,#40dfa3)"} backgroundClip="text" fontWeight={Boolean(fontWeight) ? fontWeight:"500"} fontSize={Boolean(fontSize) ? fontSize : "16px"}  >
        {children}
    </chakra.p>
  )
}

export default GradientBackgroundText