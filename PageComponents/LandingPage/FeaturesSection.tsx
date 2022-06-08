import { Grid, chakra } from '@chakra-ui/react'
import React from 'react'
import FeatureContainer, { feature_images } from '../../components/Cards/FeatureContainer'

interface content {
    heading: string,
    content: string,
    src: feature_images
}

const d: content[] = [
    {
        heading: "SAML",
        content: "Support all SAML-based providers out-of-the-box",
        src: "saml"
    },{
        heading: "OpenID Connect",
        content: "Utilize OpenID standard-based authentication",
        src: "openid_connect"
    },
    {
        heading: "Email magic links",
        content: "Use unlimited password authentication through email",
        src: "magic_links"
    },
    {
        heading: "OAuth",
        content: "Sign in with third-party providers like Google and Microsoft",
        src: "oauth"
    }
]

function FeaturesSection() {
  return (
    <Grid padding={["64px 0px ", " 64px 0px", " 64px 0px", " 64px 28px"]} paddingBottom="64px" templateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]} templateRows={["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} columnGap={["0px", "0px", "0px", "44px"]} rowGap="56px" >
        {d.map((item, index) => {
            return (
                <FeatureContainer key={index} src={item.src} heading={item.heading} content={item.content}/>
            )})}
    </Grid>
  )
}

export default FeaturesSection