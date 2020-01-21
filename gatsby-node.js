const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {

    graphql(
      `
        {
          allWordpressPage(filter:{title: {eq: "Home"}}) {
            edges {
              node {
                id
                slug
                status
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
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const indexPage = path.resolve("./src/pages/index.js")
        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(indexPage),
            context: edge.node,
          })
          resolve()
        })
      })
      // ==== END PAGES ====

      // ==== Projects ====

      graphql(
        `
        {
          allWordpressWpProject {
            edges {
              node{
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
        `
      )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const projectTemplate = path.resolve("./src/templates/project.js")
        _.each(result.data.allWordpressWpProject.edges, edge => {
          createPage({
            path: `/project/${edge.node.slug}/`,
            component: slash(projectTemplate),
            context: edge.node,
          })
        })
      })
      // ==== END OF Projects =====

      // ==== VISION ======
      graphql(
        `
        {
          allWordpressPage(filter:{title: {eq: "Vision"}}){
            edges{
              node{
                slug
                title
                  childWordPressAcfVisionLayout{
                    headline
                    col1
                    col2
                    col3
                    image{
                      localFile{
                        publicURL
                      }
                    }
                  }
                  
                  childWordPressAcfHowItAllStartedLayout{
                    headline
                    content_left_side
                    content_right_side
                  }
              }
            }
          }
          }
        `
      )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const visionTemplate = path.resolve("./src/templates/vision.js")
        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(visionTemplate),
            context: edge.node,
          })
        })
      })
      //==== END OF VISION ====
      // ==== CONTACT ======
      graphql(
      `
      {
        allWordpressPage(filter:{title: {eq: "Contact"}}){
          edges{
            node{
              slug
              title
              content
            }
          }
        }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const contactTemplate = path.resolve("./src/templates/contact.js")
      _.each(result.data.allWordpressPage.edges, edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(contactTemplate),
          context: edge.node,
        })
        resolve()
      })
    })
    //==== END OF CONTACT ====
      })
}