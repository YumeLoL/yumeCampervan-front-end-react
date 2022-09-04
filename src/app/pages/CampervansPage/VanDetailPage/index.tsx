import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../../ui/organisms/MainLayout'

const VanDetailPage = () => {
    const { id } = useParams()
    console.log(id)
  return (
    <MainLayout>VanDetailPage {id}</MainLayout>
  )
}

export default VanDetailPage