import React from 'react'
import Link from 'gatsby-link'
import Counter from '../pages/counter'
import Layout from '../components/layout';


//data is the site metadata set in the config. 
export default ({data}) =>(
    
    //writing JSX
    <div style={{color:'tomato',backgroundColor: 'black'}}>
    <Layout>
      <h1>Hello world!</h1> 
      <p>THis is my second gatsby site.</p>
      <Link to ='/page-2' >Page 2 </Link>
      {/*
        THis is a JSX comment
        Components and pages can be used by just a simple import and 
        Creation down below
      */}
      <Counter color="green"/>
      <Link to='/sample.md'>Sample Page</Link>
      <h1>MetaData Table</h1>
      <table>
        <thead>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </thead>
        <tbody>
          {data.allFile.edges.map(({node}) => 
            <tr>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extention}
              </td>
              <td>
                {node.birthTime}
              </td>
            </tr>)}
        </tbody>
      </table>
      </Layout>
    </div>
  )


//example of graphql query. 
export const query = graphql`
{
	allFile {
	  edges {
	    node {
	      relativePath
        extension
        prettySize
        birthTime(fromNow: true)
	    }
	  }
	}
}
`
