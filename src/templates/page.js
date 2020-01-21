/* eslint-disable react/no-danger */
import React from 'react';
import {useStaticQuery, graphql } from "gatsby"
// import styled from 'styled-components';
import Layout from '../components/layout';
// import { Container} from "react-bootstrap"

// import WPGBlocks from "react-gutenberg"
// import { IWPGBlock } from "react-gutenberg/src/types"

//   interface IPost {
//     // wordpress_id: number
//     // id: number
//     // title: string
//     blocks: IWPGBlock[]
//   }


const PageTemplate = () => {
    const {
        wpPage: {
          edges: [{ node: wpPage }],
        },
      } = useStaticQuery(graphql`
        query PageTemplateQuery {
          wpPage: allWordpressPage(filter:{title: {eq: "Trolmand"}}) {
    edges {
      node{
     	content

      }
    }
  }
        }
      `);


  return (
        <Layout>
        {/* <WPGBlocks blocks={wpPage.blocks} /> */}
        <div dangerouslySetInnerHTML={{ __html: wpPage.content }}  />
  </Layout>
  )

}

export default PageTemplate;