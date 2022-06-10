import React, { useEffect, useRef, useState } from 'react'
import {motion, isValidMotionProp} from "framer-motion"
import {chakra, Flex, Grid, GridItem} from "@chakra-ui/react"
import { FlexColCenterBetween, FlexColCenterCenter, FlexColCenterStart, FlexColStartCenter, FlexRowCenterCenter, FlexRowCenterStart } from '../../utils/FlexConfigs'
import Image from 'next/image'

const ChakraMotion = chakra(motion.div, 
        {
            shouldForwardProp: prop => isValidMotionProp(prop) || prop == "children"
        }
    )

interface trans {
    transform: string,
    opacity: string
}

const _active = "translate3d(0%, 0, 0px)"
const next = "translate3d(15%, 0, -100px)"
const next_to_next = "translate3d(30%, 0px, -250px)"
const prev = "translate3d(-15%, 0px, -100px)"
const prev_to_prev = "translate3d(-30%, 0px, -250px)"

const bottom_active: trans = {
    transform: "translate3d(0%, 0, 0px)",
    opacity: "1"
}

const bottom_next: trans = {
    transform: "translate3d(100%, 0, -100px)",
    opacity: "0.8"
}

const bottom_next_next: trans = {
    transform: "translate3d(200%, 0, -250px)",
    opacity: "0.6"
}

const bottom_prev: trans = {
    transform: "translate3d(-100%, 0px, -100px)",
    opacity: "0.8"
}

const bottom_prev_prev: trans = {
    transform: "translate3d(-200%, 0px, -100px)",
    opacity: "0.6"
}


interface cnt {
    color: string,
    quote: string,
    img: string,
    name: string,
    role: string,
    icon: string,
    key: number
}

const Content: cnt[] = [
    {
        color: "black",
        quote: `“When I asked the team, how was the experience with WorkOS? They were just like, this is incredible.”`,
        icon: "planet_scale_logo",
        img: "sam_lambert",
        name: "Sam Lambert",
        role: "ceo",
        key: 1
    },
    {
        color: "hsla(0, 0.00%, 0.00%, 1.00)",
        quote: `“I think we could have done even more business if we had partnered with WorkOS earlier, but it's been incredibly well received.”`,
        icon: "vercel_logo",
        name: "Guiellermo Rouch",
        role: "Founder & CEO",
        img: "guiellermo_rouch",
        key: 2
    },
    {
        color: "#4353ff",
        quote: "“Integrating was straightforward, pleasant, and fun. The team answered my questions quickly, and went above and beyond to help when I ran into issues.”",
        icon: "webflow_logo",
        img: "bryan_chou",
        name: "Bryant Chou",
        role: "Co-Founder & CTO",
        key: 3
    },
    {
        color: "#7026b9",
        quote: `“By using WorkOS, our engineering team was able to quickly add a whole host of SAML integrations with self-guided onboarding for our customers. It’s been a huge win for us.”`,
        name: "Joel Smith",
        icon: "gatsby",
        img: "joel_smith",
        role: "Director of Product Management",
        key: 4
    },
    {
        color: "#608bdb",
        quote: `“Using WorkOS in GraphCDN allowed us to focus on building core features to our product while being able to serve enterprise customers.”`,
        icon: "graphcdn",
        img: "max_stoiber",
        name: "Max Stoiber",
        role: "Founder",
        key: 5
    }
]









