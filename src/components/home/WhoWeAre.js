import React from "react"
import {Link } from "gatsby"
import { Row, Col, Container, Card } from "react-bootstrap"
import bgPattern from "../../images/interlaced.png"
import outSideTheBox from "../../images/outthebox.jpg"
import styled from 'styled-components';

const ContainerWrapper = styled(Container)`
    // text-align: center;
`


const HeadLineH1 = styled.h1`
text-transform: uppercase;
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3rem;
font-style: normal;
font-weight: 500;
letter-spacing: -0.03125em;
line-height: 1.06;
color: black;
text-align: center;
padding: 20px 0px 10px 0px;
`

const CustomCard = styled(Card)`
    margin: 40px 0px 40px 0px;
    // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    // box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border: 0px solid black;
    border-radius: 0px;

`

const SectionBackgroundColor = styled.div`
// background-color: ghostwhite;
// background-image: url(${bgPattern});
// padding: 75px 0px 75px 0px;
// background: rgb(23,32,37);
// background: linear-gradient(90deg, rgba(23,32,37,1) 0%, rgba(23,32,37,1) 5%, rgba(205,199,199,1) 100%);

`

// const NextSection = styled.div`
//     text-align: center;
//     margin: 50px 0px 50px 0px;
//     padding-bottom: 10px;

// `

const Image = styled.img`
    width: 100%;
    height: auto;
    // transform: skew(180deg,190deg);
    // transform: rotateY(20deg);
`

const ButtonLinkIntro = styled(Link)`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
color: black;
display: block;
width: 100%;
background-color: transparent;
border: 1px solid gray;
border-radius: 5px;
padding: 15px 30px 15px 30px;
text-decoration: none;
margin-top: 10px;
&:hover{
    color: #5cb85c;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #5cb85c;
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const WhoWeAre = (props) => {

    const {title, col1, col2, col3} = props;

    return (
    <SectionBackgroundColor>
    <ContainerWrapper>
      <Row>
            <CustomCard>
                <Row>
                <Col className="mb-3" lg={8} md={6} sm={12}>
                    <Card.Body>
                    <HeadLineH1>
                        {title}
                    </HeadLineH1>
                        <Card.Text>
                        <Row>
                            <Col className="mb-3" lg={6} md={6} sm={12}>
                            {col1}
                            </Col>
                            <Col className="mb-3" lg={6} md={6} sm={12}>
                            {col2}
                            </Col>
                            <Col className="mb-3" lg={12} md={12} sm={12}>
                            {col3}
                            <ButtonLinkIntro to="/vision" className="text-uppercase text-center"  variant="primary" size="lg" block>
                                OUR VISION
                            </ButtonLinkIntro>
                            </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                  <Image src={outSideTheBox} alt="image"/>
                </Col>
                </Row>
            </CustomCard>
      </Row>
    </ContainerWrapper>
    </SectionBackgroundColor>

)
}



export default WhoWeAre
