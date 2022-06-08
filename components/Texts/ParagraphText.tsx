import { Text, chakra } from '@chakra-ui/react'
import React from 'react'

function ParagraphText({children}: {children: string}) {
  return (
    <chakra.p fontFamily={`"WorkOS-Regular", sans-serif`}  marginTop="12px" fontSize="16px" color="#656b8a" >
        {children}
    </chakra.p>
  )
}

export default ParagraphText