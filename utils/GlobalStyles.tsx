import { Global } from '@emotion/react'
import React from 'react'

function CustomGlobalStyles() {
  return (
    <Global styles={`
          @font-face {
            font-family: 'WorkOS-Regular';
            src: url('/fonts/untitled-sans-regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'WorkOS-Medium';
            src: url('/fonts/untitled-sans-medium.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          
    `} />
  )
}

export default CustomGlobalStyles