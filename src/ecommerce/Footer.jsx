import React, {useContext}from 'react'
import { cartCount } from './Main'

function Footer() {
const {heading} = useContext(cartCount)
console.log(heading)

  return (
    <div>
        <h1>{heading}</h1>
    </div>
  )
}

export default Footer