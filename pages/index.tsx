import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FeaturesSection from '../PageComponents/LandingPage/FeaturesSection'
import FrictionlessSection from '../PageComponents/LandingPage/FrictionlessSection'
import HeaderHeroSection from '../PageComponents/LandingPage/HeaderHeroSection'
import MoreDetailsSection from '../PageComponents/LandingPage/MoreDetailsSection'
import Section1 from '../PageComponents/LandingPage/Section1'
import SyncSection from '../PageComponents/LandingPage/SyncSection'
import WhyUsSection from '../PageComponents/LandingPage/WhyUsSection'
import styles from '../styles/Home.module.css'
import { FlexColCenterStart } from '../utils/FlexConfigs'

const Home: NextPage = () => {
  return (
    <Flex {...FlexColCenterStart} width="100vw" height="100%" >
        <HeaderHeroSection/>
        <Section1/>
        <FeaturesSection/>
        <MoreDetailsSection/>
        <SyncSection/>
        <FrictionlessSection/>
        <WhyUsSection/>
    </Flex> 
  )
}

export default Home
