/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

//register post
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => { //error check because this is a promise. 
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const pagePath = node.frontmatter.path;

      createPage({
        path: node.frontmatter.path,
        component: postTemplate
        
        // additional data can be passed via context
        // context: {
        // }
      })
    });
  });
};

exports.onPreBootstrap = () => {
  require("isomorphic-fetch");
};