import Layout from '../ui/organisms/Layout'

export const BookingPage = () => {
  // To retrieve the memberId:
  const memberData = JSON.parse(localStorage.getItem("yumeCamp_member") ?? "null"); 

  return (
     <Layout>
      <h1>member login and id is {memberData.memberId}</h1>

    </Layout>
   
  )
}
