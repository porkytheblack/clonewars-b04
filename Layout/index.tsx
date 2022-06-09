import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import ScrollObserver from '../helpers/scroll-observer'
import { FlexColCenterStart } from '../utils/FlexConfigs'
import Footer from './Footer'
import TopNav from './TopNav'

function Layout({children}: {children: ReactNode}) {
  return (
      <ScrollObserver>
        <Flex {...FlexColCenterStart} >
          <TopNav/>
        {children}
        <Footer/>
        </Flex>
            
      </ScrollObserver>
  )
}

export default Layout