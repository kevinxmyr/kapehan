import React from 'react'
import ContactItem from './ContactItem'
import { contact as contactObj } from '../../data/contact'


export default function ContactList() {

const entries = Object.entries(contactObj)

  return (
    <div>
      <ContactItem item={entries} />
    </div>
  )
}
