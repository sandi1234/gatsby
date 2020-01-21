import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import bundaLogo from '../images/bunda-logo.png';
import styled from 'styled-components';


import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap"

const Menu = styled(Navbar)`
  padding: 20px 0px 20px 0px;
  float: clear;
`

const CustomNavbar = () => {
  // console.log(pageInfo)
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(
    graphql`
      query OverlayMenu {
        menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              wordpress_children {
                title
                url
              }
            }
            name
          }
        }
      }
    }
  `);
  return (
    <>
      <Menu className="bg-transparent" expand="lg" id="site-navbar">
        <Container>
        <Link to="/" className="link-no-style">
          <Navbar.Brand>
            <img src={bundaLogo} alt="Bunda Logo" />
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
      {menu.items.map((item, i) => (
        <>
        {!item.wordpress_children ? (
              <Link key={i} to={item.url} activeClassName="nav-active">
          <Nav.Link as="span" eventKey="page-2">
            {item.title}
            </Nav.Link>
          </Link>
        ) 
        : 
          null}
          {item.wordpress_children ? (
            <>
              <NavDropdown title={item.title}  id="nav-dropdown">
                {item.wordpress_children.map((child, iChild) => (
                  <NavDropdown.Item key={iChild} eventKey={iChild}>
                   <Link key={iChild} to={child.url} activeClassName="nav-active">
                      {child.title}
                    </Link>    
              </NavDropdown.Item>
                ))}
                </NavDropdown>
            </>
          ) : null}
        </>
      ))}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Menu>
    </>
  )
}

export default CustomNavbar
