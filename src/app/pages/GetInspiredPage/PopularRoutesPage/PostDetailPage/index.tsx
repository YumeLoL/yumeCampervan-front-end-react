import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Text from "../../../../ui/atoms/Text";
import Title from "../../../../ui/atoms/Title";
import MainLayout from "../../../../ui/organisms/MainLayout";
import { IPost } from "../../../../libs/interface";

const PostDetailPage = () => {
  const { postId } = useParams();

  const url =`http://localhost:4000/highlights?id=${postId}`
  const [data,setDate] = useState<IPost>()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState<any>('')
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //         setLoading(true)
          
  //         try {
  //           const res = await axios.get(url)
  //           setDate(res.data[0])
  //         } catch (error) {
  //           setError(error)
  //         }
          
  //         setLoading(false)
  //       }
        
  //       fetchData()
  //     },[url])
      
  // console.log(data)
  
  return (
    <MainLayout>
      {loading ? (
        "loading...."
      ) : (
        <>
          <Title title={data?.title as string} size={"large"} />
          <Title title={data?.durations as string} size={"medium"} />
          <div>
            {data?.highlights.map((highlight: any) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
          <Text text={data?.content as string} />
        </>
      )}
    </MainLayout>
  );
};

export default PostDetailPage;
