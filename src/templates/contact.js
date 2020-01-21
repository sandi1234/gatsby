/* eslint-disable react/no-danger */
import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/layout';



export default ({pageContext}) => (

    <Layout>
        <h1>{pageContext.title}</h1>
        <div  dangerouslySetInnerHTML={{ __html: pageContext.content}}/>
    </Layout>
);