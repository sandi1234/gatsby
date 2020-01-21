import React from "react"
import { Row, Col, Container, Button} from "react-bootstrap"
import stardust from "../../images/stardust.png"
import styled from 'styled-components'

const Image = styled.img`
    width: 100%;
`

const CustomContainer = styled(Container)`
    padding-top: 50px;
`
const CustomRow = styled(Row)`
    margin-bottom: 50px;
    &:hover{
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        
  
    }

    &:h3{
        color: green;
    } 
 

`


const Project = () => {
    return (
       <CustomContainer>
            <h1 className="text-center mb-5 mt-2">Ongoing Projects</h1>
        <Row>
            <Col lg={6} md={6} sm={12} className="mb-5">
                <CustomRow>
                    <Col lg={6} md={6} sm={12} className="pl-0">
                        <Image src={stardust}  alt="Dette er en test" />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3>Working syrian children</h3>
                        <p>
							Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.
                        </p>
                        <Button variant="success" href="#" block>Learn more</Button>
                    </Col>
                </CustomRow>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-5">
                <CustomRow>
           
                    <Col lg={6} md={6} sm={12}>
                        <h3>Working syrian children</h3>
                        <p>
							Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.
                        </p>
                        <Button variant="success" href="#" block>Learn more</Button>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pl-0">
                        <Image src={stardust}  alt="Dette er en test" />
                    </Col>
                </CustomRow>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-5">
                <CustomRow>
                    <Col lg={6} md={6} sm={12} className="pl-0">
                        <Image src={stardust}  alt="Dette er en test" />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3>Working syrian children</h3>
                        <p>
							Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.
                        </p>
                        <Button variant="success" href="#" block>Learn more</Button>
                    </Col>
                </CustomRow>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-5">
                <CustomRow>
                
                    <Col lg={6} md={6} sm={12}>
                        <h3>Working syrian children</h3>
                        <p>
							Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.
                        </p>
                        <Button variant="success" href="#" block>Learn more</Button>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pl-0">
                        <Image src={stardust}  alt="Dette er en test" />
                    </Col>
                </CustomRow>
            </Col>
        </Row>
    </CustomContainer>
)

}


export default Project
