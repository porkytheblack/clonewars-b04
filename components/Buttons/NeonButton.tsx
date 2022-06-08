import React from 'react'
import {chakra} from "@chakra-ui/react"

function NeonButton({children}: {children: string}) {
  return (
    <chakra.a role="button" color="#030628" borderRadius={"100px"} padding={{base: "12px 20px", xl: "12px 24px"}} fontSize={{base: "14px" }} backgroundImage="linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,0))" transition="background-color 0.2s" fontWeight={"500"}  cursor="pointer" display="flex" alignItems={"center"} justifyContent="center" backgroundColor="#23f0c3" boxShadow="0 0 14px 0 rgb(35 240 195 / 70%), inset 0 0 0 1px #19cba4" >
        {children}
    </chakra.a>
  )
}

export default NeonButton