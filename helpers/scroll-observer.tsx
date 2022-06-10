import React, { ReactNode, useCallback } from 'react'

interface ScrollValue {
    scrollY: number
}

export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 })

function ScrollObserver({children}: {children: ReactNode}) {
    const [scrollY, setScrollY] = React.useState(0)
    
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
        {children}
    </ScrollContext.Provider>
  )
}

export default ScrollObserver