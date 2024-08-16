import React from 'react'
import { CONTACT } from '../constants'

export default function Contract() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="text-center text-4xl my-10">Contract</h1>
      <div className="text-center tracking-tighter">
        <a href="#" className="border-b">{CONTACT.email}</a>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.address}</p>
      </div>
    </div>
  )
}
