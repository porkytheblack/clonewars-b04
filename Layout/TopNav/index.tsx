import { Flex, chakra, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import BasicDropdownButton from '../../components/Buttons/BasicDropdownButton'
import BasicRoundOutlinedButton from '../../components/Buttons/BasicRoundOutlinedButton'
import Logo from '../../components/Buttons/Logo'
import MobileHamburgerButton from '../../components/Buttons/MobileHamburgerButton'
import { FlexRowCenterAround, FlexRowCenterBetween, FlexRowCenterEnd, FlexRowCenterStart } from '../../utils/FlexConfigs'
import MobileDropdown from './MobileDropDown'

const devs =  [
  {
      src: "/svgs/icons/docs.svg",
      desc: "Documentation",
      heading: ''
  },
  {
      src: "/svgs/icons/changelog.svg",
      desc: "ChangeLog",
      heading: ''
  },
  {
      src: "/svgs/icons/open_source.svg",
      desc: "Open Source",
      heading: ''
  },
  {
      src: "/svgs/icons/api_src.svg",
      desc: "Api Status",
      heading: ''
  },
]

const features = [
  {
  heading: "Enterprise SSO",
  src: "/svgs/icons/enterprise_sso.svg",
  desc: "Unified intergration for any identity provider"
  },
  {
      heading: "Directory Sync",
      src: "/svgs/icons/directory_sync.svg",
      desc: "Real-time updates from co-operate user directories"
  },
  {
      heading: "Admin Portal",
      src: "/svgs/icons/admin_portal.svg",
      desc: "Self-service onboarding for IT admins"
  }
]

const more = [
  {
      src: "/svgs/icons/blog.svg",
      desc: "Blog",
      heading: ''
  },
  {
      src: "/svgs/icons/podcast.svg",
      desc: "Podcast",
      heading: ''
  },
  {
      src: "/svgs/icons/customers.svg",
      desc: "Customers",
      heading: ''
  },
  {
      src: "/svgs/icons/company.svg",
      desc: "Company",
      heading: ''
  },
  {
      src: "/svgs/icons/careers.svg",
      desc: "Careers",
      heading: ''
  },
  {
      src: "/svgs/icons/security.svg",
      desc: "Security",
      heading: ''
  },
  {
      src: "/svgs/icons/support.svg",
      desc: "Support",
      heading: ''
  },
  {
      src: "/svgs/icons/pricing.svg",
      desc: "Pricing",
      heading: ''
  }
]

function TopNav() {
  const [drop_down_open, set_dropdown_open] = useState<boolean>(false)
  const [isMobile] = useMediaQuery(["(max-width: 768px)"])
  return (
    <Flex {...FlexRowCenterBetween} zIndex={5} width="100vw" position="relative" padding={["18px 28px", "18px 28px", "18px 28px", "18px 28px", "24px 28px"]} >
        <Logo/>
        {isMobile && <MobileHamburgerButton onClick={()=>{set_dropdown_open(true)}} />}
        {(isMobile && drop_down_open)&&<MobileDropdown close={()=>{set_dropdown_open(false)}} />}
        {!isMobile && <Flex {...FlexRowCenterEnd} width="80%"   >
          <BasicDropdownButton heading='Features' content={features}  expanded={true} />
          <BasicDropdownButton heading='Developers' content={devs}  expanded={false} />
          <BasicDropdownButton heading='Resources' content={more}  expanded={false} />
          <BasicRoundOutlinedButton>
            Sign In
          </BasicRoundOutlinedButton>
        </Flex>}
    </Flex>
  )
}

export default TopNav