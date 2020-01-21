import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import { Row, Col, Container} from "react-bootstrap"
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

const LearnMore = styled(Link)`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
text-align: center;
font-size: 1rem;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 100%;
background-color: #28a745;
border: 1px solid white;
border-radius: 5px;
padding: 15px 30px 15px 30px;
text-decoration: none;
&:hover{
    color: whitesmoke;
    background-color: #5cb85c;
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

function ProjectLeft(props) {
    const {project} = props;
    return(
      <Col lg={6} md={6} sm={12} className="mb-5">
      <CustomRow key={project.node.id}>
          <Col lg={6} md={6} sm={12} className="pl-0">
              <Image src={project.node.childWordPressAcfLayout.image.localFile.publicURL}  alt={project.node.childWordPressAcfLayout.image_text} />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h3>{project.node.title}</h3>
              <div dangerouslySetInnerHTML={{__html: project.node.excerpt}} />
              <LearnMore to={`/project/${project.node.slug}`} className="text-uppercase"  variant="primary" size="lg" block>
                    Learn More 
              </LearnMore>
          </Col>
      </CustomRow>
  </Col>
    )
}

function ProjectRight(props) {
  const {project} = props;
  return(
    <Col lg={6} md={6} sm={12} className="mb-5">
    <CustomRow key={project.node.id}>
        <Col lg={6} md={6} sm={12}>
          <h3>{project.node.title}</h3>
            <div dangerouslySetInnerHTML={{__html: project.node.excerpt}} />
            <LearnMore to={`/project/${project.node.slug}`} className="text-uppercase"  variant="primary" size="lg" block>
              Learn More 
            </LearnMore>
        </Col>
        <Col lg={6} md={6} sm={12} className="pl-0">
            <Image src={project.node.childWordPressAcfLayout.image.localFile.publicURL}  alt={project.node.childWordPressAcfLayout.image_text} />
        </Col>
    </CustomRow>
</Col>
  )
}

function ProjectPlacement(props){
  const {item, index} = props;
  if(index % 2 === 0) {
    return <ProjectLeft project={item} />
  }
    return <ProjectRight project={item} />
}

const ProjectItems = () => {

    return (
        <StaticQuery query={graphql`
        {
          allWordpressWpProject {
            edges {
              node {
                id
                slug
                title
                content
                excerpt
                childWordPressAcfLayout{
                    image_text
                    image{
                      localFile{
                        publicURL
                      }
                    }
                }
              }
            }
          }
        }
        `} render = {props => (
           <CustomContainer>
            <h1 className="text-center mb-5 mt-2">Ongoing Projects</h1>
              <Row>
              {props.allWordpressWpProject.edges.map((projectItem, index) => (
                <ProjectPlacement key={projectItem.node.id} item={projectItem} index={index}/>
              ))}
              </Row> 
            </CustomContainer >
            )} />
    )
}

export default ProjectItems;