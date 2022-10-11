import React from 'react'
import './buttons.scss'
function BigButton({title, action}) {
  return (
    <button className="bigbutton" onClick={action}>{title}</button>
  )
}

export default BigButton