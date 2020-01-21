import React from "react"
import { Row, Col, Container, Card, Button } from "react-bootstrap"
// import team from "../../images/users-solid.svg"
// import partner from "../../images/handshake-solid.svg"
import arrowDown from "../../images/arrow-down-solid.svg"
import styled from 'styled-components'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const ContainerWrapper = styled(Container)`
    text-align: center;
    // transform: rotate(20deg);

`


const SvgImageWrapper = styled.div`
    text-align: center;
`

const TestTrol = styled(FontAwesomeIcon)`
font-size: 200px;
color: blue;
`

const CustomCard = styled(Card)`
    margin: 80px 0px 20px 0px;
    height: 480px;
    // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    background-color: #d8ecf3;
    border: 0px solid black;
    &:hover{
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }

`

const SectionBackgroundColor = styled.div`
width: 80%;
margin:0 auto;
background-color: skyblue;
// transform: rotate(-20deg);
border: 0px solid green;
border-bottom-left-radius: 450px;
border-bottom-right-radius: 450px;
border-top-left-radius: 450px;
border-top-right-radius: 450px;

`

const NextSection = styled.div`
    text-align: center;
    margin: 50px 0px 0px 0px;
    padding-bottom: 10px;

`

const ArrowDown = styled.img`
    width: 3%;
    position: relative;
    animation-name: example;
    animation-duration: 1s;
    animation-iteration-count: infinite;

  @-webkit-keyframes example {
    0%   {top:0px;}
    75%  {top:10px;}
    100% {top:0px;}
  }

  @keyframes example {
    0%   {top:0px;}
    75%  {top:10px;}
    100% {top:0px;}
  }

 
  
`


const BelowMainContent = (props) => {
    const {
            teamTitle,  
            iconTeam, 
            preFix, 
            joinTeamText,  
            btnTeamText,
            iconPartner,
            partnerTitle,
            partnerText,
            btnPartnerText
        } = props;
    var faIconleft = iconTeam.replace("fas fa-", "")
    var faIconright = iconPartner.replace("fas fa-", "")

    return (
    <SectionBackgroundColor>
    <ContainerWrapper>
        <h1>Become A Part Of</h1>
        <h2>Something Great</h2>
      <Row>
        <Col lg={{span: 4, offset: 2 }} md={6} sm={12}>
        <CustomCard>
            <SvgImageWrapper>
                <TestTrol icon={[preFix, faIconleft]}/>
            </SvgImageWrapper>
            <Card.Body>
                <Card.Title>{teamTitle}</Card.Title>
                <Card.Text>
                    {joinTeamText}
                </Card.Text>
                    
                <Button variant="primary">{btnTeamText}</Button>
            </Card.Body>
        </CustomCard>
        </Col>
        <Col lg={4} md={6} sm={12}>
        <CustomCard>
        <SvgImageWrapper>
                <TestTrol icon={[preFix, faIconright]}/>
            </SvgImageWrapper>
            <Card.Body>
                <Card.Title>{partnerTitle}</Card.Title>
                <Card.Text>
                    {partnerText}
                </Card.Text>
                <Button variant="primary">{btnPartnerText}</Button>
            </Card.Body>
        </CustomCard>
        </Col>
      </Row>
    </ContainerWrapper>
    <NextSection>
        <ArrowDown src={arrowDown} />
    </NextSection>
    </SectionBackgroundColor>
)

} 


export default BelowMainContent
