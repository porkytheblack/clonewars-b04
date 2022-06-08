import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexColCenterStart, FlexColStartStart } from '../../utils/FlexConfigs'
const hljs = require("highlight.js")

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
  return (
    <Flex {...FlexColCenterStart} borderRadius="18px"
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