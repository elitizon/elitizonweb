import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Header } from "./Header"
import { MenuHeader } from "./MenuHeader"

const AppStyles = styled.main`
`



export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <AppStyles>
       <MenuHeader/>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  )
}
