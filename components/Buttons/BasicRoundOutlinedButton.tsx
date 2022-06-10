import React from 'react'
import {chakra} from "@chakra-ui/react"

function BasicRoundOutlinedButton({children}: {children: string}) {
  return (
    <chakra.a cursor='pointer' marginLeft="20px" textDecoration={"none"} padding="9.5px 20px" fontSize="14px" display="flex" alignItems={"center"} justifyContent="center" border="1px solid #e8eaef" borderRadius="100px" color="#6363f1" >
        {children}
    </chakra.a>
  )
}

export default BasicRoundOutlinedButton