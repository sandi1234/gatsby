// import React from "react"
// import {useStaticQuery, graphql } from "gatsby"

// import { Row, Col, Container, Button, Card} from "react-bootstrap"
// // import stardust from "../../images/stardust.png"
// import styled from 'styled-components'
// import bgPattern from "../../images/cork-wallet.png"


// // const Image = styled.img`
// //     width: 100%;
// // `

// const CustomContainer = styled(Container)`
//     padding-top: 50px;
//     background-image: url(${bgPattern});

// `
// const CustomCard = styled(Card)`
//     margin-bottom: 50px;
//     &:hover{
//         box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        
  
//     }
// `


// const Team = () => {
//     const {
//         wpPage: {
//           edges: [{ node: wpPage }],
//         },
//       } = useStaticQuery(graphql`
//         query TeamQuery {
//           wpPage:   allWordpressAcfTeammember {
//                 edges {
//                 node {
//                     acf {
//                     team { 
       
//                         name
//                         title
//                         phone{
//                         element
//                         class
//                         }
//                         phone_ref
//                         facebook{
//                         element
//                         class
//                         }
//                         facebook_ref
//                         instagram{
//                         element
//                         class
//                         }
//                         instagram_ref
//                     }
//                     }
//                 }
//                 }
//             }
//         }
//       `);

//     return (
//        <CustomContainer fluid>
//            <Container>
//             <h1 className="text-center mb-5 mt-2">Meet The Team</h1>
//         <Row>
//             {wpPage.acf.team.map((member) => ( 
//             <Col key={member.phone_ref.toString()} lg={4} md={6} sm={12} className="mb-5">
//             <CustomCard>
//                 {/* <Image src={member.image.localFile.publicURL}  alt={member.name} /> */}
//                 <Card.Body className="text-center">
//             <Card.Title>{member.name}</Card.Title>
//                     <Card.Subtitle className="text-center mb-2 text-muted">{member.title}</Card.Subtitle>
//                     <Card.Text>
//                     {/* {member.description} */}
//                     </Card.Text>
//                     <Button variant="primary">{member.phone_ref.toString()}</Button>
//                 </Card.Body>
//                 </CustomCard>
//             </Col>
//             ))}
//         </Row>
//         </Container>
//     </CustomContainer>
// )
// }
// export default Team
