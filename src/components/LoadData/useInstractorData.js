import { useEffect, useState } from "react"

// Load Image Data to display on about page
const useInstractorData = () => {
    const [instractorData, setInstractorData] = useState([])
    useEffect(() => {
        fetch('./instractorData.json')
            .then(res => res.json())
            .then(data => setInstractorData(data))
    }, [])
    return [instractorData, setInstractorData]
}
export default useInstractorData;