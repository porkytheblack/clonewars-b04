import React, { useContext, useEffect, useRef, useState } from 'react'
import {chakra, Flex, useMediaQuery} from "@chakra-ui/react"
import { FlexColCenterStart, FlexColStartStart } from '../../utils/FlexConfigs'
import { ScrollContext } from '../../helpers/scroll-observer'
const hljs = require("highlight.js")
import {motion} from "framer-motion"

const json_string: string[] = [
    "Response {...}",
    `  "access_token": "01DMEK0J53CVMC32CK5SE0KZ8Q",`,
    `  "profile": {`,
    `    "id": "prof_01DMC79VCBZ0NY2099737PSVF1",`,
    `    "connection_id": "conn_01E4ZCR3C56J083X43JQXF3JK5",`,
    `    "connection_type": "okta",`,
    `    "email": "alan@foo-corp.com",`,
    `    "first_name": "Alan",`,
    `    "last_name": "Turing",`,
    `    "idp_id": "00u1a0ufowBJlzPlk357",`,
    `    "object": "profile",`,
    `    "raw_attributes": {...}`,
    `  }`
]

function FakeResponse() {
    const max_top_desktop = 302
    const min_top_desktop = 518
    const max_top_mob = 240
    const min_top_mob = 109
    const ContainerRef = useRef<HTMLDivElement|null>(null)
    const {scrollY} = useContext(ScrollContext)
    const [opacity, set_opacity] = useState<number>(0)
    const [y, set_y] = useState<number>(50)
    const [scale_x, set_scale_x] = useState<number>(0.5)
    const [scale_y, set_scale_y] = useState<number>(0.95)
    const [isMobile] = useMediaQuery(["(max-width: 479px)"])

    useEffect(() => {

        var top_location = ContainerRef.current?.getBoundingClientRect().top
        if(typeof top_location == "number"){
            if(isMobile){
                var cur_position = (min_top_mob - top_location)/(min_top_mob - max_top_mob)
                var _opacity = 0 + (cur_position * 1)
                var _y = 50 - (cur_position * 50)
                var _scale_x = 0.5 + (cur_position * 0.5)
                var _scale_y = 0.95 + (cur_position * 0.05)
                set_opacity(_opacity)
                set_y(_y)
                set_scale_x(_scale_x)
                set_scale_y(_scale_y)
            }else{
                var cur_position = (min_top_desktop - top_location)/(min_top_desktop - max_top_desktop)
                var _opacity = 0 + (cur_position * 1)
                var _y = 50 - (cur_position * 50)
                var _scale_x = 0.5 + (cur_position * 0.5)
                var _scale_y = 0.95 + (cur_position * 0.05)
                set_opacity(_opacity)
                set_y(_y)
                set_scale_x(_scale_x)
                set_scale_y(_scale_y)
              }
        }

      return () => {
        
      }
    }, [,ContainerRef.current, scrollY])
    


  return (
    <Flex transition="transform 0.4 ease-in" style={{transformStyle: "preserve-3d"}} as={motion.div} animate={{
        transform: `translate3d(0px, ${y}, 0px) scale3d(${scale_x}, ${scale_y}, 1)`,
        opacity: opacity
    }} ref={ContainerRef} {...FlexColCenterStart} borderRadius="18px"
        boxShadow={"0px 100px 80px rgba(3, 3, 6, 0.07), 0px 41.7776px 33.4221px rgba(3, 3, 6, 0.0503198), 0px 22.3363px 17.869px rgba(3, 3, 6, 0.0417275), 0px 12.5216px 10.0172px rgba(3, 3, 6, 0.035), 0px 6.6501px 5.32008px rgba(3, 3, 6, 0.0282725), 0px 2.76726px 2.21381px rgba(3, 3, 6, 0.0196802)"}
        bg="#030422"
        display={"flex"}
        height="380px"
        width="100%"
        marginTop="20px"
        border="1px solid #2b335a"
        padding={"16px 22px 16px 22px"}
        color="#717aa8"
        className="min-code-content"

    >
        <chakra.p width="100%" display="flex" flexDir={"row"} alignItems="center" justifyContent={"center"} color="#717aa8" textAlign={"center"}>
            HTTP 200
        </chakra.p>
        <Flex {...FlexColStartStart} marginTop="16px" width="100%" >
            {json_string.map((line, index) => {
                return(
                    <chakra.p textAlign={"left"} dangerouslySetInnerHTML={{__html: hljs.highlight("json",line).value}} ></chakra.p>
                )
            })}
        </Flex>
    </Flex>
  )
}

export default FakeResponse