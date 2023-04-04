import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/atoms/Button'
import Layout from '../../ui/organisms/Layout'

export const ConfirmPage = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className={'w-full h-auto m-34 px-10'}>
        <p>Thank you for submitting your request! </p>
        <br />
        <p>We have received your request and are currently processing your information. Our team is working diligently to finalize your booking and secure your reservation.</p>
        <br />

        <p>You can check the status of your booking by logging into your account and accessing the 
          <Button theme='text' onClick={() => navigate('/member/bookings')} text="Bookings" />
          section. If you have any questions or concerns, please feel free to contact our customer service team at any time.</p>
        <br />

        <p>Thank you for choosing YumeCampervan, and we look forward to welcoming you soon.</p>
      </div>
    </Layout>
  )
}
