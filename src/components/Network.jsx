import React from 'react'
import { networkLinks } from '../data/networkLinks'
import NetworkLink from './NetworkLink'

function Network() {

  return (
    <section className="network">
      {
        networkLinks.map((link, index) => (
          <NetworkLink key={index} link={link} />
        ))
      }
    </section> 
  )
}

export default Network