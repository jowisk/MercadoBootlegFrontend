import React from 'react'
import PaymentMethod from './PaymentMethod/PaymentMethod'
const PaymentMethodList = () => {

    const payments = [
        {method: "credit-card", text: "Hasta 14 cuotas sin interés", a: "google.com"},
        {method: "address-card", text: "Tarjeta de débito", a: "google.com"},
        {method: "circle-plus", text: "Más medios de pago", a: "google.com"},
        
    ]
  return (
    <div className="w-full flex mt-[40px] px-[5px] rounded-[5px] bg-white mb-[20px]">
    {payments.map((payment) => (
        <PaymentMethod
            method = {payment.method}
            text = {payment.text}
            a = {payment.a}
        />
    ))}
    </div>
  )
}

export default PaymentMethodList