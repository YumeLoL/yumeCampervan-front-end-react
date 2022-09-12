import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url: string) => {
    const [data,setDate] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            
            try {
                const res = await axios.get(url)
                setDate(res.data)
            } catch (err) {
                setError(err as any)
            }

            setLoading(false)
        }

        fetchData()
    },[url])

    const reFetch = async () => {
        setLoading(true)
        
        try {
            const res = await axios.get(url)
            setDate(res.data)
        } catch (err) {
            setError(err as any)
        }

        setLoading(false)
    }


    return {data, loading, error, reFetch}
}

export default useFetch