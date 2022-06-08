import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import Image from "next/image"

export type company_svgs = "adfs" | "airbase" | "azure" | "bamboohr" | "drata" | "duo" | "google" | "hopin" | "jumpcloud" | "loom" | "okta" | "onelogin" | "openid" | "pingidentity" | "pitch" | "planet" | "saml" | "webflow" | "workos"

function SvgLogoComponent({name, custom_dimensions}: { custom_dimensions?: {width: number, height: number} ,name: company_svgs}) {


    return (
    <Flex maxWidth={["70px"]} maxHeight={["20px"]} >
        <Image src={`/svgs/CompanyLogos/${name}.svg`}  height={typeof custom_dimensions?.height !== "undefined"  ? custom_dimensions.height  :  30} width={ typeof custom_dimensions?.width !== "undefined" ? custom_dimensions.width : 70 }  alt={name} />
    </Flex>
    
  )
}

export default SvgLogoComponent

// const CustomImage = chakra(Image)
