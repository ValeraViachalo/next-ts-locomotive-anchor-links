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
          el: document.querySelector('#js-scroll'), // the element to apply the scroll (optional write your own, because with default window wrapper could be issues)
          smooth: true, // enable smooth scrolling
          duration: 0.7, // duration of the scroll animation
          smoothTouch: true, // enable smooth touch scrolling
          smoothWheel: true // enable smooth wheel scrolling
      })
    })()
  }, [])

  // Create a function that uses the LocomotiveScroll instance to scroll to a specific element
  const scrollTo: ScrollToFunction = (e, currentLink) => {
    console.log(currentLink) // log the current link
    e.preventDefault() // prevent the default action
    locomotiveScroll.current.scrollTo(currentLink, { // use the LocomotiveScroll instance to scroll to the current link
      duration: 2.7, // duration of the scroll animation
      offset: -100 // offset from the top of the element
    })
  }

  // Return the ScrollContext.Provider component with the scrollTo function as its value
  return (
    <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
  )
}
