import Image from 'next/image'
import {chakra, Flex, useMediaQuery} from "@chakra-ui/react"
import { isValidMotionProp, motion } from 'framer-motion'
import { FlexColCenterCenter, FlexColCenterStart, FlexRowCenterCenter } from '../utils/FlexConfigs';



const ChakraDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children' || prop == 'transition',
  });


function ChipAnimation() {

    const [isSm,isMd, isLg] = useMediaQuery(["(max-width: 479px)","(max-width: 768px)", "min-width: 991px"])

  return (
    <Flex overflowX="hidden" overflowY="scroll" width="100vw" height="100%" position="relative" bg="#030527" {...FlexColCenterStart}  >
      
      <Flex overflow="hidden"  
      
      position={"relative"}
      height="auto"  {...FlexRowCenterCenter} >

      {isLg && <ChakraDiv width="270px" left="406px" animate={{
        y: ["-100%", "0%", "0%", "0%"]
      }} transition={{
        duration: 6,
        delay: 0,
        repeat: Infinity,
        ease: [.31, -0.01, .55, .99],

      }} position="absolute" zIndex={3} top="66px"   height="260px" backgroundImage={"linear-gradient(0deg, #23f0c3, rgba(35, 240, 195, .23) 57%, rgba(35, 240, 195, 0));"} ></ChakraDiv>}


          <Flex  width="859px" height="477px" zIndex={4} >
            <Image src="/assets/desktop/circuit_top.png" width="859px" height="477px" />
          </Flex>
          
          <Flex position="absolute" top="0px" width="859px" height="477px" zIndex={3} >
          <Image src="/assets/desktop/circuit_top_highlight.png"  width="859px" height="477px"  />
          </Flex>

          <Flex width="100%" height="100%" position="absolute" top="0px" left="0px" bg="#13243a" ></Flex>
        
      </Flex>



      <Flex 
      alignItems={"center"}
      justifyContent="center"
      boxShadow={"0px 0px 74px rgb(6 255 255 / 32%), 0px 33px 54px rgb(0 0 0 / 17%), 0px 13.7866px 22.5599px rgb(0 0 0 / 12%), 0px 7.37098px 12.0616px rgb(0 0 0 / 10%), 0px 4.13211px 6.76164px rgb(0 0 0 / 9%), 0px 2.19453px 3.59106px rgb(0 0 0 / 7%), 0px 0.913195px 1.49432px rgb(0 0 0 / 5%)"}
      width={{
        base: "218px",
        lg: "220px"
      }} 
      zIndex={6}
      height={{
        base: "218px",
        lg: "220px"
      }} 
      overflow="hidden" 
      position="absolute" 
      top="40%" 
      borderRadius = "2px"   
      >

        <motion.div style={{position: "absolute", width:"150%" , height:"150%",  
        backgroundImage: "linear-gradient(45deg,#64b2a1 20%,#37527f 50%,#64b3a1 82%)"}} animate={{
          rotate: [0, 260]
        }} transition={{
          duration: 3,
        }} ></motion.div>
        <Flex 
          zIndex={6} 
          width="218px" 
          height="218px"
          {...FlexColCenterCenter}
          borderRadius= "2px"
          backgroundImage={"url('/assets/desktop/background-noise.png'),linear-gradient(180deg,#192043,#14182e)"}
          >
            <motion.div transition={{
              duration: 6,
            }} animate={{opacity: isLg ?  [0.1, 1] : 0.1}} style={{width: "164px", height: "153px"}} >
            <Image src="/assets/desktop/chip_logo.png" width="164px" height="153px" />
            </motion.div>
            
            <chakra.h3 opacity={isLg ? 1 : 0.1} color="white" fontSize="36px" fontWeight="500"  >
                  WorkOS
            </chakra.h3>
          </Flex>

      </Flex>


      <Flex position="relative" 
      width="130%" 
      borderTopLeftRadius={"50%"} 
      borderTopRightRadius="50%" 
      zIndex={4} marginTop="-32px" 
      marginLeft="-15px" 
      paddingTop="5px" 
      paddingBottom="120px" 
      borderTop="1px solid rgba(142,255,230,.36)"
      bg="#0d102f"
      boxShadow={"0 0 92px -2px rgb(36 234 217 / 21%), 0 0 30px 0 hsl(0deg 0% 100% / 18%)"}
      opacity="1"
      overflow="hidden"
      >

          <Flex  overflow={"hidden"}  height="auto" width="100%" position="relative" {...FlexColCenterCenter} >

            
            <Flex overflow="hidden" marginLeft="-4px" width="100%" position="relative" {...FlexColCenterCenter} >
              <Image src="/assets/desktop/circuit_bottom.png" style={{
                zIndex: 4
              }} width="728px" height="234px" />
              {/* looping */}
              <Flex position={"absolute"} zIndex="3" top="0" left={{lg: "29.5%", base: "15%", md: "15%"}}  >
                <Image style={{
                  zIndex: 3,
                  position: "absolute",
                }} src="/assets/desktop/circuit_bottom_highlight.png" width="728px" height="234px" />
              </Flex>
              
              {/* looper */}
              {isLg && <ChakraDiv animate={{
                y: ["0%", "400%", "400%", "400%"]
              }} transition={{
                duration: 6,
                delay: 1.15,
                repeat: Infinity,
                ease: [.31, -0.01, .55, .99]
              }} position={"absolute"} zIndex={2} width="728px" top="-24%" left="29.5%"  height="30%" 
              backgroundImage={"linear-gradient(0deg, #23f0c3, rgba(35, 240, 195, .23) 57%, rgba(35, 240, 195, 0));"} 
              />}

              <Flex position="absolute" top="0" left="0" bg="#13243a" zIndex={1} ></Flex>
            </Flex>
          </Flex>


      </Flex>
      
      {isLg && <Flex {...FlexColCenterStart} maxWidth="930px" zIndex={4} marginTop="-200px" position="relative" >
              <Flex position="relative" height="56px" marginBottom="16px"  >
                <Flex {...FlexRowCenterCenter} marginBottom="10px" >
                  {["okta", "azure", "google", "saml", "onelogin", "adfs"].map((item, index) => (
                    <Flex {...FlexColCenterCenter} key={index} margin="0px 6px" bg="#1a1736" boxShadow="inset 0 0 0 1px rgb(228 239 244 / 6%)" padding="0px 26px" borderRadius="100px" >
                      <Image src={`/svgs/CompanyLogos/${item}.svg`} width="74px" height="56px"  />
                    </Flex>
                  ))}
                </Flex>
                
              </Flex>
              <Flex position="relative" height="56px" marginBottom="16px"  >
                <Flex {...FlexRowCenterCenter} marginBottom="10px" >
                  {["bamboohr", "jumpcloud", "pingidentity", "openid", "duo" ].map((item, index) => (
                    <Flex {...FlexColCenterCenter} key={index} margin="0px 6px" bg="#1a1736" boxShadow="inset 0 0 0 1px rgb(228 239 244 / 6%)" padding="0px 26px" borderRadius="100px" >
                      <Image src={`/svgs/CompanyLogos/${item}.svg`} width="74px" height="56px"  />
                    </Flex>
                  ))}
                </Flex>
                
              </Flex>
       </Flex>}
     
    </Flex>
  )
}

export default ChipAnimation