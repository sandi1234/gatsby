import React from "react"
import styled from 'styled-components';
import { Container} from "react-bootstrap"
import Navbar from "./navBar"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"

// Add all icons to the library so you can use it in your page
library.add(fas)

// const ContainerFullWidth = styled(Container)`

// `

const Menu = styled(Navbar)``


const Layout = ({ children }) => {
  return (
      <>
        <Container fluid className="px-0 main">
          <Menu />
            {children}
        </Container>
          <Footer />
      </>
    )
  }

export default Layout
