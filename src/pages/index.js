/* eslint-disable react/no-danger */
import React from 'react';
import {useStaticQuery, graphql } from "gatsby"
// import styled from 'styled-components';
import Layout from '../components/layout';
import TopContent from "../components/home/TopContent"
import SEO from "../components/seo"
import BelowMainContent from "../components/home/BelowMainContent"
import WhoWeAre from "../components/home/WhoWeAre"
// import Mission from "../components/home/Mission"
// import HowItAllStarted from "../components/home/HowItAllStarted"
// import Team from "../components/home/Team"
import Donation from "../components/home/Donation"
// import Projects from "../components/home/Project"
import ProjectItems from "../components/home/ProjectItems"

// const SectionVisionMissionImage = styled.img`
//   width: 100%;
//   margin: 0px 0px 0px 0px;
// `

// const HrSection = styled.div`
//   border-top: 1px solid #ccc;
// `



const IndexPage = () => {
    const {
        wpPage: {
          edges: [{ node: wpPage }],
        },
      } = useStaticQuery(graphql`
        query IndexPageQuery {
          wpPage: allWordpressPage(filter:{title: {eq: "Home"}}){
      edges{
        node{
    			title
          content
        acf{
          # Topcontent
          headline_h1
          headline_h2
         	button_text_topcontent
          button_url_topcontent
          background_image_topcontent{
              localFile{
              publicURL
            }
          }
          
       	
          # Below Maincontent
          icon_team{
            element
            class
            hex
            unicode
            __typename
            prefix
            
        
            
          }
          short_info_join
          join_team
          join_button
          team_button_text
          
    			icon_partner{
          	element
            class
            prefix
          }
          
          short_info_partner
          partner
          partner_button
          partner_button_text
          
          # How It All Started
          button_text_started
          button_link_started
        	button_section_background_image{
            localFile{
              publicURL
            }
          }

           # Who We Are
           who_we_are_title
          who_we_are_col1
          who_we_are_col2
          who_we_are_col3
          who_we_are_background_image{
            localFile{
              publicURL
            }
          }

          # Section Vision MissionImage
          sectionvisionmissionimage_text
                sectionvisionmissionimage{
                  localFile{
                    publicURL
                  }
                }
          
          # Donation
          donation_icon{
            prefix
            class
          }
              donation_text
              donation_url
              donation_background{
                localFile{
                  publicURL
                }
              }
      
            }
          }
        }
      }
        }
      `);


  return (
        <Layout>
    <SEO title="Home" keywords={['bunda', 'busoganordic', 'uganda']} />
    <TopContent 
      headlineH1={wpPage.acf.headline_h1}    
      headlineH2={wpPage.acf.headline_h2}    
      btnText={wpPage.acf.button_text_topcontent}    
      btnUrl={wpPage.acf.button_url_topcontent}
      topContentBgImage={wpPage.acf.background_image_topcontent.localFile.publicURL}    
    />
           <WhoWeAre 
        title={wpPage.acf.who_we_are_title} 
        col1={wpPage.acf.who_we_are_col1} 
        col2={wpPage.acf.who_we_are_col2} 
        col3={wpPage.acf.who_we_are_col3} 
        bgImage={wpPage.acf.who_we_are_background_image.localFile.publicURL} 
        />
      <BelowMainContent 
        iconTeam={wpPage.acf.icon_team.class}
        teamTitle={wpPage.acf.join_team}
        joinTeamText={wpPage.acf.short_info_join}
        preFix={wpPage.acf.icon_team.prefix}
        btnTeamText={wpPage.acf.team_button_text} 

        iconPartner={wpPage.acf.icon_partner.class}
        partnerTitle={wpPage.acf.partner}
        partnerText={wpPage.acf.short_info_partner}
        btnPartnerText={wpPage.acf.partner_button_text} 

        />
        {/* <HrSection /> */}
        <ProjectItems />
        {/* <Projects /> */}
      {/* <HowItAllStarted 
        btnText={wpPage.acf.button_text_started}
        btnUrl={wpPage.acf.button_link_started}
        bgImage={wpPage.acf.button_section_background_image.localFile.publicURL}
      /> */}

     {/* <SectionVisionMissionImage 
        src={wpPage.acf.sectionvisionmissionimage.localFile.publicURL}
        alt={wpPage.acf.sectionvisionmissionimage_text}
        />
      <Mission /> */}
      {/* <Team /> */}
      <Donation 
        prefix={wpPage.acf.donation_icon.prefix} 
        donateIcon={wpPage.acf.donation_icon.class} 
        donateText={wpPage.acf.donation_text} 
        donateUrl={wpPage.acf.donation_url} 
        donateBg={wpPage.acf.donation_background.localFile.publicURL} 
        />
  </Layout>
  )

}

export default IndexPage;