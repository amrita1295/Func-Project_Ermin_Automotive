import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
       <div>
        <h1>successful payment
        Reference No.{referenceNum}
        </h1>
       </div>
    )
}

export default PaymentSuccess