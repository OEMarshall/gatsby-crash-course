import React from 'react'
import Link  from 'gatsby-link'

export default () => {
  return (
    <div style={{color:'teal'}}>
      <h1>Page 333</h1>
        <Link to='/'>Go back home</Link>
        <Link to='/counter'>COUNTER!</Link>
    </div>
  )
}
