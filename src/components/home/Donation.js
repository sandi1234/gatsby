import React from "react"
import {Link } from "gatsby"
import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components'
// import {Donate} from "styled-icons/fa-solid/Donate"
import stardust from "../../images/stardust.png"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const ContentWraper = styled.div`
padding: 75px 0px 105px 0px;
text-align: center;
// background-image: url(${stardust});
`

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
    color: #5cb85c;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #5cb85c;
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const DonationDonate = styled(FontAwesomeIcon)`
    font-size: 200px;
    color: #5cb85c;
    margin: 30px 0px 10px 0px;

`

const Donation = (props) => {
    const {
            prefix, 
            donateIcon, 
            donateText, 
            donateUrl, 
            donateBg
        } = props;


        var faIcon = donateIcon.replace("fas fa-", "")
    

    return (
  <ContentWraper style={{backgroundImage: `url(${donateBg})`}}>
       <Container>
        <Row className="justify-content-md-center">
            <Col lg={6} md={6} sm={6}>
                <DonationDonate icon={[prefix, faIcon]} />>
                <ButtonLinkIntro to={donateUrl} className="text-uppercase"  variant="primary" size="lg" block>
                    {donateText} 
                </ButtonLinkIntro>
            </Col>
        </Row>
    </Container>
  </ContentWraper>
)

}


export default Donation
