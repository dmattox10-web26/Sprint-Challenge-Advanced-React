import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAPI = (url) => {
    
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(res => {
        setResult(res.data)
        setLoading(false)
        })
        .catch(err => console.log(err))
    }, [url])
    
    return [result, loading]
}