import React from 'react'
import {chakra} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

function PlainRightIconButton({children}: {children: string}) {
  return (
    <chakra.a  padding={["8px 14px", "8px 14px", "8px 14px", "8px 24px"]} fontSize={["14px"]} display="flex" flexDir="row" alignItems={"center"} justifyContent="flex-start" >
        <chakra.span>
            {children}
        </chakra.span>
        <ChevronRightIcon fontSize="24px" color="#8f96bd" marginRight={"4px"} />
    </chakra.a>
  )
}

export default PlainRightIconButton