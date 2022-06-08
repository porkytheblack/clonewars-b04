import {extendTheme, Theme, type ThemeConfig} from "@chakra-ui/react"
import {createBreakpoints, mode} from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
	base: "0px",
	xs: "319px",
	sm: "479px",
	md: "767px",
	lg: "991px",
	xl: "1200px",
	'2xl': "1536px"
})

export const theme = extendTheme({
	initialColorMode: "white",
	useSystemColorMode: false,
	colors: {
		transparent: "transparent",
		black: "#000",
		white: "#f4f4f4",
		blue: "#0a84ff"
	},
	breakpoints,
	fonts: {
		heading: `"WorkOS-Medium", sans-serif`,
		body: `"WorkOS-Regular", sans-serif`
	},
    components : {
        Text: {
            variants : {
                't-medium': {
                    fontFamily: `"WorkOS-Medium", sans-serif`,
                },
                't-regular': {
                    fontFamily: `"WorkOS-Regular", sans-serif`,
                }
            }
        }
    },
	styles: {
		global: (props: any)=>({
			body: {
				bg: mode("white", "white")(props),
				overflowX: "hidden",
				overflowY: "scroll",
				
			}
		})
	}
})



