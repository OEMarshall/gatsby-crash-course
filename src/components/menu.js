import React from 'react'
import Link from 'gatsby-link'

 const Menu = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px'
    }}>
    <ul style ={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
    }}>
    <Link to='/'>Home</Link>
    <Link to='/pages/page-2'>Page 2</Link>
    <Link to='/pages/page-3'>Page 3</Link>
    <Link to='/pages/counter'>Counter</Link>

    </ul>
    </div>
  )

export default Menu