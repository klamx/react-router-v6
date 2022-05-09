import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../data'

export default function Invoice() {
  let params = useParams()
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  // console.log(params)
  return (
    <main style={{ padding: '1ren' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  )
}