function CarouselSection() {

    const timeRef = useRef<any>(null)
    const [active, set_active] = useState<number>(1)

    const reset_timer = () =>{
    
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
    }

    useEffect(()=>{
        reset_timer()
        timeRef.current = setTimeout(()=>{
            var n = active + 1
            set_active((cur) => cur == 5 ? 1 : n)
            console.log("Current element is", active)
        }, 5000)
        return()=>{
            reset_timer()
        }
    }, [, active])


   
            
    const me = (k: number): string => {
        if(active == k){
            return _active
        }else if(active == 1){
            if(k == 2){
                return next
            }else if(k == 3){
                return next_to_next
            }else if(k == 5){
                return  prev
            }else {
                return prev_to_prev
            }
        }else if(active == 2){
            if(k == 3) {
                return next;
            }else if(k == 4){
                return next_to_next
            }else if(k == 1){
                return prev
            }else{
                return prev_to_prev
            }
        }else if(active == 3){
            if(k == 4){
                return next
            }else if(k == 5){
                return next_to_next
            }else if(k ==2){
                return prev
            }else{
                return prev_to_prev
            }
        }else if(active == 4){
            if(k ==5){
                return next
            }else if( k == 1){
                return next_to_next
            }else if( k == 3){
                return prev
            }else{
                return prev_to_prev
            }
        }else if(active == 5){
            if(k == 1){
                return next
            }else if(k == 2){
                return next_to_next
            }else if(k == 4){
                return prev
            }else {
                return prev_to_prev
            }
        }else{
            return "translate3(0px , 0px -250px)"
        }
    }

    const me_bottom  = (k: number): trans => {
        if(active == k){
            return bottom_active
        }else if(active == 1){
            if(k == 2){
                return bottom_next
            }else if(k == 3){
                return bottom_next_next
            }else if(k == 5){
                return  bottom_prev
            }else {
                return bottom_prev_prev
            }
        }else if(active == 2){
            if(k == 3) {
                return bottom_next;
            }else if(k == 4){
                return bottom_next_next
            }else if(k == 1){
                return bottom_prev
            }else{
                return bottom_prev_prev
            }
        }else if(active == 3){
            if(k == 4){
                return bottom_next
            }else if(k == 5){
                return bottom_next_next
            }else if(k ==2){
                return bottom_prev
            }else{
                return bottom_prev_prev
            }
        }else if(active == 4){
            if(k ==5){
                return  bottom_next
            }else if( k == 1){
                return bottom_next_next
            }else if( k == 3){
                return bottom_prev
            }else{
                return bottom_prev_prev
            }
        }else if(active == 5){
            if(k == 1){
                return bottom_next
            }else if(k == 2){
                return bottom_next_next
            }else if(k == 4){
                return bottom_prev
            }else {
                return bottom_prev_prev
            }
        }else{
            return {
                transform: "translate3d(0, 0, 0)",
                opacity: "0"
            }
        }
    }


  return (
    <Grid templateRows={{base: "auto auto auto"}}  rowGap={"48px"} {...FlexColCenterStart} width="100vw" overflow="hidden"  >
        <GridItem {...FlexColCenterCenter} display="flex" width="100vw" >
            <chakra.h4 color="#656B8A" textTransform={"uppercase"} fontSize="20px" >
                powered by workos
            </chakra.h4>
        </GridItem>
        <GridItem height={{base: "465px"}} {...FlexRowCenterCenter} display="flex" style={{perspective: "1400px", transformStyle: "preserve-3d"}} position="relative" width="100vw" >
            {Content.map(({name, icon, img, quote, role, key, color})=>(

                                <ChakraMotion bg="white"  key={key} borderRadius="8px" 
                                position="absolute"
                                
                                boxShadow={"0px 51px 78px rgb(17 7 53 / 5%), 0px 21.3066px 35.4944px rgb(17 7 53 / 4%), 0px 11.3915px 18.9418px rgb(17 7 53 / 3%), 0px 6.38599px 9.8801px rgb(17 7 53 / 3%), 0px 3.39155px 4.58665px rgb(17 7 53 / 2%), 0px 1.4113px 1.55262px rgb(17 7 53 / 1%), inset 0px 1px 0px rgb(41 56 78 / 5%)"} 
                                overflow="hidden"
                                display="flex"
                                flexDir={"column"}
                                alignItems="center"
                                justifyContent={"flex-start"}
                                maxWidth="640px"
                                minWidth={"300px"}
                                width={{base: "80vw"}}
                                height="100%"
                                animate={{
                                    transform:  me(key),
                                }}
                                style={{
                                    transformStyle: "preserve-3d"
                                }}
                                >
                                    <chakra.div width="100%" height="4px" bg={color} ></chakra.div>
                                    <Grid templateRows={"auto auto auto auto"} padding={{base:"28px", md: "64px"}} rowGap="28px" width="100%" >
                                        <GridItem maxHeight={"26px"}   >
                                            <Image src={ icon !== "graphcdn" ? `/svgs/icons/${icon}.svg` : "/svgs/icons/graphcdn.png" }height={"40px"} width={"147px"} />
                                        </GridItem>
                                        <GridItem width="100%" >
                                            <chakra.h4 fontSize={{base: "20px", lg: "24px"}} fontWeight="500" letterSpacing={"-0.04em"} textAlign="left" >
                                                {quote}
                                            </chakra.h4>
                                        </GridItem>
                                        <GridItem width="100%" >
                                                <Flex width="100%" {...FlexRowCenterStart} >
                                                    <Flex overflow="hidden" width={{base:"40px", md: "64px"}} borderRadius="50%" height={{base:"40px", md: "64px" }}marginRight="12px"  >
                                                        <Image src={ img !== "sam_lambert" ? `/people/${img}.jpeg` : `/people/sam_lambert.jpg`} width="64px" height="64px" />
                                                    </Flex>
                                                    <Flex width="100%" height={{base: "40px", md: "64px"}}  {...FlexColStartCenter} >
                                                        <chakra.p textTransform={"capitalize"} color="#656b8a">
                                                           {name}
                                                        </chakra.p>
                                                        <chakra.p textTransform={"uppercase"}  color="#8f96bd" >
                                                            {role}
                                                        </chakra.p>
                                                    </Flex>
                                                </Flex>
                                        </GridItem>
                                    </Grid>
                                </ChakraMotion>





            ))}
            
        </GridItem>
        <GridItem width="100vw" display={"flex"} height="300px" {...FlexRowCenterCenter} style={{perspective: "1400px", transformStyle: "preserve-3d"}}  >
                {Content.map(({icon, color, key}, index)=>(
                    <ChakraMotion 
                        animate={{
                            transform: me_bottom(key).transform,
                            opacity: me_bottom(key).opacity
                        }}
                        position="absolute"
                        top="0px"
                        key={index}
                    >
                        <Flex {...FlexColCenterBetween} padding={"16px"} margin="0px 25px" width="auto" height="auto"   >
                            <Flex padding="10px" >
                                <Image src={ icon !== "graphcdn" ? `/svgs/icons/${icon}.svg` : "/svgs/icons/graphcdn.png" }height={"40px"} width={"147px"} />
                            </Flex>
                            {active == key  && <chakra.div width="100%" height="4px" bg={color} ></chakra.div>}
                        </Flex>
                    </ChakraMotion>
                ))}
        </GridItem>
    </Grid>
  )
}

export default CarouselSection