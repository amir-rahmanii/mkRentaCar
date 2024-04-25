import React from 'react'
import { Link } from 'react-router-dom'


export default function Button({children , classes , link}) {
        return (
          <Link to={link} className={`buttons ${classes}`}>
          {children}
          </Link>
        )
}
