import Banner from 'componentes/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PaginaPadrao = ({children}) => {
  return (
    <main>
        <Banner />

        <Outlet />
        {children}
    </main>
  )
}

export default PaginaPadrao