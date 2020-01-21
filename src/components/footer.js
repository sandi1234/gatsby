import React from "react"
import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components'




const CustomContainer = styled(Container)`
    // background-color: black;
    color: white;
`
const FooterText = styled.div`
    padding: 20px 0px 20px 0px;
    text-align: center;
`


const Footer = () => {
    return (
        <CustomContainer className="p-0 bg-secondary" fluid>
            <Container fluid className="bg-dark">
            <Container>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <h1>Our Mission</h1>
                    <p>
                    Inspiring and Empowering each Musoga for both personal and Regional development.
                    </p>
                </Col>
            </Row> 
            </Container>  
            </Container>

        <FooterText>
            <span>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
        </FooterText>
      </CustomContainer>
)

}


export default Footer
