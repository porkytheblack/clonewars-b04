import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex,chakra, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FlexRowCenterAround } from '../../utils/FlexConfigs'
import FeaturesButton from './FeaturesButton'
import FeaturesButton2 from './FeaturesButton2'

interface a {
    src: string;
    heading: string;
    desc: string;
}




function BasicDropdownButton({heading, content, expanded}: {heading: string, content: a[] , expanded: boolean}) {
    const [dropdown, set_dropdown] = useState<boolean>(false)
    const t = () =>{
        set_dropdown(!dropdown)
    }
    return (
        
    <Flex position="relative"  >
        <Flex {...FlexRowCenterAround} cursor="pointer" >
        <chakra.a onClick={t} fontSize="14px" marginLeft={20} height={"24px"} textDecor="none" >
            {heading}
        </chakra.a>
       
            <ChevronDownIcon fontSize={"16px"} />
        
        </Flex>
        {dropdown && <Grid boxShadow={
            "0px 51px 80px rgb(22 26 41 / 2%), 0px 15.375px 24.1177px rgb(22 26 41 / 3%), 0px 6.38599px 10.0172px rgb(22 26 41 / 4%), 0px 0.5px 3.62304px rgb(22 26 41 / 7%)"
        } templateRows={`repeat(${content.length}, auto)`} 
        bg="white" zIndex="20"  rowGap="5px"  width="400px"
        position="absolute"
        top="140%"
        left="-60%"
        >
                <chakra.div width="20px" height="20px" position="absolute" top="0px" left="50%" bg="white" transform="rotate(45deg) translate(-50%,0)" backgroundImage={"linear-gradient(135deg,#e8eaed,rgba(232,234,237,0) 40%)"} ></chakra.div>
                {expanded && <>
                    {content.map((item, index)=>(
                        <GridItem zIndex={22} key={index} >
                            <FeaturesButton src={item.src} heading={item.heading} desc={item.desc} />
                        </GridItem>
                    ))}
                </>}

                {!expanded && <>
                    {content.map((item, index)=>(
                        <GridItem zIndex={22} key={index} >
                            <FeaturesButton2 src={item.src} >
                                {item.desc}
                            </FeaturesButton2>
                        </GridItem>
                    ))}
                </>}
       
       
        </Grid>}
    </Flex>
  )
}

export default BasicDropdownButton