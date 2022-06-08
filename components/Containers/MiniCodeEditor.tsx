import React, { useState } from 'react'
import {chakra, Flex, Grid, GridItem} from "@chakra-ui/react"
import { FlexColStartStart, FlexRowCenterStart } from '../../utils/FlexConfigs'
const hljs = require("highlight.js")

const languages: string [] = [
    "js",
    "ruby",
    "php",
    "go", 
    "python",
    "java",
    ".net",
    "curl"
]

interface WrittenCode {
    language: string,
    code: string[]
}

const test_code: WrittenCode[] = [
    {
        language: "js",
        code: [
            "// Get a user’s access token and",
            "// profile data from an Identity Provider",
            "",
            "import WorkOS from '@workos-inc/node';",
            "",
            "const workos = new WorkOS('sk_example_123456789');",
            "",
            "const profile = await workos.sso.getProfileAndToken({",
            "  code: '01E2RJ4C05B52KKZ8FSRDAP23J',",
            "  clientID: 'client_123456789',",
            "});"
        ]
    },
    {
        language: "ruby",
        code: [
            "# Get a user’s access token and",
            "# profile data from an Identity Provider",
            "",
            "require 'workos'",
            "",
            "WorkOS.key = 'sk_example_123456789'",
            "",
            "WorkOS::SSO.profile_and_token(",
            "  code: '01E2RJ4C05B52KKZ8FSRDAP23J',",
            "  client_id: 'client_123456789',",
            ")"
        ]
    },
    {
        language: "python",
        code: [
            "# Get a user’s access token and",
            "# profile data from an Identity Provider",
            "",
            "import workos",
            "from workos import client", 
            "",
            "workos.api_key = 'sk_example_123456789'",
            "workos.client_id = 'client_123456789'",
            "",
            "client.sso.get_profile_and_token('01E2RJ4C05B52KKZ8FSRDAP23J')"
        ]
    },
    {
        language: "php",
        code: [
            "// Get a user’s access token and",
            "// profile data from an Identity Provider",
            "",
            "$this->sso = new WorkOS\SSO();",
            "",
            `$profile = $this->sso->getProfileAndToken("01E2RJ4C05B52KKZ8FSRDAP23J");`
        ]
    },
    {
        language: "go",
        code: [
            "// Get a user’s access token and",
            "// Get a user’s access token and",
            "",
            `import "github.com/workos/workos-go/pkg/sso"`,
            "",
            `sso.SetAPIKey("sk_example_123456789")`,
            "",
            "sso.GetProfileAndToken(",
            "  context.Background(),",
            "  sso.GetProfileAndTokenOptions{",
            `    Code: "01E2RJ4C05B52KKZ8FSRDAP23J",`,
            "  }",
            ")"
        ]
    },{
        language: "java",
        code: [
            `// Get a user’s access token and`,
            `// profile data from an Identity Provider`,
            ``,
            `import com.workos.WorkOS;`,
            ``,
            `WorkOS workos = new WorkOS("sk_example_123456");`,
            `ProfileAndToken profileAndToken = workos.sso.getProfileAndToken("01E2RJ4C05B52KKZ8FSRDAP23J", "client_123456789");`,
            ``,
            `Profile profile = profileAndToken.profile;`,
        ]
    },
    {
        language: ".net",
        code: [
            `// Get a user’s access token and`,
            `// profile data from an Identity Provider`,
            ``,
            `WorkOS.SetApiKey("sk_example_123456");`,
            ``,
            `var ssoService = new SSOService();`,
            `var options = new GetProfileAndTokenOptions`,
            `{`,
            `   ClientId = "client_123456789",`,
            `   Code = "01E2RJ4C05B52KKZ8FSRDAP23J",`,
            `};`,
            ``,
            `var profile = await ssoService.GetProfileAndToken(options);`
        ]
    },
    {
        language: "curl",
        code: [
            `curl --request POST \ `,
            "  --url https://api.workos.com/sso/token? \ ",
            "  client_id=client_123456789& \"",
            "  client_secret=sk_example_123456789& \"",
            "  grant_type=authorization_code& \"",
            " code=01E2RJ4C05B52KKZ8FSRDAP23J" ,
        ]
    }
]

type langs = keyof typeof languages

function MiniCodeEditor() {
    const [activeLanguage, setActiveLanguage] = useState<number>(0)
  return (
    <chakra.div borderRadius="20px"
        boxShadow={"0px 100px 80px rgba(3, 3, 6, 0.07), 0px 41.7776px 33.4221px rgba(3, 3, 6, 0.0503198), 0px 22.3363px 17.869px rgba(3, 3, 6, 0.0417275), 0px 12.5216px 10.0172px rgba(3, 3, 6, 0.035), 0px 6.6501px 5.32008px rgba(3, 3, 6, 0.0282725), 0px 2.76726px 2.21381px rgba(3, 3, 6, 0.0196802)"}
        bg="#181b39"
        display={"flex"}
        flexDir="column"
        alignItems={"flex-start"}
        justifyContent="flex-start"
        height="380px"
        width="100%"
        
    >
         <Flex  {...FlexRowCenterStart} className="mini-code-tabs-scroll" overflow={"scroll"} width={{base:"90vw", lg:"100%", md: "100%"}} minWidth="0%"   >
            {languages.map((lang, index)=>(
                    <chakra.a key={index} display="flex" fontSize="14px" fontWeight="400"  textTransform={"uppercase"} color="#878ca6" onClick={()=>{setActiveLanguage(index)}} flexDir={"row"} alignItems="center" justifyContent={"centet"} role="button" padding="14px 20px" width="100%" height="100%" _active={{borderBottom: "3px solid #c5cae8"}}  >
                    {lang}
                    </chakra.a>
            ))}
        </Flex> 
        <Flex {...FlexColStartStart} paddingTop="28px" maxWidth={{base:"90vw", lg:"100%", md: "100%"}} className="min-code-content" paddingBottom="12px"  >
            {test_code[activeLanguage].code.map((code, index)=>(
                <Flex key={index} padding="1px 5px" width="100%" >
                    <chakra.span marginRight={"30px"} padding="0px 10px" className="hljs-comment" >
                        {index + 1}
                    </chakra.span>
                    <chakra.span color="#6b84ff" dangerouslySetInnerHTML={{__html: hljs.highlight("js",code).value }} >

                    </chakra.span>
                </Flex>
            ))}
            {Array(13 - test_code[activeLanguage].code.length).fill(0).map((_, index)=><Flex key={index} width="100%" padding="1px 5px" >
                <chakra.span marginRight={"30px"} padding="0px 10px" className="hljs-comment" >
                {index + 1 + test_code[activeLanguage].code.length}
                </chakra.span>
            </Flex> )}
        </Flex> 
    </chakra.div>
  )
}

export default MiniCodeEditor

