import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import Goal from "../../images/mission.png"
import Vision from "../../images/vision.png"
import styled from 'styled-components';
import bgPattern from "../../images/cork-wallet.png"


const ContainerWrapper = styled(Container)`
    // text-align: center;
`

const MissionImage = styled.img`

`

const VisionImage = styled.img`
    width: 100%;
`


const HeadLineH1 = styled.h1`
text-transform: uppercase;
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3rem;
font-style: normal;
font-weight: r00;
letter-spacing: -0.03125em;
line-height: 1.06;
color: black;
text-align: center;
padding: 50px 0px 10px 0px;
`

const HeadLineH2 = styled.h2`
text-transform: uppercase;
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 1.5rem;
font-style: normal;
font-weight: r00;
letter-spacing: -0.03125em;
line-height: 1.06;
color: black;
`

const CustomCard = styled(Card)`
    margin: 20px 0px 20px 0px;
    // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;

`

const VisionLeft = styled(Row)`
    padding-left: 10px;

`

const SectionBackgroundColor = styled.div`
padding: 50px 0px 50px 0px;
background-image: url(${bgPattern});
// background-color: ghostwhite;
`

const Mission = () => (
    <SectionBackgroundColor>
    <ContainerWrapper>
      <Row>
        <Col lg={12} md={12} sm={12}>
        <CustomCard>
        <HeadLineH1>
                Our Mission And Vison
            </HeadLineH1>
            <Card.Body>
                <Card.Text>
                <Row>
                <Col className="mb-3" lg={6} md={6} sm={12}>
                <MissionImage src={Goal} />
                    </Col>
                    <Row>

                    </Row>
                    <Col className="mb-3" lg={6} md={6} sm={12}> 
                    <HeadLineH2>
                    Mission:
                    </HeadLineH2>
                    Inspiring and Empowering each Musoga for both personal and Regional development.
                    </Col>
                    <VisionLeft>
                        <Col className="mb-3" lg={12} md={12} sm={12}>
                            <HeadLineH2>
                                Vison
                            </HeadLineH2>
                                <Row>
                                    <Col className="mb-3" lg={3} md={3} sm={12}>
                                        To reach this goal we focus on encouraging Economic, Environmental and Social growth and integrity. Emphasis is on – but not limited to - Agriculture, Health, Education, IT skills, Technical skills, to help ensure job creation and promoting Entrepreneurship among the youth and women. 
                                    </Col>
                                    <Col className="mb-3" lg={3} md={3} sm={12}>
                                        We wish to bridge the gapb between Busoga, the Nordics and otheVision: Sustainable Environmental, Economic and Social Development of Busoga Kingdom and its people worldwide.r parts of the world and enhance mutual cultural exchange.
                                    </Col>    
                                    <Col className="mb-3" lg={6} md={6} sm={12}>
                                        <VisionImage src={Vision} />
                                    </Col>
                                </Row>
                            </Col>
                        </VisionLeft>
                    </Row>
                </Card.Text>
            </Card.Body>
        </CustomCard>
        </Col>
      </Row>
    </ContainerWrapper>
    </SectionBackgroundColor>

)

export default Mission
