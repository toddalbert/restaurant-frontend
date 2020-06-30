import React, { Fragment } from 'react'
import Item from './Item'

function Section(props) {
  let { name, items } = props
  console.log(name, items)
  return (
    <Fragment>
      <h2>{name.toUpperCase()}</h2>
      <div className="menu-section">
        {items.map((item, index) => {
          return <Item
            key={index}
            item={item} />
        })}
      </div>
    </Fragment>
  )
}

export default Section