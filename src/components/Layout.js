import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const AppStyles = styled.main`
`

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <AppStyles>
      {children}
    </AppStyles>
  )
}
