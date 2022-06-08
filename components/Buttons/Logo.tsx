import React from 'react'
import { Flex, chakra, styled } from '@chakra-ui/react'
import WorkOsLogo from "../../public/svgs/CompanyLogos/workos.svg"

function Logo() {
  return (
    <chakra.a textDecoration={"none"}  height="24px" >
        <WorkOsLogoSvg width="126" height="24" />
    </chakra.a>
  )
}

export default Logo

const WorkOsLogoSvg = styled(WorkOsLogo)