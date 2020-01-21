/* eslint-disable react/no-danger */
import React from 'react';
import { Row, Col, Container} from "react-bootstrap"
import Projects from "../components/home/ProjectItems"
import styled from 'styled-components';
import Layout from '../components/layout';

const TopImage = styled.img`
  width: 100%;
  margin: -100px 0px 0px 0px;
`

const CustomContainer = styled(Container)`

`

const Headline = styled.div`
    font-family: "FF Mark", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 50px 0px 50px 0px;
    text-align: center;
`


export default ({pageContext}) => (

    <Layout>
        <TopImage src={pageContext.childWordPressAcfVisionLayout.image.localFile.publicURL}  alt={pageContext.title}/>
        <CustomContainer>
            <Headline className="text-uppercase">{pageContext.childWordPressAcfVisionLayout.headline}</Headline>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    {pageContext.childWordPressAcfVisionLayout.col1}
                </Col>
                <Col lg={4} md={4} sm={12}>
                    {pageContext.childWordPressAcfVisionLayout.col2}
                </Col>
                <Col lg={4} md={4} sm={12}>
                    {pageContext.childWordPressAcfVisionLayout.col3}
                </Col>
            </Row>

            <Headline>{pageContext.childWordPressAcfHowItAllStartedLayout.headline}</Headline>
            <Row>
                <Col lg={6} md={6} sm={12}>
                  <div dangerouslySetInnerHTML={{ __html: pageContext.childWordPressAcfHowItAllStartedLayout.content_left_side}}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div dangerouslySetInnerHTML={{ __html: pageContext.childWordPressAcfHowItAllStartedLayout.content_right_side}}/>
                </Col>
            </Row>
            <Projects />
        </CustomContainer>

    </Layout>
);