import React from 'react'
import {chakra, styled} from "@chakra-ui/react"
import Image from 'next/image'
import play_icon from "../../public/svgs/icons/small_play_icon.svg"

function WatchLinkButton({children}: {children: string}) {
  return (
    <chakra.a textDecor={"none"} display="flex" flexDirection={"row"} alignItems="center" justifyContent={"space-around"} color="black" >
        <PlayIcon width="16px" height="17px" marginRight="4px" color="yellow" />
        <chakra.span fontSize={"14px"} >
            {children}
        </chakra.span>
    </chakra.a>
  )
}

export default WatchLinkButton

const PlayIcon = styled(play_icon)