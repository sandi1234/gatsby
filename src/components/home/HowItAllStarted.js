import React from "react"
import {Link } from "gatsby"
import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components';

const ContentWraper = styled.div`
text-align: center;
background-color: rgba(244, 183, 67, 0.5);
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`

const PrimaryTest = styled.div`
// margin-top: -100px;
// background-color: rgba(0, 0, 0, 0.2);
height: 30vh;
position: relative;
`;

const ButtonLinkIntro = styled(Link)`
margin-top: 130px;
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 100%;
background-color: transparent;
border: 1px solid white;
border-radius: 5px;
padding: 15px 30px 15px 30px;
text-decoration: none;
&:hover{
    color: ghostwhite;
    background-color: rgba(0, 0, 0, 0.3);
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`




const HowItAllStarted = (props) => {
    const {btnText, btnUrl, bgImage } = props;
  return (
  <PrimaryTest
  style={{
    backgroundImage: `url(${bgImage})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', 
    backgroundSize: "cover",
  }}
  >
  <ContentWraper>
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6} md={6} sm={6}>
            <ButtonLinkIntro to={btnUrl} className="text-uppercase"  variant="primary" size="lg" block>
              {btnText}
            </ButtonLinkIntro>
        </Col>
      </Row>
    </Container>

  </ContentWraper>
  </PrimaryTest>

)
}



export default HowItAllStarted
