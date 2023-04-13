import React, { useEffect } from "react"
import { loadAxeptio } from "../axeptio"

const MainLayout = ({ children }) => {
  useEffect(() => {
    loadAxeptio()
  }, [])

  return <div>{children}</div>
}

export default MainLayout
