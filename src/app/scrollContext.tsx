// ScrollContext.tsx
import React, { createContext, ReactNode } from 'react'

// Define the type of the scrollTo function
type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void

// Create a new context with a default value of an empty function
export const ScrollContext = createContext<ScrollToFunction>(() => {})
