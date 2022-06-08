import React from 'react'
import {chakra} from "@chakra-ui/react"

function BasicRoundButton({children}: {children: string}) {
  return (
    <chakra.a role="button" boxShadow={"0px 24px 22px rgb(23 6 100 / 4%), 0px 8.5846px 8.03036px rgb(23 6 100 / 5%), 0px 4.77692px 3.89859px rgb(23 6 100 / 7%), 0px 2.63479px 1.91116px rgb(23 6 100 / 8%), 0px 1.15891px 0.755676px rgb(23 6 100 / 12%)"} padding={["12px 24px" ]} transition="background-color .2s" borderRadius={"100px"}  display="flex" alignItems={"center"} justifyContent={"center"} backgroundColor="#6363f1" color="white" fontWeight={"500"} backgroundImage="linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,0))" fontSize={"14px"} >
        {children}
    </chakra.a>
  )
}

export default BasicRoundButton