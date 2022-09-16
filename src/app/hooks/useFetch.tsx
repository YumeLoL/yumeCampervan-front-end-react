import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url: string) => {
    const [data,setData] = useState<any[] | any>()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<any>('')
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            
            try {
                const res = await axios.get(url)
                setData( res.data)
            } catch (err) {
                setError(err)
            }

            setLoading(false)
        }

        fetchData()
    },[url])

    const reFetch = async () => {
        setLoading(true)
        
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (err) {
            setError(err)
        }

        setLoading(false)
    }


    return {data, loading, error, reFetch}
}

export default useFetch