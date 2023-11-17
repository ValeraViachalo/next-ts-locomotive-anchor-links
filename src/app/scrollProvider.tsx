// ScrollProvider.tsx
import React, { useRef, useEffect, ReactNode } from 'react'
import { ScrollContext } from './scrollContext'

// Define the type of the props
type ScrollProviderProps = {
  children: ReactNode // children elements
}

type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void

// Create a new component that takes children as a prop
export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  // Create a ref for the LocomotiveScroll instance
  const locomotiveScroll = useRef<any>(null)

  // Use the useEffect hook to import the LocomotiveScroll library and create a new instance
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      locomotiveScroll.current = new LocomotiveScroll({
        lenisOptions: {
          duration: 0.7,
          lerp: 0.1,
          smoothTouch: true,
          smoothWheel: true,
          wheelMultiplier: 2,
        }
      })
    })()
  }, [])


  // create a easing effects, but you can choose one from Easings.net.
  // https://easings.net/
  function easeInOutExpo(x: number): number {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
    }

  // Create a function that uses the LocomotiveScroll instance to scroll to a specific element
  const scrollTo: ScrollToFunction = (e, currentLink) => {
    console.log(currentLink) // log the current link
    e.preventDefault() // prevent the default action
    locomotiveScroll.current.scrollTo(currentLink, { // use the LocomotiveScroll instance to scroll to the current link
      duration: 2, // duration of the scroll animation
      offset: -100, // offset from the top of the element
      easing: (x: number) => easeInOutExpo(x),
    })
  }

  // Return the ScrollContext.Provider component with the scrollTo function as its value
  return (
    <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
  )
}
