import React from "react"
import styled from 'styled-components';
import {Link } from "gatsby"
import {Container, Row, Col } from "react-bootstrap"


const PrimaryTest = styled.div`
    margin-top: -100px;
    height: 100vh;
`;

const MainContentWrapper = styled(Container)`
  padding-top: 20%;
`;

const ButtonLinkIntro = styled(Link)`
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

const IntroLineH1 = styled.h1`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 5rem;
font-style: normal;
font-weight: 900;
letter-spacing: -0.03125em;
line-height: 1.06;
color: white;
`

const IntroLineH2 = styled.h2`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3.5rem;
font-style: normal;
font-weight: 900;
letter-spacing: -0.03125em;
line-height: 1.06;
color: white;
`


const TopContent = (props) => {
   const  { headlineH1, headlineH2, btnText, btnUrl, topContentBgImage } = props;

  return (
        <PrimaryTest style={{
            backgroundImage: `url(${topContentBgImage})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center', 
            backgroundSize: "cover",
            }}
            >
            <MainContentWrapper>
           <Row>
              <Col lg={12} md={12} sm={12}>
                  <IntroLineH1 className="text-uppercase text-center">{headlineH1}</IntroLineH1>     
                  <IntroLineH2 className="text-uppercase text-center mb-5">{headlineH2}</IntroLineH2>     
                  <Row className="justify-content-md-center">
                      <Col lg={6} md={6} sm={6} className="text-center">
                          <ButtonLinkIntro to={btnUrl} className="text-uppercase"  variant="primary" size="lg" block>
                          {btnText}
                          
                          </ButtonLinkIntro>
                      </Col>                 
                  </Row>
              </Col>
        </Row>
    </MainContentWrapper>
  </PrimaryTest>
  )

}
export default TopContent
